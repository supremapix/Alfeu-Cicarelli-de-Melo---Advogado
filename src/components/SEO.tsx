import { Helmet } from "react-helmet-async"

interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  customSchema?: object
  ogType?: string
}

export function SEO({ title, description, keywords, canonical, customSchema, ogType = "website" }: SEOProps) {
  const isHomePage = title.includes("Home") || title.includes("Inicial");
  const siteTitle = isHomePage ? "Cicarelli Sociedade de Advogados | Especialista em Direito da Saúde e Defesa Médica" : title;
  
  const schemaOrgJSONLD = customSchema || {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Cicarelli Sociedade de Advogados",
    "url": "https://www.cicarelli.adv.br",
    "telephone": "+5541999580015",
    "email": "contato@cicarelli.adv.br",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "areaServed": "BR",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/cicarelli.advogados/",
      "https://www.instagram.com/cicarelli.adv/"
    ]
  };

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/og-image.png" />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  )
}
