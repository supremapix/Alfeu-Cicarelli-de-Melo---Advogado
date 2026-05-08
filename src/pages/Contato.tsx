import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Contato() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <>
      <SEO title="Fale com nosso Escritório | Contato Cicarelli Advogados" description="Entre em contato com nossos especialistas em Direito da Saúde. Atendimento presencial em Curitiba e online para todo o Brasil." />
      
      <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">Fale com um Especialista</h1>
            <p className="text-gray-600 text-lg">
              Nosso plantão jurídico está pronto para avaliar a validade da recusa do seu plano de saúde de forma sigilosa e assertiva.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-elegant overflow-hidden">
            
            {/* Informações de Contato Rápidos */}
            <div className="bg-primary p-10 md:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              
              <h2 className="font-serif text-3xl font-bold mb-8 relative z-10">Opções de Atendimento</h2>
              
              <div className="space-y-8 relative z-10">
                <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="h-16 w-16 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-green-500 group-hover:text-white transition-all transform group-hover:scale-110">
                    <i className="ri-whatsapp-fill text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 group-hover:text-green-400 transition-colors">Plantão WhatsApp</h3>
                    <p className="text-gray-400 font-mono text-lg">(41) 99958-0015</p>
                  </div>
                </a>

                <a href="tel:4130130001" className="flex items-center group">
                  <div className="h-16 w-16 bg-[#ee7c23]/20 text-[#ee7c23] rounded-2xl flex items-center justify-center mr-6 group-hover:bg-[#ee7c23] group-hover:text-white transition-all transform group-hover:scale-110">
                    <i className="ri-phone-fill text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 group-hover:text-[#ee7c23] transition-colors">Telefone Sede</h3>
                    <p className="text-gray-400 font-mono text-lg">(41) 3013-0001</p>
                  </div>
                </a>
                
                <a href="mailto:contato@cicarelli.adv.br" className="flex items-center group">
                  <div className="h-16 w-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-500 group-hover:text-white transition-all transform group-hover:scale-110">
                    <i className="ri-mail-send-fill text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 group-hover:text-blue-400 transition-colors">E-mail Comercial</h3>
                    <p className="text-gray-400 text-lg">contato@cicarelli.adv.br</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                <div className="flex items-start">
                  <i className="ri-map-pin-2-fill text-2xl text-accent mr-4"></i>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Escritório Matriz - Curitiba/PR</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Av. Cândido Ferreira de Abreu, 123<br />
                      Centro Cívico, CEP 80530-000<br />
                      Atendimento presencial com hora marcada.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-10 md:p-16">
              <h2 className="font-serif text-3xl font-bold text-primary mb-2">Envie uma Mensagem</h2>
              <p className="text-gray-500 mb-8 font-medium">Nossa equipe entrará em contato prontamente.</p>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">Nome Completo *</label>
                  <input type="text" id="name" className="w-full h-14 px-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50" placeholder="Digite seu nome" required />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">Telefone / WhatsApp *</label>
                    <input type="tel" id="phone" className="w-full h-14 px-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50" placeholder="(  ) _____-____" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">E-mail</label>
                    <input type="email" id="email" className="w-full h-14 px-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50" placeholder="seu@email.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Resumo do Caso *</label>
                  <textarea id="message" rows={5} className="w-full p-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50 resize-none" placeholder="O que o plano negou? Qual a sua situação?" required></textarea>
                </div>
                
                <Button type="submit" size="lg" className="w-full h-16 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-xl mt-4">
                  Enviar Mensagem <i className="ri-send-plane-fill ml-2"></i>
                </Button>
                
                <p className="text-xs text-center text-gray-400 mt-4 px-4">
                  Ao enviar, você concorda com a política de sigilo garantida por lei na relação cliente-advogado. Nenhuma informação será compartilhada.
                </p>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
