import { Helmet } from "react-helmet-async"

interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
}

export function SEO({ title, description, keywords, canonical }: SEOProps) {
  const isHomePage = title.includes("Home") || title.includes("Inicial");
  const siteTitle = isHomePage ? "Cicarelli Advogados | Especialista em Direito à Saúde SP" : title;
  
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Cicarelli Advogados",
    "url": "https://www.cicarelli.adv.br",
    "telephone": "+554130130001",
    "email": "contato@cicarelli.adv.br",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "hasMap": "https://www.google.com/maps/place/São+Paulo,+SP",
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
      <meta property="og:type" content="website" />
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
