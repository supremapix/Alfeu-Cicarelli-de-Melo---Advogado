import fs from 'node:fs';
import assert from 'node:assert/strict';
import { routes } from './generate-sitemap';
import { SITE_URL } from '../src/data/site';
const paths = new Set(routes);
let links = 0;
for (const route of routes) {
 const file = route === '/' ? 'dist/index.html' : 'dist' + route + '.html';
 const html = fs.readFileSync(file, 'utf8');
 assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, route + ': one H1');
 assert.equal((html.match(/<title[^>]*>/g) || []).length, 1, route + ': one title');
 assert.equal((html.match(/rel="canonical"/g) || []).length, 1, route + ': one canonical');
 assert.ok(html.includes('href="' + SITE_URL + route + '"'), route + ': own canonical');
 assert.equal((html.match(/name="description"/g) || []).length, 1, route + ': one description');
 for (const m of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(m[1]);
 for (const m of html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
  if (m[1].startsWith('/assets/') || /\.(png|css|ico)$/.test(m[1])) continue;
  assert.ok(paths.has(m[1]), route + ': broken link ' + m[1]); links++;
 }
}
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, routes.length);
assert.ok(fs.readFileSync('dist/404.html','utf8').includes('noindex, follow'));
assert.ok(!fs.readFileSync('dist/404.html','utf8').includes('rel="canonical"'));
assert.ok(!JSON.parse(fs.readFileSync('vercel.json','utf8')).rewrites);
console.log(JSON.stringify({ pages: routes.length, internalLinks: links, checks: 'H1, title, description, canonical, schema, links, sitemap, noindex 404: PASS' }));
