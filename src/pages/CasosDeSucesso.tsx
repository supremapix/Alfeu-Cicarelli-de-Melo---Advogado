import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CasosDeSucesso() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const casos = [
    {
      titulo: "Liberação de Medicamento Oncológico (Zoladex)",
      descricao: "Paciente diagnosticado com câncer de próstata teve o medicamento negado sob justificativa de uso domiciliar. Ingressamos com liminar e em 48 horas o tratamento foi garantido de forma vitalícia.",
      tema: "Alto Custo",
      tempo: "Liminar em 48h"
    },
    {
      titulo: "Internação em Home Care Pediátrico",
      descricao: "Plano de saúde limitou sessões de fisioterapia e enfermagem domiciliar para criança com paralisia. Conseguimos na Justiça a manutenção integral do serviço prescrito pelo neuropediatra.",
      tema: "Home Care",
      tempo: "Liminar em 72h"
    },
    {
      titulo: "Revisão de Reajuste por Sinistralidade em PME",
      descricao: "Microempresa recebeu reajuste de 94% no aniversário do contrato. Ação judicial reduziu o reajuste para o índice da ANS (9.63%) e exigiu restituição dos valores pagos a maior.",
      tema: "Reajuste Abusivo",
      tempo: "Redução Garantida"
    },
    {
      titulo: "Cirurgia Bariátrica e Reparadora",
      descricao: "Operadora negou a cirurgia reparadora (remoção de excesso de pele) após bariátrica alegando caráter estético. O Tribunal ordenou a cobertura integral, reconhecendo a natureza reconstrutiva.",
      tema: "Cirurgia",
      tempo: "Cobertura Vital"
    }
  ]

  return (
    <>
      <SEO title="Casos de Sucesso | Cicarelli Advogados" description="Conheça decisões e ações judiciais vitoriosas contra planos de saúde e SUS conduzidas pela nossa equipe." />
      <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Casos de Sucesso</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Nossa experiência fala através dos resultados. Embora não possamos garantir resultados futuros (vedação ética), apresentamos exemplos práticos de como o judiciário tem interpretado e coibido os abusos das operadoras.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {casos.map((caso, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-elegant border border-gray-100 hover:border-accent/40 transition-colors"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md">
                    {caso.tema}
                  </span>
                  <span className="text-accent font-semibold flex items-center text-sm">
                    <i className="ri-time-line mr-1"></i> {caso.tempo}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">{caso.titulo}</h3>
                <p className="text-gray-600 leading-relaxed">{caso.descricao}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-elegant">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
             <div className="relative z-10">
               <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Precisa garantir um direito parecido?</h2>
               <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                 Se o seu caso é similar a algum dos exemplos acima ou você está sofrendo com alguma recusa assistencial, entre em contato.
               </p>
               <Button asChild variant="accent" size="lg" className="h-16 px-10 text-lg font-bold">
                 <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
                   <i className="ri-whatsapp-line mr-2 text-2xl"></i> Enviar Caso pelo WhatsApp
                 </a>
               </Button>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}
