import { SEO } from "../components/SEO"
import { useParams } from "react-router-dom"

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <>
      <SEO title={`Artigo: ${slug}`} description="Artigos e novidades sobre Direito à Saúde." />
      <div className="pt-32 pb-20 container mx-auto px-4 max-w-7xl">
        <h1 className="font-serif text-4xl font-bold text-primary mb-8 mt-12 capitalize">{slug?.replace(/-/g, ' ')}</h1>
        <p className="text-gray-600">Conteúdo do artigo em construção...</p>
      </div>
    </>
  )
}
