import fs from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";

const defaultCaptureDir = "/Volumes/M2/JCHCWEB";
const captureDir = resolveCaptureDir(
  process.argv[2] || process.env.CAPTURE_DIR || defaultCaptureDir,
);
const inspectOnly = process.argv.includes("--inspect");
const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT || 4277);
const preferredOrigin = process.env.CAPTURE_ORIGIN || "";
const rewriteOrigin = process.env.REWRITE_ORIGIN !== "false";

const MIME_TYPES = new Map([
  [".css", "text/css; charset=utf-8"],
  [".gif", "image/gif"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "application/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".map", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".webp", "image/webp"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
  [".xml", "application/xml; charset=utf-8"],
]);

const index = loadCaptureIndex(captureDir, preferredOrigin);
const staticMounts = loadStaticMounts(captureDir);

if (inspectOnly) {
  printSummary(index);
  process.exit(0);
}

const server = http.createServer((req, res) => {
  try {
    const requestUrl = new URL(req.url || "/", index.primaryOrigin);
    const resolved = resolveRequest(index, requestUrl, req.headers.accept || "");

    if (!resolved) {
      writeText(res, 404, "text/plain; charset=utf-8", `Not Found: ${requestUrl.pathname}`);
      return;
    }

    sendResolvedResponse(index, requestUrl, resolved, res);
  } catch (error) {
    writeText(
      res,
      500,
      "text/plain; charset=utf-8",
      `Server error\n${error instanceof Error ? error.message : String(error)}`,
    );
  }
});

server.listen(port, host, () => {
  console.log(`Capture root: ${captureDir}`);
  console.log(`Primary origin: ${index.primaryOrigin}`);
  console.log("Serving URLs:");
  for (const url of formatListenUrls(host, port, index.defaultRoute)) {
    console.log(`- ${url}`);
  }
  console.log(`Mapped requests: ${index.exact.size}`);
  console.log(`HTML entry routes: ${index.htmlRoutes.slice(0, 8).join(", ") || "(none)"}`);
});

function resolveCaptureDir(input) {
  if (!input) {
    throw new Error(
      "Missing capture directory. Pass it as the first argument, CAPTURE_DIR, or set a code default.",
    );
  }

  const resolved = path.resolve(input);
  if (!fs.existsSync(resolved) || !fs.statSync(resolved).isDirectory()) {
    throw new Error(`Capture directory not found: ${resolved}`);
  }

  return resolved;
}

function loadCaptureIndex(rootDir, preferred) {
  const logPath = path.join(rootDir, "log.txt");
  if (!fs.existsSync(logPath)) {
    throw new Error(`log.txt not found in capture directory: ${rootDir}`);
  }

  const entries = parseLogTxt(logPath, rootDir);
  const httpEntries = entries.filter((entry) => entry.url.protocol === "http:" || entry.url.protocol === "https:");
  if (httpEntries.length === 0) {
    throw new Error("No http/https requests found in log.txt");
  }

  const primaryOrigin = choosePrimaryOrigin(httpEntries, preferred);
  const originEntries = httpEntries.filter((entry) => entry.url.origin === primaryOrigin);
  const primaryHostRoot = detectPrimaryHostRoot(rootDir, originEntries);

  const exact = new Map();
  const normalized = new Map();
  const htmlRoutes = [];

  for (const entry of originEntries) {
    const exactKey = makeExactKey(entry.url);
    const normalizedKey = makeNormalizedKey(entry.url);
    if (!exact.has(exactKey)) {
      exact.set(exactKey, entry);
    }
    if (!normalized.has(normalizedKey)) {
      normalized.set(normalizedKey, entry);
    }

    if (isHtmlFile(entry.filePath)) {
      htmlRoutes.push(entry.url.pathname + entry.url.search);
    }
  }

  const defaultHtmlEntry = chooseDefaultHtmlEntry(originEntries);
  const defaultRoute = defaultHtmlEntry
    ? `${defaultHtmlEntry.url.pathname}${defaultHtmlEntry.url.search}`
    : "/";

  return {
    captureDir: rootDir,
    defaultHtmlEntry,
    defaultRoute,
    exact,
    htmlRoutes: dedupe(htmlRoutes),
    normalized,
    originEntries,
    primaryHostRoot,
    primaryOrigin,
    rewriteOrigin,
  };
}

function parseLogTxt(logPath, rootDir) {
  const lines = fs.readFileSync(logPath, "utf8").split(/\r?\n/);
  const entries = [];

  for (const line of lines) {
    if (!line.trim()) continue;
    const parts = line.split("\t");
    if (parts.length < 5) continue;

    const [statusText, method, sizeText, rawUrl, relativeFile] = parts;
    const url = safeUrl(rawUrl);
    if (!url) continue;

    const filePath = path.resolve(rootDir, relativeFile);
    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) continue;

    entries.push({
      method,
      relativeFile,
      size: Number(sizeText) || 0,
      status: Number(statusText) || 0,
      url,
      filePath,
    });
  }

  return entries;
}

