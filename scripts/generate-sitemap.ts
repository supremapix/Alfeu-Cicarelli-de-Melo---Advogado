import fs from 'fs';
import path from 'path';
import { bairrosSP } from '../src/data/bairros';

const SITE_URL = 'https://www.cicarelli.adv.br';

const areasId = [
  "negativa-de-cirurgia",
  "reajustes-abusivos",
  "medicamentos-alto-custo",
  "home-care",
  "erro-medico",
  "autismo-aba",
];

export function generateSitemap() {
  const currentDate = new Date().toISOString();
  let urlset = '';

  // Function to add a URL to the XML
  const addUrl = (loc: string, priority: string, changefreq: string) => {
    urlset += `
  <url>
    <loc>${SITE_URL}${loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  };

  // Main pages
  addUrl('/', '1.0', 'weekly');
  addUrl('/areas-de-atuacao', '0.9', 'monthly');
  addUrl('/profissionais', '0.8', 'monthly');
  addUrl('/blog', '0.8', 'weekly');
  addUrl('/faq', '0.8', 'monthly');
  addUrl('/contato', '0.9', 'monthly');
  addUrl('/mapa-do-site', '0.7', 'monthly');

  // Blog posts (dummy ones for now, but should match those in Blog.tsx)
  addUrl('/blog/liminar-negativa-cirurgia-sp', '0.8', 'monthly');
  addUrl('/blog/reajuste-abusivo-plano-de-saude-idade', '0.8', 'monthly');
  addUrl('/blog/home-care-cobertura-obrigatoria', '0.8', 'monthly');

  // Areas
  areasId.forEach(area => {
    addUrl(`/${area}`, '0.9', 'monthly');
  });

  // Pages for Bairros (advogado-plano-de-saude-sao-paulo and zona + bairros)
  addUrl('/advogado-plano-de-saude-sao-paulo', '1.0', 'monthly');

  bairrosSP.forEach(bairro => {
    addUrl(`/advogado-plano-de-saude-sao-paulo/${bairro.zoneSlug}`, '0.8', 'monthly');
    addUrl(`/advogado-plano-de-saude-sao-paulo/${bairro.zoneSlug}/${bairro.slug}`, '0.7', 'monthly');
  });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;

  const publicPath = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath);
  }
  
  fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), sitemapXml);
  console.log('sitemap.xml generated successfully!');
}

generateSitemap();
