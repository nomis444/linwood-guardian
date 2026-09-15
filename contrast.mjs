// Measures (ignoring the text-shadow, so this is conservative) the background luminance behind each hero text block with the text
// hidden, and reports the worst-case WCAG contrast against the text colour.
// Usage: BASE=http://localhost:3311 node contrast.mjs
import puppeteer from "/Users/simon/Desktop/claude-workspace-template/reference/midpoint-pdf-template/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js";
const base = process.env.BASE || "http://localhost:3311";
const pages = ["/", "/about", "/personal-insurance", "/business-insurance/property-casualty", "/contact"];
const lum = (r, g, b) => { const f = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
const ratio = (L1, L2) => (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
const b = await puppeteer.launch({ headless: true });
let worst = 99;
for (const vw of [1440, 390]) {
  const p = await b.newPage(); await p.setViewport({ width: vw, height: 900 });
  for (const path of pages) {
    await p.goto(base + path, { waitUntil: "networkidle0" }); await new Promise(r => setTimeout(r, 1500));
    const boxes = await p.evaluate(() => {
      const hero = document.querySelector("section img[src*='buffalo-skyline']").closest("section");
      const els = [...hero.querySelectorAll("h1, p")].filter(e => e.offsetHeight > 0);
      const out = els.map(e => { const r = e.getBoundingClientRect(); return { tag: e.tagName, x: r.x, y: r.y, w: r.width, h: r.height, color: getComputedStyle(e).color, opacity: getComputedStyle(e).opacity }; });
      els.forEach(e => e.style.visibility = "hidden");
      return out;
    });
    const shot = await p.screenshot({ type: "png", encoding: "base64" });
    // Read the pixels back inside the page via a canvas; no native PNG decoder needed.
    const lights = await p.evaluate(async (b64, boxes) => {
      const img = new Image(); img.src = "data:image/png;base64," + b64; await img.decode();
      const c = document.createElement("canvas"); c.width = img.width; c.height = img.height;
      const ctx = c.getContext("2d"); ctx.drawImage(img, 0, 0);
      const lum = (r, g, b) => { const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
      return boxes.map(bx => {
        const x = Math.max(0, Math.floor(bx.x)), y = Math.max(0, Math.floor(bx.y));
        const w = Math.min(c.width - x, Math.ceil(bx.w)), h = Math.min(c.height - y, Math.ceil(bx.h));
        if (w <= 0 || h <= 0) return 0;
        const d = ctx.getImageData(x, y, w, h).data; let m = 0;
        for (let i = 0; i < d.length; i += 8) m = Math.max(m, lum(d[i], d[i + 1], d[i + 2]));
        return m;
      });
    }, shot, boxes);
    for (const bx of boxes) {
      const lMax = lights[boxes.indexOf(bx)];
      // text colour: white or white/80 composited on the lightest background pixel
      const a = bx.color.startsWith("rgba") ? parseFloat(bx.color.split(",")[3]) : 1;
      const bgL = lMax; const textL = a * 1 + (1 - a) * bgL; // white channel blended on bg
      // WCAG AA: 4.5:1 for body copy, 3:1 for large text (the h1 is 36px+ bold everywhere).
      const floor = bx.tag === "H1" ? 3 : 4.5; const r = ratio(textL, bgL); worst = Math.min(worst, r / floor * 4.5);
      console.log(`${vw}px ${path.padEnd(40)} ${bx.tag.padEnd(3)} lightest-bg L=${bgL.toFixed(3)} worst contrast ${r.toFixed(2)}:1 ${r < floor ? "FAIL" : "ok"} (floor ${floor})`);
    }
  }
  await p.close();
}
await b.close();
console.log(`WORST margin ${(worst / 4.5).toFixed(2)}x its floor`);
process.exit(worst < 4.5 ? 1 : 0);
