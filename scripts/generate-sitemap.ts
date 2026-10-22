import fs from 'node:fs';
import { bairrosSP } from '../src/data/bairros';
import { blogPosts } from '../src/data/blog';
import { SITE_URL, corePaths, servicePaths } from '../src/data/site';
export const routes = [...corePaths, ...servicePaths.map(p => '/' + p), ...blogPosts.map(p => '/blog/' + p.slug), ...bairrosSP.map(p => '/bairro/' + p.slug)];
if (new Set(routes).size !== routes.length) throw new Error('Duplicate routes');
export function generateSitemap() {
 const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + routes.map(p => '  <url><loc>' + SITE_URL + p + '</loc></url>').join('\n') + '\n</urlset>\n';
 fs.writeFileSync('public/sitemap.xml', xml);
}
generateSitemap();