function choosePrimaryOrigin(entries, preferred) {
  if (preferred) {
    const preferredUrl = safeUrl(preferred);
    if (!preferredUrl) {
      throw new Error(`Invalid CAPTURE_ORIGIN: ${preferred}`);
    }
    const hit = entries.some((entry) => entry.url.origin === preferredUrl.origin);
    if (!hit) {
      throw new Error(`CAPTURE_ORIGIN not found in log.txt: ${preferredUrl.origin}`);
    }
    return preferredUrl.origin;
  }

  const counts = new Map();
  for (const entry of entries) {
    counts.set(entry.url.origin, (counts.get(entry.url.origin) || 0) + 1);
  }

  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
}

function detectPrimaryHostRoot(rootDir, entries) {
  const entry = entries[0];
  if (!entry) {
    throw new Error("No entries available for primary origin");
  }

  const rootSegment = entry.relativeFile.split(/[\\/]/)[0];
  return path.resolve(rootDir, rootSegment);
}

function chooseDefaultHtmlEntry(entries) {
  const htmlEntries = entries.filter((entry) => isHtmlFile(entry.filePath));
  if (htmlEntries.length === 0) return null;

  const slashEntry = htmlEntries.find((entry) => entry.url.pathname === "/");
  if (slashEntry) return slashEntry;

  const homeEntry = htmlEntries.find((entry) => entry.url.pathname === "/home");
  if (homeEntry) return homeEntry;

  return htmlEntries[0];
}

function makeExactKey(url) {
  return `${url.pathname}${url.search}`;
}

function makeNormalizedKey(url) {
  return `${url.pathname}${normalizeSearchParams(url.searchParams)}`;
}

function normalizeSearchParams(searchParams) {
  const kept = [];

  for (const [key, value] of searchParams.entries()) {
    if (isIgnorableQueryKey(key)) {
      continue;
    }
    kept.push([key, value]);
  }

  kept.sort(([keyA, valueA], [keyB, valueB]) => {
    if (keyA === keyB) return valueA.localeCompare(valueB);
    return keyA.localeCompare(keyB);
  });

  const normalized = new URLSearchParams(kept).toString();
  return normalized ? `?${normalized}` : "";
}

function isIgnorableQueryKey(key) {
  return key === "_" || key === "_t" || key === "timestamp" || key === "t" || key === "v";
}

