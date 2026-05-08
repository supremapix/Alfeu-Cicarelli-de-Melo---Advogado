import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { LeadForm } from "@/components/LeadForm"

export default function Contato() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <>
      <SEO title="Plantão de Urgências SP | Contato Cicarelli Advogados" description="Advogado de plantão para liminar contra plano de saúde em São Paulo e região. Fale agora no WhatsApp ou telefone." />
      
      <div className="pt-32 pb-24 bg-gray-lt min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-[0.03] pointer-events-none z-0" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block py-1.5 px-4 bg-gold/20 border border-gold/50 text-gold rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
              Plantão São Paulo
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">Urgência com o Plano?</h1>
            <p className="text-gray-600 text-lg">
              Você não pode esperar. Nossa equipe realiza a análise pre-processual em poucas horas e pode peticionar seu pedido liminar imediatamente para juízes de SP.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-elegant overflow-hidden border border-gold/10">
            
            {/* Informações de Contato Rápidos */}
            <div className="bg-primary p-10 md:p-14 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-dk/10 rounded-full blur-3xl pointer-events-none" />
              
              <h2 className="font-serif text-3xl font-bold mb-8 relative z-10 text-gold">Fale no WhatsApp SP</h2>
              <p className="text-gray-300 font-light mb-10 relative z-10">Envie suas negativas e laudos diretamente pelo formulário ao lado para direcionar ao nosso especialista em SP, ou utilize os contatos diretos abaixo.</p>
              
              <div className="space-y-6 relative z-10">
                <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer" className="flex items-center group bg-navy-light/50 border border-white/5 p-4 rounded-2xl hover:border-gold/30 transition-all">
                  <div className="h-14 w-14 bg-green-500 text-white rounded-full flex items-center justify-center mr-5 shrink-0 shadow-lg">
                    <i className="ri-whatsapp-fill text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-300 uppercase tracking-widest mb-1 group-hover:text-white transition-colors">Plantão WhatsApp</h3>
                    <p className="text-gold font-bold text-2xl">(41) 99958-0015</p>
                  </div>
                </a>

                <a href="tel:4130130001" className="flex items-center group bg-navy-light/50 border border-white/5 p-4 rounded-2xl hover:border-gold/30 transition-all">
                  <div className="h-14 w-14 bg-gold text-primary rounded-full flex items-center justify-center mr-5 shrink-0 shadow-lg">
                    <i className="ri-phone-fill text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-300 uppercase tracking-widest mb-1 group-hover:text-white transition-colors">Telefone Principal</h3>
                    <p className="text-white font-bold text-2xl">(41) 3013-0001</p>
                  </div>
                </a>
                
                <a href="mailto:contato@cicarelli.adv.br" className="flex items-center group bg-navy-light/50 border border-white/5 p-4 rounded-2xl hover:border-gold/30 transition-all">
                  <div className="h-14 w-14 bg-blue-500 text-white rounded-full flex items-center justify-center mr-5 shrink-0 shadow-lg">
                    <i className="ri-mail-send-fill text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-300 uppercase tracking-widest mb-1 group-hover:text-white transition-colors">E-mail Comercial</h3>
                    <p className="text-white font-bold text-lg">contato@cicarelli.adv.br</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                <div className="flex items-start">
                  <i className="ri-map-pin-2-fill text-2xl text-gold mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-white">Atuação em todo o estado de SP</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      Processos 100% digitais tramitando diretamente nas Varas Cíveis e Fazenda Pública do TJSP. Máxima celeridade e conforto para você.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-10 md:p-14 bg-primary lg:bg-white relative">
              <div className="lg:hidden absolute inset-0 bg-gradient-hero opacity-95 z-0" />
              <div className="relative z-10">
                <h2 className="font-serif text-3xl font-bold text-white lg:text-primary mb-2">Avaliação Gratuita</h2>
                <p className="text-gray-300 lg:text-gray-500 mb-8 font-medium">Forneça os detalhes rápidos para iniciarmos o atendimento.</p>
                
                <div className="bg-navy-light/50 lg:bg-primary p-6 md:p-8 rounded-2xl border border-gold/20 shadow-xl">
                  <LeadForm />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
