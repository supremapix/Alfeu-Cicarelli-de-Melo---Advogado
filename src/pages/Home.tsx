import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { getAllZonas, getBairrosByZona, bairrosSP } from "@/data/bairros"

const services = [
  {
    title: "Negativa de Cirurgia",
    desc: "Revertemos judicialmente recusas abusivas do plano de saúde para cirurgias e procedimentos urgentes em SP.",
    icon: "ri-hospital-line",
    href: "/negativa-de-cirurgia"
  },
  {
    title: "Reajuste Abusivo",
    desc: "Ações para reduzir aumentos exorbitantes por mudança de faixa etária (59 anos) e alta sinistralidade em SP.",
    icon: "ri-line-chart-line",
    href: "/reajustes-abusivos"
  },
  {
    title: "Medicamento Alto Custo",
    desc: "Garantimos o acesso a remédios oncológicos e tratamentos importados via judicial contra o plano.",
    icon: "ri-capsule-line",
    href: "/medicamentos-alto-custo"
  },
  {
    title: "Home Care",
    desc: "Liberação de internação domiciliar e assistência multidisciplinar perante recusas abusivas da operadora.",
    icon: "ri-home-heart-line",
    href: "/home-care"
  },
  {
    title: "Erro Médico",
    desc: "Defesa e proteção do paciente em casos de imperícia, imprudência ou negligência médica.",
    icon: "ri-stethoscope-line",
    href: "/erro-medico"
  },
  {
    title: "Autismo / ABA",
    desc: "Asseguramos o custeio integral de terapias multidisciplinares como o método ABA, sem limites de sessões.",
    icon: "ri-mental-health-line",
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

  const pillStagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03 } }
  }
  
  const zonas = getAllZonas()

  return (
    <>
      <SEO 
        title="Advogado Plano de Saúde São Paulo - SP | Liminar em 24h" 
        description="Plano de saúde negou cobertura em São Paulo? A Cicarelli Advogados garante seus direitos. Liminares em 24h, negativa de cirurgia e alto custo. Consulta grátis."
        keywords="advogado plano de saúde sp, advogado direito da saúde são paulo, negativa de cirurgia sp, liminar plano de saúde são paulo"
      />

      {/* 1. HERO SP */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[url('https://www.cicarelli.adv.br/assets/direito-empresarial-828x578.jpg')] bg-cover bg-center opacity-30 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95 z-0 pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
              <motion.div variants={fadeInUp} className="mb-4">
                <span className="inline-block py-1.5 px-5 bg-gold/20 border border-gold/40 text-gold rounded-full text-xs font-bold tracking-widest uppercase">
                  Especialistas em Direito à Saúde · São Paulo
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-md">
                Plano de Saúde Negou Seu Tratamento em São Paulo?
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto mt-6 font-light">
                Atuamos em todos os bairros de SP. Consulta gratuita. Resultados em 48h. Sem adiantamento de honorários.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10">
                <Button variant="accent" size="lg" asChild className="w-full sm:w-auto h-16 px-10 text-lg font-bold shadow-glow uppercase bg-gold hover:bg-gold-dk text-primary">
                  <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
                    <i className="ri-whatsapp-fill mr-2 text-2xl"></i> Consulta Gratuita
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto h-16 px-10 text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-primary transition-colors">
                  <a href="tel:4130130001">
                    <i className="ri-phone-fill mr-2 text-2xl"></i> Ligar Agora
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-12 inline-block bg-navy-light/60 backdrop-blur-md border border-gold/20 rounded-2xl px-8 py-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse-glow" />
                  <p className="text-gold font-serif font-bold text-lg md:text-xl tracking-wide">
                    São Paulo • <span className="text-white">312 casos ganhos em 2024</span>
                  </p>
                </div>
              </motion.div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. STRIP DE URGÊNCIA */}
      <div className="bg-gold py-4 shadow-elegant relative z-20">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex items-center text-primary font-bold text-lg sm:text-xl">
            <i className="ri-error-warning-fill text-2xl mr-2 animate-bounce"></i>
            <span>Negativa recebida hoje? Podemos pedir liminar em 24h.</span>
          </div>
          <Button size="sm" asChild className="bg-primary hover:bg-navy-light text-gold font-bold">
            <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
              Envie agora pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* 3. SERVIÇOS EM SP */}
      <section id="areas-atuacao" className="py-24 bg-gray-lt">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">Áreas de Atuação em São Paulo</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-gray-600 text-lg">Defendemos pacientes paulistas contra os abusos mais comuns praticados por operadoras de saúde regionais e nacionais.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-gold/10 hover:border-gold/50 shadow-sm hover:shadow-elegant transition-all duration-300 bg-white group">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-2xl bg-primary text-gold flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110 origin-left">
                      <i className={`${service.icon} text-3xl`}></i>
                    </div>
                    <CardTitle className="text-2xl mb-2 font-serif text-primary">{service.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {service.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-6 border-t border-gray-50">
                    <Link to={service.href} className="text-sm font-bold text-primary flex items-center group/link mt-auto uppercase tracking-wider group-hover:text-gold-dk transition-colors">
                      saber mais <i className="ri-arrow-right-line text-lg ml-1 transform group-hover/link:translate-x-1 transition-transform"></i>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MAPA INTERATIVO DE BAIRROS */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">Atendemos todo São Paulo</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Seu bairro importa. Nosso atendimento atinge com celeridade processos nas principais varas e fóruns da capital.
            </p>
          </div>

          <div className="grid grid-cols-1 flex-col gap-12">
            {zonas.map((zona, idx) => (
              <motion.div 
                key={zona}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="bg-gray-lt p-8 rounded-3xl"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold mr-4">
                    <i className="ri-map-pin-2-fill text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary">Zona {zona}</h3>
                </div>
                
                <motion.div variants={pillStagger} className="flex flex-wrap gap-2 md:gap-3">
                  {getBairrosByZona(zona).map((bairro, i) => (
                    <motion.div key={i} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
                      <Link 
                        to={`/bairro/${bairro.slug}`} 
                        className="inline-block px-4 py-2 bg-white border border-gray-200 hover:border-gold hover:text-primary text-gray-600 text-sm md:text-base font-medium rounded-full shadow-sm hover:shadow-md transition-all"
                      >
                        {bairro.nome}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 font-medium">Mais de 150 bairros atendidos na capital paulista.</p>
          </div>
        </div>
      </section>

      {/* 5. PROVA SOCIAL & DEPOIMENTOS */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Resultados Ganhos em SP</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
             {[1, 2, 3].map((i) => (
                <div key={i} className="bg-navy-light border border-gold/10 p-8 rounded-2xl relative shadow-elegant">
                  <span className="text-gold/20 text-8xl font-serif absolute -top-6 -left-2 leading-none">"</span>
                  <div className="flex text-gold text-lg mb-6 relative z-10"><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i></div>
                  <p className="text-gray-300 italic relative z-10 mb-8 leading-relaxed">
                    "{['Após 3 semanas de peregrinação na Mooca para liberar um remédio de 60 mil, encontrei a Cicarelli. Liminar deferida em 24h na justiça estadual.', 'Mesmo com meu plano sendo empresarial da Faria Lima, me negaram o reembolso do especialista. O doutor cuidou de tudo e recebi corrigido.', 'Meu pai de 80 anos no Jabaquara teve o Home Care cortado de repente. Eles entraram com urgência no plantão e não deixaram levarem as coisas.'][i-1]}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold text-primary rounded-full flex items-center justify-center font-bold text-xl uppercase shadow-glow">
                      {['M', 'F', 'L'][i-1]}
                    </div>
                    <div>
                      <p className="font-bold text-white tracking-wide">{['Márcio F.', 'Fernanda L.', 'Luciana S.'][i-1]}</p>
                      <p className="text-gold/70 text-sm">Cliente em SP</p>
                    </div>
                  </div>
                </div>
             ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gold/20 text-center">
            <div className="p-4">
              <p className="text-5xl lg:text-6xl font-serif font-bold text-gold mb-3">+20</p>
              <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">Anos de Atuação</p>
            </div>
            <div className="p-4">
              <p className="text-5xl lg:text-6xl font-serif font-bold text-gold mb-3">+300</p>
              <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">Liminares/Ano</p>
            </div>
            <div className="p-4">
              <p className="text-5xl lg:text-6xl font-serif font-bold text-gold mb-3">100%</p>
              <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">Sigilo Médico</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
              <i className="ri-scales-3-fill text-5xl lg:text-6xl text-gold mb-3"></i>
              <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">Atendimento SP</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MARQUEE INFINITO */}
      <div className="bg-navy-light overflow-hidden py-5 border-y border-gold/10">
        <div className="whitespace-nowrap inline-block animate-marquee flex gap-8 items-center">
          {bairrosSP.concat(bairrosSP).map((b, i) => (
            <span key={i} className="text-gold/70 font-semibold uppercase tracking-wider text-sm flex items-center">
              • Advogado Saúde <span className="text-white ml-2">{b.nome}</span>
            </span>
          ))}
        </div>
      </div>

      {/* 7. BLOG PREVIEW */}
      <section className="py-24 bg-gray-lt">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">Direitos do Paciente em SP</h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <p className="text-gray-600 text-lg">Informações jurídicas para reverter abusos de planos saúde.</p>
            </div>
            <div className="mt-8 md:mt-0">
              <Link to="/blog" className="text-primary font-bold hover:text-gold-dk transition-colors flex items-center bg-white border border-gray-200 px-8 py-4 rounded-full shadow-sm hover:shadow-md">
                Ver Todos os Artigos <i className="ri-arrow-right-line ml-2 text-xl"></i>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "TJSP manda plano de saúde custear tratamento de autismo integral",
                category: "Autismo",
                date: "Hoje"
              },
              {
                title: "Como pedir liminar para cirurgia de urgência no plantão paulista",
                category: "Liminares",
                date: "Esta semana"
              },
              {
                title: "Multa da ANS: Planos que negam assistência estão sujeitos a punição",
                category: "Defesa do Paciente",
                date: "Relevante"
              }
            ].map((post, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl shadow-sm hover:shadow-elegant overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-gold/10"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex text-xs items-center gap-3 mb-6 text-gray-500 font-bold tracking-wider uppercase">
                    <span className="text-gold px-3 py-1 bg-gold/10 rounded-full">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold group-hover:text-gold-dk transition-colors mb-6 leading-snug text-primary">
                    {post.title}
                  </h3>
                  <Link to={`/blog/post-${i}`} className="text-sm font-bold text-gray-400 flex items-center mt-auto uppercase tracking-wider group-hover:text-primary transition-colors">
                    Ler Artigo <i className="ri-arrow-right-line ml-1 text-gold"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL NAVY */}
      <section className="py-24 bg-primary text-center relative overflow-hidden">
        <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gold-dk skew-x-12 -z-0 opacity-10" />
        <div className="absolute left-0 bottom-0 top-0 w-1/3 bg-gold-dk -skew-x-12 -z-0 opacity-10" />
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 text-gold">
              <i className="ri-scales-3-fill text-5xl"></i>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              Seu direito à saúde em São Paulo começa aqui.
            </h2>
            <p className="text-gray-300 text-xl font-light mb-12 max-w-2xl mx-auto">
              Nossa equipe está preparada para lutar pelo seu acesso à saúde com máxima agilidade no Tribunal de Justiça de São Paulo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="h-16 px-10 text-lg bg-gold hover:bg-gold-dk text-primary shadow-glow uppercase tracking-wide font-bold">
                <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
                  <i className="ri-whatsapp-fill mr-2 text-2xl"></i> Enviar Mensagem no WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-16 px-10 text-lg border-2 border-white text-white hover:bg-white hover:text-primary transition-colors font-bold uppercase tracking-wide">
                <Link to="/contato">
                  Agendar Consulta Gratuita
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
