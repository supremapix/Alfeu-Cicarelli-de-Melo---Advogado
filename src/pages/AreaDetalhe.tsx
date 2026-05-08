import { SEO } from "../components/SEO"

export default function AreaDetalhe({ id }: { id: string }) {
  return (
    <>
      <SEO title={`Atuação: ${id}`} description="Especialistas em Direito à Saúde." />
      <div className="pt-32 pb-20 container mx-auto px-4 max-w-7xl">
        <h1 className="font-serif text-4xl font-bold text-primary mb-8 mt-12 capitalize">{id.replace(/-/g, ' ')}</h1>
        <p className="text-gray-600">Detalhes da área de atuação. Em construção...</p>
      </div>
    </>
  )
}
