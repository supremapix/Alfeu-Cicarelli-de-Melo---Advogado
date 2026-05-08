import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Shield, FileWarning, HeartPulse, Activity, Stethoscope, Scale, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "Negativa de Cirurgia e Exames",
    desc: "Garantimos acesso ao procedimento indicado pelo seu médico com urgência através de liminares.",
    icon: <Shield className="h-6 w-6" />,
    href: "/negativa-de-cirurgia"
  },
  {
    title: "Reajustes Abusivos",
    desc: "Revisão judicial de aumentos anuais, por sinistralidade ou mudança de faixa etária.",
    icon: <FileWarning className="h-6 w-6" />,
    href: "/reajustes-abusivos"
  },
  {
    title: "Medicamentos de Alto Custo",
    desc: "Obtenção de tratamentos oncológicos e remédios caros através da Justiça.",
    icon: <HeartPulse className="h-6 w-6" />,
    href: "/medicamentos-alto-custo"
  },
  {
    title: "Home Care / Internação",
    desc: "Liberação de assistência médica domiciliar e extensão de internação sem limitações.",
    icon: <Activity className="h-6 w-6" />,
    href: "/home-care"
  },
  {
    title: "Erro Médico e Responsabilidade",
    desc: "Indenização por danos morais, estéticos e materiais decorrentes de falhas médicas.",
    icon: <Stethoscope className="h-6 w-6" />,
    href: "/erro-medico"
  },
  {
    title: "Tratamento ABA / Autismo",
    desc: "Cobertura integral para terapias multidisciplinares (fono, fisio, TO, psicologia).",
    icon: <Scale className="h-6 w-6" />,
    href: "/autismo-aba"
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
        title="Escritório Especializado" 
        description="Cicarelli Advogados é especialista em Direito à Saúde. Revertemos negativas de cirurgias, exames e medicamentos de alto custo. Atendimento em todo o Brasil."
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 z-[-1]" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
              <motion.div variants={fadeInUp}>
                <Badge variant="accent" className="mb-4 text-xs tracking-widest uppercase">Especialista em Direito à Saúde</Badge>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Sua saúde não pode esperar pela burocracia.
                </h1>
              </motion.div>
              
              <motion.p variants={fadeInUp} className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Restabelecemos seus direitos contra negativas de planos de saúde e SUS de forma ágil, com atuação jurídica estratégica e liminares de urgência.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="accent" size="lg" asChild className="w-full sm:w-auto h-14 text-base font-bold shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                  <a href="#contato">Agendar Consulta Gratuita</a>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto h-14 text-base border-gray-400 text-white hover:bg-white/10 hover:text-white">
                  <a href="#servicos">Conheça Nossas Áreas</a>
                </Button>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-10">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-primary object-cover" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Cliente" />
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  <div className="flex text-accent">{"★".repeat(5)}</div>
                  <span className="text-white font-medium">+1.500 casos</span> de sucesso no Brasil
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee - Cidades Atendidas */}
      <section className="bg-white py-6 border-b border-gray-100 overflow-hidden">
        <div className="relative flex overflow-x-hidden group whitespace-nowrap">
          <div className="animate-marquee inline-flex space-x-12 px-6 items-center">
            {["São Paulo", "Campinas", "Guarulhos", "Pinheiros", "Moema", "Vila Mariana", "Santo André", "São Bernardo do Campo", "Osasco", "Curitiba", "Ribeirão Preto", "Sorocaba"].map((cidade, i) => (
              <span key={i} className="text-sm font-medium text-gray-400 uppercase tracking-widest flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span>
                {cidade}
              </span>
            ))}
          </div>
          <div className="animate-marquee inline-flex space-x-12 px-6 items-center absolute top-0">
            {["São Paulo", "Campinas", "Guarulhos", "Pinheiros", "Moema", "Vila Mariana", "Santo André", "São Bernardo do Campo", "Osasco", "Curitiba", "Ribeirão Preto", "Sorocaba"].map((cidade, i) => (
              <span key={`dup-${i}`} className="text-sm font-medium text-gray-400 uppercase tracking-widest flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span>
                {cidade}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Como Podemos Proteger Sua Saúde</h2>
            <p className="text-gray-600 text-lg">Nosso escritório possui um departamento exclusivo para tratar questões médicas e defender pacientes contra abusos de seguradoras de saúde.</p>
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
                <Card className="h-full border-gray-100 hover:border-accent/50 transition-all duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {service.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link to={service.href} className="text-sm font-semibold text-primary flex items-center group/link">
                      Saber mais <ArrowRight className="h-4 w-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">A agilidade que o seu caso de saúde exige.</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Quando a operadora diz "não", nós lutamos pelo seu "sim" no Tribunal. Com forte atuação em liminares, trabalhamos para reverter negativas médicas em tempo recorde.
              </p>
              
              <ul className="space-y-4 mb-10">
                {["Atendimento Humanizado e Urgente", "Especialistas em Direito Médico", "Plantão 24h para Liminares", "Sigilo e Ética Profissional"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
                <p className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">+15</p>
                <p className="text-sm text-gray-300 font-medium">Anos de Experiência</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm text-center mt-8">
                <p className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">98%</p>
                <p className="text-sm text-gray-300 font-medium">Taxa de Êxito em Liminares</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm text-center -mt-8">
                <p className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">24h</p>
                <p className="text-sm text-gray-300 font-medium">Resposta para Emergências</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
                <p className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">+2k</p>
                <p className="text-sm text-gray-300 font-medium">Clientes Atendidos</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-2xl">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Atualizações Jurídicas</h2>
              <p className="text-gray-600">Fique por dentro dos seus direitos, teses jurídicas recentes e respostas para dúvidas frequentes sobre convênios médicos.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-6 md:mt-0">
              <Link to="/blog" className="text-primary font-semibold hover:text-accent transition-colors flex items-center">
                Ver todos os artigos <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Plano de saúde nega cirurgia bariátrica alegando obesidade pré-existente. O que fazer?",
                category: "Negativas",
                date: "12 Mar, 2024"
              },
              {
                title: "Reajuste de 115% por mudança de faixa etária aos 59 anos é abusivo",
                category: "Reajuste",
                date: "05 Mar, 2024"
              },
              {
                title: "Os direitos de pacientes oncológicos ao recebimento de medicamentos importados",
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
                className="group cursor-pointer"
              >
                <div className="h-48 bg-gray-100 rounded-t-xl mb-0 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                  {/* Decorative element since no images are imported */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Scale className="h-16 w-16 text-gray-300" />
                  </div>
                </div>
                <Card className="rounded-t-none border-t-0 hover:border-accent/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex text-xs items-center gap-3 mb-3 text-gray-500">
                      <Badge variant="secondary" className="font-normal">{post.category}</Badge>
                      <span>{post.date}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors mb-3 leading-snug">
                      {post.title}
                    </CardTitle>
                    <Link to="/blog/example" className="text-sm font-semibold text-primary flex items-center">
                      Ler Artigo <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section id="contato" className="py-20 bg-accent relative overflow-hidden">
        <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-yellow-500/10 skew-x-12 -z-0" />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">
              Teve o seu direito à saúde negado?
            </h2>
            <p className="text-primary/80 text-xl mb-10 max-w-2xl mx-auto">
              Nossa equipe está de plantão para analisar o seu caso gratuitamente e indicar os caminhos legais para garantir o seu tratamento.
            </p>
            <Button size="lg" asChild className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20">
              <a href="https://wa.me/5511999999999?text=Olá, gostaria de uma análise do meu caso." target="_blank" rel="noopener noreferrer">
                Falar Agora no WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
