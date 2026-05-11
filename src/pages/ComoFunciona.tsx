import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { HeroSection } from "@/components/HeroSection"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

export default function ComoFunciona() {
  return (
    <>
      <Helmet>
        <title>Como Funciona | Atuação Jurídica Contra Planos de Saúde</title>
        <meta name="description" content="Entenda como funciona o trabalho do escritório Cicarelli Advogados para liminares urgentes contra os convênios na saúde." />
      </Helmet>
      
      <HeroSection
        badge="✦ Metodologia Cicarelli Advogados ✦"
        title="Como Funciona o Nosso Trabalho"
        subtitle="Entenda as etapas até sua liminar médica"
        ctaPrimary={{
          label: "Iniciar Avaliação →",
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
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">Do diagnóstico ao tratamento — garantimos cada etapa</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-gray-600 text-lg">Os planos de saúde negam cobertura com burocracia e tecnicidades. Nós sabemos exatamente como reverter isso — na hora certa.</p>
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
              { num: "01", title: "Contato Inicial", desc: "Você relata seu caso para nossa equipe. Análise preliminar gratuita e sem compromisso." },
              { num: "02", title: "Análise em 2h", desc: "Avaliamos a viabilidade jurídica com foco em resultado, de forma clara e transparente." },
              { num: "03", title: "Ação Imediata", desc: "Distribuímos o pedido de liminar com urgência. A justiça costuma responder entre 24 e 48 horas." }
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
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Pronto para buscar seus direitos?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">Tire todas as suas dúvidas conosco online e consiga o deferimento do tratamento que você precisa o quanto antes.</p>
            <a 
              href="https://wa.me/5541999580015"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dk text-primary font-bold rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Falar pelo WhatsApp
            </a>
        </div>
      </section>
    </>
  )
}
