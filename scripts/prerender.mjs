import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const { render, routes } = await import(pathToFileURL(path.resolve('.ssr/entry-server.js')).href);
const template = fs.readFileSync('dist/index.html', 'utf8');
for (const route of [...routes, '/404']) {
 const { html, head } = render(route);
 const target = route === '/' ? 'dist/index.html' : 'dist' + route + '.html';
 fs.mkdirSync(path.dirname(target), { recursive: true });
 fs.writeFileSync(target, template.replace('<!-- SEO_HEAD -->', head).replace('<div id="root"></div>', '<div id="root">' + html + '</div>'));
}
console.log('Rendered ' + routes.length + ' pages and 404.html');
