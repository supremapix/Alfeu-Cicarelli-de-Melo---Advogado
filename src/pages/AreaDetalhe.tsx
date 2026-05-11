import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"
import { HeroSection } from "@/components/HeroSection"
import { AdvogadoProfile } from "@/components/AdvogadoProfile"
import { LeadForm } from "@/components/LeadForm"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { serviceContent } from "@/data/services"

export default function AreaDetalhe({ id: propId }: { id?: string }) {
  const { slug } = useParams<{ slug: string }>()
  const idToUse = slug || propId || ""
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  }

  const content = serviceContent[idToUse] || serviceContent["default"]

  return (
    <>
      <SEO title={content.seoTitle} description={content.seoDesc} keywords={`advogado plano saúde sp, ${content.title}, sao paulo`} />
      
      <HeroSection
        badge={`Defesa do Paciente • São Paulo`}
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        showForm={true}
        height="large"
      />

      <div className="py-24 bg-gray-lt">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="lg:col-span-8">
              <div className="mb-6 flex items-center text-sm font-medium text-gray-500 uppercase tracking-widest">
                 <Link to="/areas-de-atuacao" className="hover:text-gold transition-colors">Áreas de Atuação</Link>
                 <i className="ri-arrow-right-s-line mx-2"></i>
                 <span className="text-primary">{content.title}</span>
              </div>
              
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gold/10 prose prose-lg max-w-none text-gray-700">
                {/* Bloco 1: O que é */}
                {content.bloco1}
                
                {/* Bloco 2: O que a Lei Garante */}
                <h3 className="font-serif text-2xl text-primary mt-12 mb-6">O que a lei garante em São Paulo</h3>
                {content.bloco2}

                {/* Bloco 3: Como Resolvemos */}
                <h3 className="font-serif text-2xl text-primary mt-12 mb-6">Como a Cicarelli Advogados Resolve</h3>
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 mb-8">
                  <ul className="space-y-4 marker:text-gold list-disc pl-6">
                    <li><strong>Análise Tática Gratuita:</strong> Estudamos seu prontuário e a negativa (em até 2h úteis).</li>
                    <li><strong>Pedido de Liminar no TJSP:</strong> Peticionamos com pedido de tutela de urgência. Em casos graves, direto no plantão judiciário.</li>
                    <li><strong>Cumprimento da Ordem:</strong> Acompanhamos a intimação do plano para garantir que o procedimento seja liberado no hospital indicado.</li>
                  </ul>
                </div>

                {/* Bloco 4: Custos */}
                <h3 className="font-serif text-2xl text-primary mt-12 mb-6">Transparência nas Custas</h3>
                <p>
                  A incerteza financeira não deve impedir você de buscar seus direitos. Oferecemos <strong>análise de viabilidade gratuita</strong>. Nossos honorários são claros e, em várias teses pacificadas, adotamos o formato de <strong>cobrança apenas no êxito (Risco Zero para o cliente)</strong> ou parcelamento facilitado.
                </p>

                {/* Bloco 5: FAQ Específico */}
                <h3 className="font-serif text-2xl text-primary mt-12 mb-6">Dúvidas Frequentes sobre {content.title}</h3>
                <Accordion type="single" collapsible className="w-full">
                  {content.faq.map((item: any, idx: number) => (
                    <AccordionItem key={idx} value={`faq-${idx}`}>
                      <AccordionTrigger className="text-left font-bold text-primary hover:text-gold transition-colors">{item.pergunta}</AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed text-base">
                        {item.resposta}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gold/30 flex flex-col sm:flex-row items-center gap-6">
                  <div className="shrink-0 w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center">
                     <i className="ri-file-list-3-fill text-3xl"></i>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-primary mb-2">Checklist de Documentos (Separe Já)</h4>
                    <p className="text-sm">Para iniciarmos a liminar: <strong>(1) Relatório Médico detalhado, (2) Negativa Formal (ou e-mail) e (3) Documentos Pessoais.</strong></p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar CTA / Sticky Nav (optional) */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-32">
                 <div className="bg-primary text-center p-8 rounded-3xl shadow-elegant border border-gold/20 text-white">
                   <div className="w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="ri-whatsapp-fill text-3xl"></i>
                   </div>
                   <h3 className="font-serif text-2xl font-bold mb-4">Fale agora com o Advogado</h3>
                   <p className="text-gray-300 mb-8 text-sm">Não aceite respostas automáticas do seu plano. Avaliamos seu caso gratuitamente pelo WhatsApp.</p>
                   <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer" className="block w-full bg-gold hover:bg-gold-dk text-primary font-bold py-4 rounded-xl uppercase tracking-wider text-sm transition-colors">
                     Iniciar Conversa
                   </a>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <AdvogadoProfile 
        imageIndex={4} 
        title={`Especialista na sua Defesa: ${content.title}`} 
        altText={`Advogado Dr. Alfeu Cicarelli atuando em casos de ${content.title}`} 
      />
    </>
  )
}
