import fs from "fs";
const html = fs.readFileSync("index.html", "utf8");
const fails = [];
if (html.length < 8000) fails.push("too small");
if (!/<title>/.test(html)) fails.push("no title");
if (!/name="description"/.test(html)) fails.push("no meta description");
if (!html.includes("© 2025")) fails.push("no copyright");
const s = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
for (let i = 0; i < s.length; i++) {
  try { new Function(s[i]); }
  catch (e) { fails.push(`syntax#${i}: ${e.message}`); }
}
for (const l of ["/readmescore/", "/promptdriftcheck/", "/weeklychangelog/", "/llmcostboard/", "/termtideweb/", "/dotenvguardian/", "/tokentimeline/"]) {
  if (!html.includes(l)) fails.push("ring missing " + l);
}
console.log(fails.length ? "SMOKE FAIL:\n" + fails.join("\n") : `smoke OK, ring(7) complete, ${html.length} bytes`);
