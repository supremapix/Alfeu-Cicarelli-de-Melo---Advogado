import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/HeroSection"

export default function CasosDeSucesso() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const casos = [
    {
      titulo: "Liberação de Medicamento Oncológico",
      descricao: "Paciente diagnosticado com câncer teve o medicamento negado sob justificativa de uso domiciliar. Ingressamos com liminar no TJSP e em poucos dias o tratamento foi garantido de forma contínua.",
      tema: "Alto Custo",
      tempo: "Liminar Rápida"
    },
    {
      titulo: "Internação em Home Care",
      descricao: "Plano de saúde limitou sessões de enfermagem domiciliar para paciente idoso em SP. Conseguimos na Justiça Paulista a manutenção integral do serviço prescrito pelo médico.",
      tema: "Home Care",
      tempo: "Liminar Concedida"
    },
    {
      titulo: "Revisão de Reajuste por Sinistralidade",
      descricao: "Microempresa de São Paulo recebeu reajuste de 94% no aniversário do contrato. Ação judicial reduziu o reajuste e exigiu restituição judicial dos valores pagos a maior.",
      tema: "Reajuste Abusivo",
      tempo: "Redução Garantida"
    },
    {
      titulo: "Cirurgia Negada após Bariátrica",
      descricao: "Operadora negou a cirurgia reparadora alegando caráter estético. O Tribunal ordenou a cobertura integral, reconhecendo a natureza reconstrutiva a favor de nossa cliente.",
      tema: "Cirurgia",
      tempo: "Cobertura Vital"
    }
  ]

  return (
    <>
      <SEO title="Casos de Sucesso em SP | Cicarelli Advogados" description="Conheça decisões e liminares vitoriosas no TJSP contra planos de saúde promovidas pela nossa equipe paulista." />
      
      <HeroSection
        badge="Nossas Vitórias"
        title="Casos de Sucesso em SP"
        subtitle="Nossa experiência fala através dos resultados. Embora não possamos garantir resultados futuros (vedação ética), apresentamos exemplos práticos de como o judiciário paulista tem interpretado e coibido os abusos das operadoras."
        height="small"
      />

      <div className="py-20 bg-gray-lt min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-[0.03] pointer-events-none z-0" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {casos.map((caso, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gold/10 hover:border-gold/40 hover:shadow-elegant transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md border border-primary/10">
                    {caso.tema}
                  </span>
                  <span className="text-gold font-semibold flex items-center text-sm">
                    <i className="ri-time-line mr-1"></i> {caso.tempo}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">{caso.titulo}</h3>
                <p className="text-gray-600 leading-relaxed">{caso.descricao}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-elegant border border-gold/20">
             <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
             <div className="relative z-10">
               <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-gold">Precisa de liminar similar urgente?</h2>
               <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                 Se você é de São Paulo e está sofrendo com uma operadora de plano de saúde, nosso plantão jurídico está a postos.
               </p>
               <Button asChild className="bg-gold hover:bg-gold-dk text-primary h-16 px-10 text-lg font-bold shadow-glow">
                 <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
                   <i className="ri-whatsapp-line mr-2 text-2xl"></i> Falar com um Especialista SP
                 </a>
               </Button>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}