function resolveRequest(index, requestUrl, acceptHeader) {
  const mounted = resolveMountedFile(staticMounts, requestUrl.pathname);
  if (mounted) {
    return {
      filePath: mounted,
      method: "GET",
      relativeFile: path.relative(index.captureDir, mounted),
      size: fs.statSync(mounted).size,
      status: 200,
      url: requestUrl,
    };
  }

  const exactMatch = index.exact.get(makeExactKey(requestUrl));
  if (exactMatch) return exactMatch;

  const normalizedMatch = index.normalized.get(makeNormalizedKey(requestUrl));
  if (normalizedMatch) return normalizedMatch;

  const direct = resolveDirectFile(index.primaryHostRoot, requestUrl.pathname);
  if (direct) {
    return {
      filePath: direct,
      method: "GET",
      relativeFile: path.relative(index.captureDir, direct),
      size: fs.statSync(direct).size,
      status: 200,
      url: requestUrl,
    };
  }

  const wantsHtml = acceptHeader.includes("text/html") || acceptHeader.includes("*/*");
  if (wantsHtml && !path.extname(requestUrl.pathname) && index.defaultHtmlEntry) {
    return index.defaultHtmlEntry;
  }

  return null;
}

function loadStaticMounts(rootDir) {
  const mounts = [];
  const talentHostRoot = path.resolve(rootDir, "talent/GET-www.jchc.cn");

  const sharedMounts = [
    ["/cos-file", path.join(talentHostRoot, "cos-file")],
    ["/storage", path.join(talentHostRoot, "storage")],
  ];

  for (const [routePrefix, mountRoot] of sharedMounts) {
    if (fs.existsSync(mountRoot) && fs.statSync(mountRoot).isDirectory()) {
      mounts.push({
        routePrefix,
        rootDir: mountRoot,
      });
    }
  }

  const talentBackendRoot = path.resolve(rootDir, "talent/GET-www.jchc.cn/talent_backend");
  if (fs.existsSync(talentBackendRoot) && fs.statSync(talentBackendRoot).isDirectory()) {
    mounts.push({
      routePrefix: "/talent_backend",
      rootDir: talentBackendRoot,
    });
  }

  const talentRoot = path.resolve(rootDir, "talent/GET-www.jchc.cn/talent");
  if (fs.existsSync(talentRoot) && fs.statSync(talentRoot).isDirectory()) {
    mounts.push({
      routePrefix: "/talent",
      rootDir: talentRoot,
    });
  }
  return mounts;
}

function resolveMountedFile(mounts, pathname) {
  for (const mount of mounts) {
    if (pathname !== mount.routePrefix && !pathname.startsWith(`${mount.routePrefix}/`)) {
      continue;
    }

    const nestedPath = pathname.slice(mount.routePrefix.length) || "/";
    const direct = resolveDirectFile(mount.rootDir, nestedPath);
    if (direct) {
      return direct;
    }
  }

  return null;
}

function resolveDirectFile(root, pathname) {
  const safePath = safeJoin(root, pathname);
  if (!safePath) return null;

  if (fs.existsSync(safePath)) {
    const stat = fs.statSync(safePath);
    if (stat.isFile()) return safePath;
    if (stat.isDirectory()) {
      for (const candidate of ["index.html", "index.json"]) {
        const nested = path.join(safePath, candidate);
        if (fs.existsSync(nested) && fs.statSync(nested).isFile()) {
          return nested;
        }
      }
    }
  }

  if (!path.extname(pathname)) {
    for (const ext of [".html", ".json"]) {
      const withExt = `${safePath}${ext}`;
      if (fs.existsSync(withExt) && fs.statSync(withExt).isFile()) {
        return withExt;
      }
    }
  }

  return null;
}

