import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { bairrosSP } from "@/data/bairros"
import { HeroSection } from "@/components/HeroSection"
import { AdvogadoProfile } from "@/components/AdvogadoProfile"

export default function MapaDoSite() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <>
      <SEO title="Mapa do Site | Cicarelli Advogados" description="Encontre rapidamente a página desejada. Mapa do site do escritório Cicarelli Advogados." />
      
      <HeroSection
        title="Mapa do Site"
        subtitle="Navegue rapidamente e encontre todas as páginas da Cicarelli Advogados."
        height="small"
      />

      <div className="py-24 bg-gray-lt min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-[0.03] pointer-events-none z-0" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 bg-white p-10 rounded-3xl shadow-sm border border-gold/10">
            {/* Institucional */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-2 text-gold">Institucional</h2>
              <ul className="space-y-4">
                <li><Link to="/" className="text-gray-600 hover:text-gold transition-colors font-medium">Página Inicial</Link></li>
                <li><Link to="/profissionais" className="text-gray-600 hover:text-gold transition-colors font-medium">Os Advogados</Link></li>
                <li><Link to="/casos-sucesso" className="text-gray-600 hover:text-gold transition-colors font-medium">Casos de Sucesso em SP</Link></li>
                <li><Link to="/contato" className="text-gray-600 hover:text-gold transition-colors font-medium">Contato e Plantão</Link></li>
              </ul>
            </div>

            {/* Áreas de Atuação */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-2 text-gold">Áreas de Atuação</h2>
              <ul className="space-y-4">
                <li><Link to="/areas-de-atuacao" className="text-gray-600 hover:text-gold transition-colors font-medium">Ver todas as Áreas</Link></li>
                <li><Link to="/negativa-de-cirurgia" className="text-gray-600 hover:text-gold transition-colors font-medium">Negativa de Cirurgia</Link></li>
                <li><Link to="/reajustes-abusivos" className="text-gray-600 hover:text-gold transition-colors font-medium">Reajustes Abusivos</Link></li>
                <li><Link to="/medicamentos-alto-custo" className="text-gray-600 hover:text-gold transition-colors font-medium">Medicamentos de Alto Custo</Link></li>
                <li><Link to="/home-care" className="text-gray-600 hover:text-gold transition-colors font-medium">Home Care / Internação</Link></li>
                <li><Link to="/erro-medico" className="text-gray-600 hover:text-gold transition-colors font-medium">Erro Médico</Link></li>
                <li><Link to="/autismo-aba" className="text-gray-600 hover:text-gold transition-colors font-medium">Terapias Autismo (ABA)</Link></li>
              </ul>
            </div>

            {/* Conteúdo e Dúvidas */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-2 text-gold">Conteúdo e Dúvidas</h2>
              <ul className="space-y-4">
                <li><Link to="/faq" className="text-gray-600 hover:text-gold transition-colors font-medium">Dúvidas Frequentes (FAQ)</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-gold transition-colors font-medium">Blog da Saúde</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-10 rounded-3xl shadow-sm border border-gold/10">
            <h2 className="font-serif text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-2 text-gold">Atendimento Local em SP por Região</h2>
            
            {Array.from(new Set(bairrosSP.map(b => b.zona))).map((zona) => (
              <div key={zona} className="mb-8 last:mb-0">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-4 border-b border-gray-50 pb-2">Zona {zona}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {bairrosSP.filter(b => b.zona === zona).map((bairro) => (
                    <Link key={bairro.slug} to={`/bairro/${bairro.slug}`} className="text-sm text-gray-500 hover:text-gold transition-colors block py-1">
                       {bairro.nome}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <AdvogadoProfile 
        imageIndex={2} 
        title="Transparência e Foco no Cliente" 
        altText="Dr. Alfeu Cicarelli advogado de saúde" 
      />
    </>
  )
}
