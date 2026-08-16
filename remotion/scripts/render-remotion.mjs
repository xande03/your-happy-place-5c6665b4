import { bundle } from "@remotion/bundler";
import {
  renderMedia,
  selectComposition,
  openBrowser,
} from "@remotion/renderer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function render() {
  console.log("Bundling video...");
  const bundled = await bundle({
    entryPoint: path.resolve(__dirname, "../src/index.ts"),
    webpackOverride: (config) => config,
  });

  console.log("Opening browser...");
  const browser = await openBrowser("chrome", {
    browserExecutable: "/bin/chromium",
    chromiumOptions: {
      args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"],
    },
    chromeMode: "chrome-for-testing",
  });

  console.log("Selecting composition...");
  const composition = await selectComposition({
    serveUrl: bundled,
    id: "main",
    puppeteerInstance: browser,
  });

  console.log("Rendering media...");
  await renderMedia({
    composition,
    serveUrl: bundled,
    codec: "h264",
    outputLocation: "/mnt/documents/aura-promo.mp4",
    puppeteerInstance: browser,
    muted: true,
    concurrency: 1,
  });

  console.log("Render complete!");
  await browser.close({ silent: false });
}

render().catch(err => {
  console.error(err);
  process.exit(1);
});
