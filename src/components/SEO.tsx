import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../data/site';
interface SEOProps { title: string; description: string; keywords?: string; canonical?: string; customSchema?: object; ogType?: string; noindex?: boolean; }
export function SEO({ title, description, keywords, canonical, customSchema, ogType = 'website', noindex = false }: SEOProps) {
  const { pathname } = useLocation();
  const url = SITE_URL + (canonical ? new URL(canonical, SITE_URL).pathname : pathname);
  const schema = customSchema || { '@context': 'https://schema.org', '@type': 'LegalService', '@id': SITE_URL + '/#organization', name: 'Cicarelli Sociedade de Advogados', url: SITE_URL, telephone: '+5541999580015', email: 'contato@cicarelli.adv.br', address: { '@type': 'PostalAddress', addressLocality: 'Curitiba', addressRegion: 'PR', addressCountry: 'BR' }, areaServed: { '@type': 'City', name: 'São Paulo' } };
  return <Helmet><title>{title}</title><meta name="description" content={description} /><meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />{keywords && <meta name="keywords" content={keywords} />}{!noindex && <link rel="canonical" href={url} />}<meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:type" content={ogType} /><meta property="og:url" content={url} /><meta property="og:image" content={SITE_URL + '/og-image.png'} /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={title} /><meta name="twitter:description" content={description} /><meta name="twitter:image" content={SITE_URL + '/og-image.png'} />{!noindex && <script type="application/ld+json">{JSON.stringify(schema).replace(/</g, '\u003c')}</script>}</Helmet>;
}
