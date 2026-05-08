import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"

export default function AreasDeAtuacao() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const areas = [
    { id: "negativa-de-cirurgia", title: "Negativa de Cirurgia", icon: "ri-surgical-mask-fill", desc: "Liminares urgentes contra recusa de cirurgias robóticas, bariátricas, oncológicas e cardíacas." },
    { id: "reajustes-abusivos", title: "Reajustes Abusivos", icon: "ri-funds-fill", desc: "Ações contra aumentos exorbitantes por mudança de faixa etária aos 59 anos e alta sinistralidade." },
    { id: "medicamentos-alto-custo", title: "Medicamentos Alto Custo", icon: "ri-capsule-fill", desc: "Liberação judicial de remédios oncológicos e imunobiológicos mesmo fora do rol da ANS." },
    { id: "home-care", title: "Home Care / Internação", icon: "ri-home-heart-fill", desc: "Obrigatoriedade de custeio de assistência médica domiciliar para idosos e pacientes acamados." },
    { id: "erro-medico", title: "Erro Médico", icon: "ri-stethoscope-fill", desc: "Indenizações por negligência, imperícia ou imprudência em hospitais do estado de SP." },
    { id: "autismo-aba", title: "Terapias Autismo (ABA)", icon: "ri-puzzle-2-fill", desc: "Obrigatoriedade de cobertura ilimitada para terapias multidisciplinares em clínicas especializadas." },
  ]

  return (
    <>
      <SEO title="Áreas de Atuação em SP | Cicarelli Advogados" description="Conheça nossas áreas de atuação em defesa do paciente paulista: liminares urgentes, negativas de cirurgia, home care e reajustes abusivos." />
      <div className="pt-32 pb-24 bg-gray-lt min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-[0.03] pointer-events-none z-0" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-gold uppercase tracking-widest font-semibold text-sm mb-4 block">Especialidades</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Como protegemos os seus Direitos em São Paulo</h1>
            <p className="text-gray-600 text-lg">
              Em um momento de fragilidade, nossa atuação especializada no Tribunal de Justiça de São Paulo (TJSP) garante as liminares ágeis necessárias para proteger sua saúde.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <motion.div 
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-gold/10 shadow-sm hover:shadow-elegant hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="p-8">
                    <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center text-gold mb-6 shadow-md border border-gold/20">
                      <i className={`${area.icon} text-3xl`}></i>
                    </div>
                    <CardTitle className="font-serif text-2xl font-bold mb-3 text-primary">{area.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600 leading-relaxed font-medium">
                      {area.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="px-8 pb-8 pt-0">
                    <Link to={`/${area.id}`} className="text-primary font-bold hover:text-gold transition-colors flex items-center group/link uppercase tracking-wider text-sm mt-4">
                      Saber mais <i className="ri-arrow-right-line ml-2 transform group-hover/link:translate-x-1 transition-transform text-gold text-lg"></i>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