function sendResolvedResponse(index, requestUrl, resolved, res) {
  const filePath = resolved.filePath;
  const contentType = getContentType(filePath);
  const relativeFile = path.relative(index.captureDir, filePath).split(path.sep).join("/");
  const responseHeaders = {
    "cache-control": "no-store",
    "content-type": contentType,
    "x-capture-file": toHeaderValue(relativeFile),
    "x-capture-origin": toHeaderValue(index.primaryOrigin),
    "x-capture-route": toHeaderValue(requestUrl.pathname + requestUrl.search),
  };

  if (isTextLike(contentType)) {
    let body = fs.readFileSync(filePath, "utf8");
    if (rewriteOrigin) {
      body = rewriteTextBody(body, index.primaryOrigin);
    }
    if (contentType.startsWith("text/html")) {
      body = injectLocalMarker(body, requestUrl, index.primaryOrigin);
    }

    const bodyBuffer = Buffer.from(body, "utf8");
    res.writeHead(200, {
      ...responseHeaders,
      "content-length": bodyBuffer.length,
    });
    res.end(bodyBuffer);
    return;
  }

  const stat = fs.statSync(filePath);
  res.writeHead(200, {
    ...responseHeaders,
    "content-length": stat.size,
  });
  fs.createReadStream(filePath).pipe(res);
}

function rewriteTextBody(body, primaryOrigin) {
  const primaryUrl = new URL(primaryOrigin);
  const alternateOrigin = `${primaryUrl.protocol === "https:" ? "http" : "https"}://${primaryUrl.host}`;

  return body.split(primaryOrigin).join("").split(alternateOrigin).join("");
}

function injectLocalMarker(html, requestUrl, primaryOrigin) {
  const marker = `<script>window.__LOCAL_CAPTURE__={path:${JSON.stringify(
    requestUrl.pathname + requestUrl.search,
  )},origin:${JSON.stringify(primaryOrigin)}};</script>`;
  if (html.includes("</head>")) {
    return html.replace("</head>", `${marker}</head>`);
  }
  return `${marker}${html}`;
}

function getContentType(filePath) {
  return MIME_TYPES.get(path.extname(filePath).toLowerCase()) || "application/octet-stream";
}

function isTextLike(contentType) {
  return (
    contentType.startsWith("text/") ||
    contentType.includes("javascript") ||
    contentType.includes("json") ||
    contentType.includes("xml") ||
    contentType.includes("svg")
  );
}

function isHtmlFile(filePath) {
  return path.extname(filePath).toLowerCase() === ".html";
}

function safeJoin(root, pathname) {
  const decoded = decodeURIComponent(pathname);
  const normalized = path.posix.normalize(decoded);
  const relative = normalized.replace(/^\/+/, "");
  const resolved = path.resolve(root, relative);
  const rootRelative = path.relative(root, resolved);
  if (rootRelative.startsWith("..") || path.isAbsolute(rootRelative)) {
    return null;
  }
  return resolved;
}

function safeUrl(value) {
  try {
    return new URL(value);
  } catch {
    return null;
  }
}

function toHeaderValue(value) {
  return encodeURI(String(value)).replace(/[\r\n]/g, "");
}

function dedupe(values) {
  return [...new Set(values)];
}

function formatListenUrls(hostname, listenPort, route) {
  if (hostname === "0.0.0.0" || hostname === "::") {
    const urls = [`http://127.0.0.1:${listenPort}${route}`];
    const seen = new Set(urls);
    const networks = os.networkInterfaces();

    for (const entries of Object.values(networks)) {
      for (const entry of entries || []) {
        if (entry.family !== "IPv4" || entry.internal) continue;
        const url = `http://${entry.address}:${listenPort}${route}`;
        if (!seen.has(url)) {
          seen.add(url);
          urls.push(url);
        }
      }
    }

    return urls;
  }

  return [`http://${hostname}:${listenPort}${route}`];
}

function printSummary(index) {
  console.log(`Capture root: ${index.captureDir}`);
  console.log(`Primary origin: ${index.primaryOrigin}`);
  console.log(`Host root: ${index.primaryHostRoot}`);
  console.log(`Mapped requests: ${index.exact.size}`);
  console.log(`Default route: ${index.defaultRoute}`);
  console.log("HTML routes:");
  for (const route of index.htmlRoutes.slice(0, 20)) {
    console.log(`- ${route}`);
  }
}

function writeText(res, statusCode, contentType, body) {
  res.writeHead(statusCode, { "content-type": contentType });
  res.end(body);
}
