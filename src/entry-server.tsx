import { renderToString } from 'react-dom/server';
import App from './App';
import { routes } from '../scripts/generate-sitemap';
export { routes };
export function render(url: string) {
 let html = renderToString(<App url={url} />);
 const tags: string[] = [];
 // React 19 hoists metadata into the server output; serialize it into the document head.
 html = html.replace(/<title[^>]*>[\s\S]*?<\/title>|<meta\s[^>]*>|<link\s[^>]*>/g, tag => { tags.push(tag); return ''; });
 if (!tags.some(tag => tag.startsWith('<title'))) throw new Error('Missing title for ' + url);
 return { html, head: tags.join('') };
}
