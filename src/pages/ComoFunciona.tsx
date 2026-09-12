import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { HeroSection } from "@/components/HeroSection"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

export default function ComoFunciona() {
  return (
    <>
      <Helmet>
        <title>Como Funciona | Atuação Jurídica em Direito da Saúde - Cicarelli Advogados</title>
        <meta name="description" content="Entenda as etapas da atuação jurídica técnica perante o Tribunal de Justiça de São Paulo em ações com pedido de liminar contra operadoras de planos de saúde." />
      </Helmet>
      
      <HeroSection
        badge="✦ Atuação Jurídica em São Paulo ✦"
        title="Como Funciona Nossa Atuação"
        subtitle="Entenda as etapas do procedimento jurídico e dos pedidos de tutela de urgência perante o Judiciário"
        ctaPrimary={{
          label: "Falar com Advogado →",
          href: "https://wa.me/5541999580015"
        }}
        height="medium"
      />

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">Etapas do Procedimento Jurídico</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-gray-600 text-lg">Diante da recusa de cobertura pelo plano de saúde, adotamos rito técnico para demonstrar os requisitos da tutela de urgência.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Linha conectora oculta em mobile, visível em telas grandes */}
            <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[1px] bg-gold/30" />
            
            {[
              { num: "01", title: "Análise Documental", desc: "Exame detalhado do relatório médico circunstanciado, histórico clínico e negativa formal emitida pela operadora." },
              { num: "02", title: "Fundamentação Jurídica", desc: "Estruturação dos fundamentos de direito com base nas súmulas do TJSP, jurisprudência do STJ e Código de Defesa do Consumidor." },
              { num: "03", title: "Distribuição da Ação", desc: "Protocolo eletrônico perante a vara cível competente ou no plantão judiciário estadual para apreciação da tutela de urgência." }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative z-10 flex flex-col items-center group">
                <div className="w-[88px] h-[88px] rounded-full bg-white border border-gold/30 shadow-elegant flex items-center justify-center mb-8 bg-gradient-to-br from-white to-gold/5 group-hover:border-gold transition-colors duration-500">
                   <span className="font-serif text-3xl font-bold text-gold">{step.num}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4 text-center group-hover:text-gold transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Precisa de orientação jurídica?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">Nossa equipe está disponível para avaliar os documentos e esclarecer as dúvidas sobre o cabimento da ação judicial.</p>
            <a 
              href="https://wa.me/5541999580015"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dk text-primary font-bold rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Falar com Advogado pelo WhatsApp
            </a>
        </div>
      </section>
    </>
  )
}
