import { SEO } from "../components/SEO"
import { useParams } from "react-router-dom"

export default function Localidade() {
  const { cidade, bairro } = useParams<{ cidade: string, bairro?: string }>()
  const title = bairro ? `Advogado de Direito à Saúde em ${bairro}, ${cidade}` : `Advogado de Direito à Saúde em ${cidade}`
  
  return (
    <>
      <SEO title={title} description={`Especialista em Direito à Saúde atendendo clientes em ${bairro ? bairro + ', ' : ''}${cidade}.`} />
      <div className="pt-32 pb-20 container mx-auto px-4 max-w-7xl">
        <h1 className="font-serif text-4xl font-bold text-primary mb-8 mt-12 capitalize">{title}</h1>
        <p className="text-gray-600">Página Otimizada para SEO Local. Em construção...</p>
      </div>
    </>
  )
}
