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
    { id: "negativa-de-cobertura", title: "Negativa de Cobertura", icon: "ri-shield-cross-fill", desc: "Cirurgias, exames e terapias, incluindo as não previstas no Rol da ANS." },
    { id: "reajustes-abusivos", title: "Reajustes Abusivos", icon: "ri-funds-fill", desc: "Aumentos exorbitantes por mudança de faixa etária aos 59 anos e sinistralidade." },
    { id: "reembolso-medico", title: "Reembolso Médico", icon: "ri-money-dollar-circle-fill", desc: "Aparelhamento para recebimento dos valores que o plano insiste em pagar a menor." },
    { id: "medicamentos-alto-custo", title: "Medicamentos de Alto Custo", icon: "ri-capsule-fill", desc: "Liberação de remédios importados e oncológicos via Estado, SUS e planos de saúde." },
    { id: "home-care", title: "Home Care / Internação", icon: "ri-home-heart-fill", desc: "Manutenção e garantia de tratamento multiprofissional na residência do paciente." },
    { id: "cancelamento-unilateral", title: "Cancelamento Unilateral", icon: "ri-user-unfollow-fill", desc: "Abusos em rescisões de planos coletivos e proteção a pacientes em tratamento por doença grave." },
  ]

  return (
    <>
      <SEO title="Áreas de Atuação em Direito à Saúde | Cicarelli Advogados" description="Conheça nossas áreas de atuação em defesa do paciente: recusas de liminares, negativas de cirurgia, home care e reajustes abusivos." />
      <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-accent uppercase tracking-widest font-semibold text-sm mb-4 block">Especialidades</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Como protegemos os seus Direitos</h1>
            <p className="text-gray-600 text-lg">
              Em um momento de fragilidade da saúde, atuar de modo especializado garante as respostas processuais ágeis que salvam e protegem a vida de nossos clientes.
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
                <Card className="h-full border-transparent shadow-elegant hover:-translate-y-2 transition-transform duration-300">
                  <CardHeader className="p-8">
                    <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center text-accent mb-6 shadow-md">
                      <i className={`${area.icon} text-3xl`}></i>
                    </div>
                    <CardTitle className="font-serif text-2xl font-bold mb-3">{area.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600 leading-relaxed font-medium">
                      {area.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="px-8 pb-8 pt-0">
                    <Link to={`/especialidade/${area.id}`} className="text-primary font-bold hover:text-accent transition-colors flex items-center group/link uppercase tracking-wider text-sm mt-4">
                      Saber mais <i className="ri-arrow-right-line ml-2 transform group-hover/link:translate-x-1 transition-transform text-accent text-lg"></i>
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
