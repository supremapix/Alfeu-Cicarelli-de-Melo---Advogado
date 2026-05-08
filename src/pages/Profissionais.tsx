import { SEO } from "../components/SEO"
import { motion } from "framer-motion"

export default function Profissionais() {
  return (
    <>
      <SEO 
        title="Dr. Alfeu Cicarelli e Equipe" 
        description="Conheça a equipe do escritório Cicarelli Advogados, especialistas em Direito da Saúde e defesa de pacientes contra planos de saúde." 
      />
      <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Nossa Equipe</h1>
            <p className="text-gray-600 text-lg">Profissionais dedicados exclusivamente à defesa do direito à saúde.</p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {/* Dr. Alfeu */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-elegant flex flex-col md:flex-row gap-12"
            >
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <img 
                  src="https://www.cicarelli.adv.br/assets/alfeu-cicarelli-advogados-planos-de-saude-em-curitiba-562x562-D7LACyaF.jpg" 
                  alt="Dr. Alfeu Cicarelli" 
                  className="w-full max-w-[300px] h-auto rounded-2xl shadow-md mb-6 object-cover aspect-[3/4]"
                />
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gold hover:text-primary transition-colors">
                    <i className="ri-linkedin-fill text-xl"></i>
                  </a>
                  <a href="mailto:contato@cicarelli.adv.br" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gold hover:text-primary transition-colors">
                    <i className="ri-mail-line text-xl"></i>
                  </a>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="border-b border-gray-100 mb-6 pb-6">
                  <h2 className="font-serif text-3xl font-bold text-primary mb-2">Dr. Alfeu Cicarelli</h2>
                  <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-2">Sócio Fundador</p>
                  <p className="text-gray-500 text-sm">OAB/SP 331.673 | OAB/PR 49.213</p>
                </div>
                
                <h3 className="text-lg font-bold text-primary mb-3">Biografia</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Advogado. Alfeu Cicarelli de Melo, advogado inscrito na Ordem dos Advogados do Brasil – Seção Paraná sob o nº 49.213, e na Ordem dos Advogados do Brasil – Seção São Paulo, sob o nº 331.673, é formado pela Direito pela Universidade Tuiuti do Paraná (2006). Com expertise consolidada em Direito da Saúde no âmbito do Tribunal de Justiça de São Paulo (TJSP), atua de forma ininterrupta na defesa de pacientes paulistas contra os abusos praticados por operadoras de convênio médico. É reconhecido pela combatividade em ações liminares de urgência.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-3"><i className="ri-medal-2-line text-gold mr-2"></i> Especialidades</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Ações Liminares contra Planos em SP</li>
                      <li>• Direito Médico e da Saúde</li>
                      <li>• Reajustes Abusivos ANS</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-3"><i className="ri-book-read-line text-gold mr-2"></i> Formação</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Especialista em Direito à Saúde</li>
                      <li>• Pós-graduado em Direito Civil e Processo Civil</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Equipe Cicarelli */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-primary text-white rounded-3xl p-8 md:p-12 shadow-elegant flex flex-col md:flex-row gap-12 items-center border border-gold/20"
            >
              <div className="w-full md:w-1/3 flex justify-center">
                 <div className="h-40 w-40 rounded-full border-2 border-gold/30 flex items-center justify-center bg-gold/5">
                   <i className="ri-scales-3-fill text-6xl text-gold"></i>
                 </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="font-serif text-3xl font-bold mb-4 text-gold">Equipe Especializada SP</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Nosso núcleo conta com um corpo jurídico rigorosamente treinado na jurisprudência do TJSP. Trabalhamos em regime de plantão para garantir que as medidas liminares de urgência sejam impetradas com a máxima celeridade nas comarcas da capital e grande SP.
                </p>
                <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gold font-bold hover:text-white transition-colors">
                  Falar com nosso atendimento paulista <i className="ri-arrow-right-line ml-2"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
