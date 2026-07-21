import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const staticSource = resolve(root, "out");
const distRoot = resolve(root, "dist");
const clientRoot = resolve(distRoot, "client");
const serverRoot = resolve(distRoot, "server");
const metadataRoot = resolve(distRoot, ".openai");

rmSync(distRoot, { recursive: true, force: true });
mkdirSync(clientRoot, { recursive: true });
mkdirSync(serverRoot, { recursive: true });
mkdirSync(metadataRoot, { recursive: true });
cpSync(staticSource, clientRoot, { recursive: true });
cpSync(resolve(root, ".openai", "hosting.json"), resolve(metadataRoot, "hosting.json"));

const worker = `
async function fetchAsset(request, env) {
  const response = await env.ASSETS.fetch(request);
  if (response.status !== 404) return response;

  const url = new URL(request.url);
  if (!url.pathname.includes(".") && !url.pathname.endsWith("/")) {
    url.pathname += "/";
  }
  if (url.pathname.endsWith("/")) {
    url.pathname += "index.html";
    return env.ASSETS.fetch(new Request(url, request));
  }
  return response;
}

export default {
  async fetch(request, env) {
    return fetchAsset(request, env);
  }
};
`;

writeFileSync(resolve(serverRoot, "index.js"), worker.trimStart(), "utf8");
