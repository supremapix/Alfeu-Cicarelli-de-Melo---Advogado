import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"
import { LeadForm } from "@/components/LeadForm"

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
      <SEO title={`Atuação em ${title} SP | Cicarelli Advogados`} description={`Defendemos pacientes paulistas que enfrentam problemas com planos de saúde envolvendo ${title}. Ações rápidas no TJSP e pedidos de liminar.`} />
      
      <div className="pt-32 pb-20 bg-gray-lt min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="lg:col-span-8">
              <div className="mb-6 flex items-center text-sm font-medium text-gray-500 uppercase tracking-widest">
                 <Link to="/areas-de-atuacao" className="hover:text-gold transition-colors">Áreas de Atuação</Link>
                 <i className="ri-arrow-right-s-line mx-2"></i>
                 <span className="text-primary">{title}</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8 capitalize leading-tight">{title} em São Paulo</h1>
              
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gold/10 prose prose-lg max-w-none text-gray-700">
                <p className="lead text-xl text-primary font-medium border-l-4 border-gold pl-6 mb-8 italic">
                  As abusividades cometidas por planos de saúde no estado de São Paulo demandam conhecimento técnico profundo do TJSP e atuação cirúrgica por parte do advogado.
                </p>
                
                <p>
                  Quando o paciente se depara com a necessidade de intervenção jurídica em casos como <strong>{title}</strong>, a agilidade do Poder Judiciário em analisar os pedidos em sede de <em>Tutela de Urgência (Liminar)</em> é o que muitas vezes garante a eficácia do tratamento ou a preservação financeira da família.
                </p>
                
                <h3 className="font-serif text-2xl text-primary">Como nosso escritório atua no seu caso?</h3>
                <ul className="marker:text-gold">
                  <li>Análise minuciosa e gratuita do laudo médico e da recusa do plano;</li>
                  <li>Adequação do pleito às súmulas pacíficas do Tribunal de Justiça de São Paulo (TJSP);</li>
                  <li>Peticionamento no plantão judiciário (caso haja urgência emergencial);</li>
                  <li>Despacho direto com juízes e liminares proferidas muitas vezes em 24/48h úteis.</li>
                </ul>

                <h3 className="font-serif text-2xl text-primary mt-10">Não aceite a primeira resposta do Convênio</h3>
                <p>
                  A maciça maioria das recusas por "falta de cobertura no rol da ANS" ou rescisões unilaterais são consideradas ilegais perante a justiça paulista. Se o seu médico assistente recomendou o tratamento, o plano **não pode** substituí-lo.
                </p>
                
                <div className="mt-12 bg-gray-lt p-8 rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
                  <div className="shrink-0 w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center">
                     <i className="ri-file-list-3-fill text-3xl"></i>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-primary mb-2">Checklist de Documentos (Separe Já)</h4>
                    <p className="text-sm">Para iniciarmos a ação, precisamos de: <strong>(1) Relatório Médico detalhado, (2) Negativa Formal do Plano e (3) Cópia da Carteirinha e Documentos Pessoais.</strong></p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="bg-primary p-8 rounded-3xl shadow-elegant border border-gold/20">
                   <div className="text-center mb-6 border-b border-white/10 pb-6">
                     <h3 className="font-serif text-2xl font-bold text-gold mb-2">Plantão de Urgência SP</h3>
                     <p className="text-gray-300 text-sm">Nossa equipe está de prontidão para pleitear sua liminar. Fale conosco.</p>
                   </div>
                   <LeadForm />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  )
}
