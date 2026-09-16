// Generates public/og.png (1200x630) at build time: navy background,
// wordmark, tagline. Reads the firm name and tagline from src/config/site.ts
// so the image stays in sync with the config.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const configSource = await readFile(
  path.join(root, "src/config/site.ts"),
  "utf8"
);
const name = configSource.match(/name:\s*"([^"]+)"/)?.[1] ?? "[FIRM NAME]";
const tagline =
  configSource.match(/tagline:\s*"([^"]+)"/)?.[1] ??
  "Buy-side advisory for first-time business buyers";

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#14213D"/>
  <rect x="80" y="388" width="72" height="4" fill="#9A3B26"/>
  <text x="80" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="76" font-weight="600" fill="#FAF8F5">${escape(name)}</text>
  <text x="80" y="460" font-family="Helvetica, Arial, sans-serif" font-size="32" fill="#FAF8F5" opacity="0.75">${escape(tagline)}</text>
</svg>`;

await mkdir(path.join(root, "public"), { recursive: true });
await sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(root, "public/og.png"));

console.log(`Generated public/og.png for "${name}"`);
