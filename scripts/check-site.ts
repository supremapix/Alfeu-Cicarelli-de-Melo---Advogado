import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { routes } from './generate-sitemap';
import { SITE_URL } from '../src/data/site';
const paths = new Set(routes);
const output = fs.realpathSync('dist');

function isOutputAsset(href: string) {
 try {
  const decoded = decodeURIComponent(href);
  if (!decoded.startsWith('/') || decoded.startsWith('//') || decoded.includes('\\') ||
      decoded.split('/').some(part => part === '.' || part === '..')) return false;
  const target = fs.realpathSync(path.resolve(output, '.' + decoded));
  const relative = path.relative(output, target);
  return relative !== '' && relative !== '..' && !relative.startsWith('..' + path.sep) &&
    !path.isAbsolute(relative) && fs.statSync(target).isFile();
 } catch {
  return false;
 }
}
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
 // React and Vite emit resource hints in the prerendered HTML; these are files, not navigation.
 for (const [tag] of html.matchAll(/<[a-z][\w:-]*\b(?:[^"'>]|"[^"]*"|'[^']*')*>/gi)) {
  const attributes = new Map<string, string>();
  const attributeSource = tag.replace(/^<[\w:-]+/, '');
  for (const [, name, doubleQuoted, singleQuoted, unquoted] of attributeSource.matchAll(
   /\s+([^\s=/><]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g
  )) attributes.set(name.toLowerCase(), doubleQuoted ?? singleQuoted ?? unquoted ?? '');
  const href = attributes.get('href')?.split(/[?#]/, 1)[0];
  if (!href?.startsWith('/') || href.startsWith('//')) continue;
  if (/^<link[\s>]/i.test(tag)) {
   const rel = attributes.get('rel')?.toLowerCase();
   const as = attributes.get('as')?.toLowerCase();
   if (rel === 'stylesheet' || rel === 'icon' || rel === 'apple-touch-icon' ||
       rel === 'modulepreload' || (rel === 'preload' && ['image', 'font', 'script', 'style'].includes(as ?? ''))) {
    assert.ok(isOutputAsset(href), route + ': missing or invalid static asset ' + href);
    continue;
   }
  }
  assert.ok(paths.has(href), route + ': broken link ' + href); links++;
 }
}
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, routes.length);
assert.ok(fs.readFileSync('dist/404.html','utf8').includes('noindex, follow'));
assert.ok(!fs.readFileSync('dist/404.html','utf8').includes('rel="canonical"'));
assert.ok(!JSON.parse(fs.readFileSync('vercel.json','utf8')).rewrites);
console.log(JSON.stringify({ pages: routes.length, internalLinks: links, checks: 'H1, title, description, canonical, schema, links, sitemap, noindex 404: PASS' }));
