import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../data/site';
interface SEOProps { title: string; description: string; keywords?: string; canonical?: string; customSchema?: object; ogType?: string; ogImage?: { path: string; alt: string; width: number; height: number }; noindex?: boolean; }
export function SEO({ title, description, keywords, canonical, customSchema, ogType = 'website', ogImage, noindex = false }: SEOProps) {
  const { pathname } = useLocation();
  const url = SITE_URL + (canonical ? new URL(canonical, SITE_URL).pathname : pathname);
  const socialImage = SITE_URL + (ogImage?.path || '/og-image.png');
  const schema = customSchema || { '@context': 'https://schema.org', '@type': 'LegalService', '@id': SITE_URL + '/#organization', name: 'Cicarelli Sociedade de Advogados', url: SITE_URL, telephone: '+5541999580015', email: 'contato@cicarelli.adv.br', address: { '@type': 'PostalAddress', addressLocality: 'Curitiba', addressRegion: 'PR', addressCountry: 'BR' }, areaServed: { '@type': 'City', name: 'São Paulo' } };
  return <Helmet><title>{title}</title><meta name="description" content={description} /><meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />{keywords && <meta name="keywords" content={keywords} />}{!noindex && <link rel="canonical" href={url} />}<meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:type" content={ogType} /><meta property="og:url" content={url} /><meta property="og:image" content={socialImage} />{ogImage && <><meta property="og:image:width" content={ogImage.width.toString()} /><meta property="og:image:height" content={ogImage.height.toString()} /><meta property="og:image:alt" content={ogImage.alt} /></>}<meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={title} /><meta name="twitter:description" content={description} /><meta name="twitter:image" content={socialImage} />{!noindex && <script type="application/ld+json">{JSON.stringify(schema).replace(/</g, '\u003c')}</script>}</Helmet>;
}
