import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function AreaDetalhe({ id: propId }: { id?: string }) {
  const { slug } = useParams<{ slug: string }>()
  const idToUse = slug || propId || ""
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  // Format ID to Title
  const title = idToUse 
    ? idToUse.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Especialidade'

  return (
    <>
      <SEO title={`Atuação em ${title} | Cicarelli Advogados`} description={`Defendemos pacientes que enfrentam problemas com planos de saúde envolvendo ${title}. Ações rápidas e com pedido de liminar.`} />
      
      <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="mb-6 flex items-center text-sm font-medium text-gray-500">
               <Link to="/areas-atuacao" className="hover:text-accent transition-colors">Áreas de Atuação</Link>
               <i className="ri-arrow-right-s-line mx-2"></i>
               <span className="text-primary">{title}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8 capitalize">{title}</h1>
            
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-elegant prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl text-gray-800 font-medium border-l-4 border-accent pl-6 mb-8">
                As abusividades cometidas por planos de saúde demandam conhecimento técnico e atuação cirúrgica por parte do advogado para proteger a saúde e a vida do paciente.
              </p>
              
              <p>
                Quando o paciente se depara com a necessidade de intervenção jurídica em casos como <strong>{title}</strong>, a agilidade do Poder Judiciário em analisar os pedidos em sede de <em>Tutela de Urgência (Liminar)</em> é o que muitas vezes garante a eficácia do tratamento.
              </p>
              
              <h3>Como o escritório pode ajudar?</h3>
              <ul>
                <li>Análise minuciosa do contrato do plano de saúde;</li>
                <li>Verificação das resoluções normativas mais recentes da ANS;</li>
                <li>Peticionamento ágil visando a concessão de liminar;</li>
                <li>Acompanhamento diário das decisões judiciais em caráter de urgência.</li>
              </ul>
              
              <div className="mt-12 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                <i className="ri-information-line text-4xl text-blue-600 mb-4"></i>
                <h4 className="font-serif text-2xl font-bold text-primary mb-3">Documentos Necessários</h4>
                <p className="mb-6">Para analisar seu caso de forma célere, você precisará de:</p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <span className="bg-white px-4 py-2 rounded-full border shadow-sm text-sm font-medium">Relatório Médico detalhado</span>
                  <span className="bg-white px-4 py-2 rounded-full border shadow-sm text-sm font-medium">Negativa por escrito convênio</span>
                  <span className="bg-white px-4 py-2 rounded-full border shadow-sm text-sm font-medium">Cópia da carteirinha</span>
                </div>
                <Button asChild size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white shadow-lg">
                  <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
                    <i className="ri-whatsapp-line mr-2 text-xl"></i> Enviar documentos no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
