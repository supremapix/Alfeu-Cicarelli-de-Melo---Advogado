import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { bairrosSP } from "@/data/bairros"

export default function MapaDoSite() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <>
      <SEO title="Mapa do Site | Cicarelli Advogados" description="Encontre rapidamente a página desejada. Mapa do site do escritório Cicarelli Advogados." />
      
      <div className="pt-32 pb-24 bg-gray-lt min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Mapa do Site</h1>
            <p className="text-gray-600 text-lg">
              Navegue rapidamente e encontre as páginas da Cicarelli Advogados.
            </p>
          </motion.div>

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
            <h2 className="font-serif text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-2 text-gold">Atendimento Local em SP</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
               {bairrosSP.map((bairro) => (
                  <Link key={bairro.slug} to={`/bairro/${bairro.slug}`} className="text-sm text-gray-500 hover:text-gold transition-colors">
                     {bairro.nome}
                  </Link>
               ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
