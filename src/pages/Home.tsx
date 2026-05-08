import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { TypewriterText } from "../components/TypewriterText"

const services = [
  {
    title: "Negativa de Cobertura",
    desc: "Revertemos judicialmente recusas abusivas do plano de saúde para cirurgias e exames.",
    icon: "ri-shield-cross-line",
    href: "/especialidade/negativa-de-cobertura"
  },
  {
    title: "Reembolso Médico",
    desc: "Buscamos o reembolso integral ou adequado das despesas médicas realizadas fora da rede.",
    icon: "ri-money-dollar-box-line",
    href: "/especialidade/reembolso-medico"
  },
  {
    title: "Carência Abusiva",
    desc: "Atuação em casos de urgência e emergência onde o plano exige cumprimento de carência.",
    icon: "ri-time-line",
    href: "/especialidade/carencia"
  },
  {
    title: "Liminares de Urgência",
    desc: "Plantão jurídico especializado para obtenção de ordens judiciais imediatas.",
    icon: "ri-flashlight-line",
    href: "/especialidade/liminares"
  },
  {
    title: "Home Care",
    desc: "Liberação de internação domiciliar e assistência multidisciplinar perante recusas.",
    icon: "ri-home-heart-line",
    href: "/especialidade/home-care"
  },
  {
    title: "Medicamentos de Alto Custo",
    desc: "Garantimos o acesso a remédios oncológicos e tratamentos importados via judicial.",
    icon: "ri-capsule-line",
    href: "/especialidade/medicamentos-alto-custo"
  }
]

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  return (
    <>
      <SEO 
        title="Advogado Especialista em Planos de Saúde em Curitiba" 
        description="Escritório Cicarelli Advogados. Especialistas em Direito da Saúde. Revertemos negativas de liminares, home care e tratamentos em Curitiba - PR."
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-overlay z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-30 z-[-1]" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
              <motion.div variants={fadeInUp}>
                <Badge className="bg-transparent border-accent text-accent px-4 py-1 text-sm tracking-widest uppercase mb-4">Cicarelli Advogados — Curitiba / PR</Badge>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Especialistas em Direitos contra Planos de Saúde.
                </h1>
                
                <TypewriterText texts={[
                  "O plano negou sua cirurgia?",
                  "Reembolso muito abaixo do valor?",
                  "Exigência abusiva de carência?",
                  "Medicamento de alto custo recusado?"
                ]} />
              </motion.div>
              
              <motion.p variants={fadeInUp} className="text-xl text-gray-200 leading-relaxed max-w-2xl mt-4">
                Quando a operadora diz "não", nosso departamento jurídico atua de forma estratégica e ética para garantir que a sua saúde seja priorizada pelos tribunais.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button variant="accent" size="lg" asChild className="h-16 px-8 text-lg font-bold shadow-glow uppercase tracking-wide">
                  <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
                    <i className="ri-whatsapp-line mr-2 text-2xl"></i> Consulta Gratuita
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="h-16 px-8 text-lg font-medium border-white/30 text-white hover:bg-white/10 mt-4 sm:mt-0">
                  <Link to="/casos-sucesso">Conheça Nossos Casos</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="areas-atuacao" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">Principais Áreas de Atuação</h2>
            <p className="text-gray-600 text-lg">Defendemos pacientes contra os abusos mais comuns praticados por operadoras de saúde em Curitiba e Região Metropolitana.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-gray-100 hover:border-accent/30 shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-primary text-accent flex items-center justify-center mb-4 shadow-md">
                      <i className={`${service.icon} text-3xl`}></i>
                    </div>
                    <CardTitle className="text-2xl mb-2 font-serif">{service.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {service.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link to={service.href} className="text-sm font-semibold text-primary flex items-center group/link mt-auto uppercase tracking-wider">
                      saber mais <i className="ri-arrow-right-line text-lg ml-1 transform group-hover/link:translate-x-1 transition-transform text-accent"></i>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Numbers */}
      <section className="py-20 bg-primary text-white border-y border-accent">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
             <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Por que escolher o Cicarelli Advogados</h2>
             <p className="text-gray-400">Atuação pautada pela ética, especialização e foco exclusivo na defesa do paciente.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center">
            <div className="p-4">
              <p className="text-5xl font-serif font-bold text-accent mb-3">+15</p>
              <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">Anos de Experiência</p>
            </div>
            <div className="p-4">
              <p className="text-5xl font-serif font-bold text-accent mb-3">+2500</p>
              <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">Casos Conduzidos</p>
            </div>
            <div className="p-4">
              <p className="text-5xl font-serif font-bold text-accent mb-3">24h</p>
              <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">Plantão Urgências</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
              <i className="ri-shield-check-fill text-5xl text-accent mb-3"></i>
              <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">OAB/PR Ativa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Alfeu Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-accent rounded-2xl z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Alfeu Cicarelli" 
                className="relative z-10 w-full h-[600px] object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg z-20 flex items-center justify-between">
                <div>
                  <p className="font-bold text-primary font-serif">Dr. Alfeu Cicarelli</p>
                  <p className="text-xs text-gray-500">OAB/PR 12.345</p>
                </div>
                <i className="ri-scales-3-line text-3xl text-accent"></i>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <Badge className="bg-primary/5 text-primary border-none mb-6">Sócio Fundador</Badge>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">Experiência que faz a diferença no momento que você mais precisa.</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Nossa atuação vai muito além de peticionar. Entendemos o sofrimento do paciente diante de uma negativa injusta e trabalhamos com humanidade para devolver a sua tranquilidade.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Com profunda especialização em Direito da Saúde, nossa equipe analisa o seu caso à luz das súmulas mais recentes do TJPR e do STJ, buscando a medida mais rápida e eficaz.
              </p>
              
              <Button asChild size="lg" className="h-14 bg-primary text-white hover:bg-primary/80">
                <Link to="/profissionais">Conheça a Equipe Completa <i className="ri-arrow-right-line ml-2"></i></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-2xl">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">Informação é a sua melhor defesa.</h2>
              <p className="text-gray-600">Leia nossos artigos recentes para entender seus direitos perante o plano de saúde e o SUS.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-6 md:mt-0">
              <Link to="/blog" className="text-primary font-semibold hover:text-accent transition-colors flex items-center bg-white px-6 py-3 rounded-full shadow-sm">
                Acessar o Blog Jurídico <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Plano de saúde pode negar cirurgia bariátrica alegando doença preexistente?",
                category: "Negativa de Cobertura",
                date: "12 Mar, 2024"
              },
              {
                title: "Reajuste de plano por mudança de faixa etária aos 59 anos: quando é considerado abusivo?",
                category: "Reajuste",
                date: "05 Mar, 2024"
              },
              {
                title: "Direito de pacientes oncológicos a medicamentos importados de alto custo",
                category: "Alto Custo",
                date: "28 Fev, 2024"
              }
            ].map((post, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl shadow-elegant overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-gray-100"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex text-xs items-center gap-3 mb-4 text-gray-400 font-medium tracking-wide">
                    <span className="text-accent">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold group-hover:text-amber-600 transition-colors mb-6 leading-snug text-primary">
                    {post.title}
                  </h3>
                  <Link to="/blog/example" className="text-sm font-bold text-gray-500 flex items-center mt-auto uppercase tracking-wider group-hover:text-primary transition-colors">
                    Ler Artigo <i className="ri-arrow-right-line ml-1"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-amber-600 skew-x-12 -z-0 opacity-20" />
        <div className="absolute left-0 bottom-0 top-0 w-1/4 bg-amber-400 -skew-x-12 -z-0 opacity-50" />
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <i className="ri-error-warning-line text-6xl text-white mb-6 inline-block"></i>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              A saúde da sua família teve cobertura negada?
            </h2>
            <p className="text-primary/90 text-xl font-medium mb-10 max-w-2xl mx-auto">
              Nossa equipe está de plantão. Realizamos uma análise preliminar do seu caso de forma ágil e segura.
            </p>
            <Button size="lg" asChild className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-2xl uppercase tracking-wide">
              <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
                <i className="ri-whatsapp-line mr-2 text-2xl"></i> Enviar Mensagem no WhatsApp
              </a>
            </Button>
            <p className="text-sm text-primary/70 mt-6 font-medium">Atendimento presencial em Curitiba ou totalmente online para todo Brasil.</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
