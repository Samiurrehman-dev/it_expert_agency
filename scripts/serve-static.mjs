import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";

const outputDirectory = path.resolve(process.cwd(), "out");
const port = Number.parseInt(process.env.PORT ?? "3000", 10);
const hostname = process.env.HOSTNAME ?? "0.0.0.0";

const contentTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webm": "video/webm",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

if (!existsSync(outputDirectory)) {
  console.error('Missing "out" directory. Run "npm run build" first.');
  process.exit(1);
}

function resolveRequestFile(requestPath) {
  let decodedPath;

  try {
    decodedPath = decodeURIComponent(requestPath);
  } catch {
    return null;
  }

  const relativePath = decodedPath.replace(/^\/+/, "");
  const candidates = path.extname(relativePath)
    ? [relativePath]
    : [
        path.join(relativePath, "index.html"),
        `${relativePath}.html`,
        relativePath,
      ];

  for (const candidate of candidates) {
    const absolutePath = path.resolve(outputDirectory, candidate);

    if (
      !absolutePath.startsWith(`${outputDirectory}${path.sep}`) &&
      absolutePath !== outputDirectory
    ) {
      continue;
    }

    if (existsSync(absolutePath) && statSync(absolutePath).isFile()) {
      return absolutePath;
    }
  }

  return null;
}

function sendFile(response, filePath, statusCode = 200, method = "GET") {
  const extension = path.extname(filePath).toLowerCase();
  const contentType = contentTypes[extension] ?? "application/octet-stream";
  const isStaticAsset = filePath.includes(
    `${path.sep}_next${path.sep}static${path.sep}`,
  );

  response.writeHead(statusCode, {
    "Content-Type": contentType,
    "Cache-Control": isStaticAsset
      ? "public, max-age=31536000, immutable"
      : "no-cache",
  });

  if (method === "HEAD") {
    response.end();
    return;
  }

  createReadStream(filePath).pipe(response);
}

const server = createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method Not Allowed");
    return;
  }

  const requestUrl = new URL(
    request.url ?? "/",
    `http://${request.headers.host ?? "localhost"}`,
  );
  const filePath = resolveRequestFile(requestUrl.pathname);

  if (filePath) {
    sendFile(response, filePath, 200, request.method);
    return;
  }

  const notFoundPage = path.join(outputDirectory, "404.html");

  if (existsSync(notFoundPage)) {
    sendFile(response, notFoundPage, 404, request.method);
    return;
  }

  response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Not Found");
});

server.listen(port, hostname, () => {
  console.log(`Static site ready at http://localhost:${port}`);
});
