import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { getAllZonas, getBairrosByZona, bairrosSP } from "@/data/bairros"
import { HeroSection } from "@/components/HeroSection"

const services = [
  {
    title: "Cirurgia ou Exame Negado",
    desc: "O plano não pode negar procedimento prescrito por médico. Revertemos em 24–48h com medida liminar.",
    icon: "ri-hospital-line",
    href: "/negativa-de-cirurgia",
    cta: "Quero reverter →"
  },
  {
    title: "Reajuste Abusivo na Mensalidade",
    desc: "Aumentos acima do índice ANS são ilegais. Recuperamos o que foi cobrado a mais, com juros.",
    icon: "ri-line-chart-line",
    href: "/reajustes-abusivos",
    cta: "Calcular meu reajuste →"
  },
  {
    title: "Medicamento de Alto Custo Negado",
    desc: "Remédios oncológicos, biológicos e de uso contínuo têm cobertura obrigatória. Garantimos o fornecimento.",
    icon: "ri-capsule-line",
    href: "/medicamentos-alto-custo",
    cta: "Meu medicamento é coberto? →"
  },
  {
    title: "Home Care e Internação Domiciliar",
    desc: "Quando o hospital não é necessário, o plano deve custear o tratamento em casa. Obrigamos o custeio judicial.",
    icon: "ri-home-heart-line",
    href: "/home-care",
    cta: "Preciso de home care →"
  },
  {
    title: "Erro Médico e Dano à Saúde",
    desc: "Sequelas por negligência médica geram direito a indenização. Avaliamos seu caso com sigilo e sem custo inicial.",
    icon: "ri-stethoscope-line",
    href: "/erro-medico",
    cta: "Avaliar meu caso →"
  },
  {
    title: "Tratamento ABA para Autismo (TEA)",
    desc: "Planos são obrigados a cobrir terapia ABA, fonoaudiologia e psicologia para crianças com TEA. Não aceite negativa.",
    icon: "ri-mental-health-line",
    href: "/autismo-aba",
    cta: "Garantir tratamento do meu filho →"
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
        title="Plano de saúde negou seu tratamento em São Paulo? Liminar em 24h" 
        description="Plano de saúde negou seu tratamento em São Paulo? A Cicarelli Advogados obtém liminares em 24–48h. +20 anos, +1.200 casos. Consulta grátis."
        keywords="advogado plano de saúde sp, advogado direito da saúde são paulo, negativa de cirurgia sp, liminar plano de saúde são paulo"
      />

      {/* 1. HERO SP */}
      <HeroSection
        badge="✦ Especialistas em Plano de Saúde · São Paulo ✦"
        title="Seu Plano de Saúde Negou o Tratamento?"
        subtitle="Atuamos em todos os bairros de São Paulo para garantir que você receba o tratamento que precisa — seja cirurgia, medicamento, home care ou terapia. Consulta gratuita. Sem adiantamento."
        ctaPrimary={{
          label: "Quero Consulta Gratuita →",
          href: "https://wa.me/5541999580015"
        }}
        ctaSecondary={{
          label: "Ver como funciona ↓",
          href: "#como-ajudamos"
        }}
        height="full"
      >
        <div className="flex flex-wrap gap-4 mt-8 opacity-90">
          <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full border border-white/20">
            <i className="ri-check-line text-gold"></i>
            <span className="text-sm font-medium">+1.200 casos resolvidos</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full border border-white/20">
            <i className="ri-time-line text-gold"></i>
            <span className="text-sm font-medium">+20 anos de experiência</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full border border-white/20">
            <i className="ri-customer-service-2-line text-gold"></i>
            <span className="text-sm font-medium">Atendimento 24h</span>
          </div>
        </div>
      </HeroSection>

      {/* 2. STRIP DE URGÊNCIA */}
      <div className="bg-gold py-4 shadow-elegant relative z-20">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex items-center text-primary font-bold text-lg sm:text-xl">
            <i className="ri-error-warning-fill text-2xl mr-2 animate-bounce"></i>
            <span>⚡ Negativa recebida? Planos têm prazo de 24h para responder a liminares — cada hora conta.</span>
          </div>
          <Button size="sm" asChild className="bg-primary hover:bg-navy-light text-gold font-bold">
            <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
              Fale agora com um advogado →
            </a>
          </Button>
        </div>
      </div>

      {/* NOVO: COMO AJUDAMOS */}
      <section id="como-ajudamos" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">Do diagnóstico ao tratamento — garantimos cada etapa</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-gray-600 text-lg">Os planos de saúde negam cobertura com burocracia e tecnicidades. Nós sabemos exatamente como reverter isso — na hora certa.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "1️⃣", title: "Você nos conta o problema", desc: "Gratuito, sem compromisso." },
              { num: "2️⃣", title: "Analisamos em 2h", desc: "Viabilidade jurídica clara e transparente." },
              { num: "3️⃣", title: "Entramos com liminar", desc: "Prazo médio para resultados: 24 a 48 horas." }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-gray-lt p-8 rounded-2xl border border-gray-200 text-center">
                <div className="text-4xl mb-4">{step.num}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                      {service.cta} <i className="ri-arrow-right-line text-lg ml-1 transform group-hover/link:translate-x-1 transition-transform"></i>
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
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">Atendemos você em qualquer bairro de São Paulo</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              De Pinheiros ao Itaim Paulista, de Santana ao Grajaú — nossa equipe está pronta para defender seus direitos onde você mora.
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
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Resultados que mudam vidas em São Paulo</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
             {[
               { text: "Recebi a liminar em menos de 24 horas. O plano liberou a cirurgia no dia seguinte. Não sei o que seria de mim sem a Cicarelli.", author: "Márcia T.", loc: "Moema" },
               { text: "Meu filho autista precisava de ABA e o plano negava. Em 48h já tínhamos autorização judicial. Time incrível.", author: "Paulo R.", loc: "Tatuapé" },
               { text: "Cobraram reajuste de 44% sem aviso. Recuperamos tudo com juros. Processo rápido, sem dor de cabeça.", author: "Ana L.", loc: "Pinheiros" }
             ].map((dep, i) => (
                <div key={i} className="bg-navy-light border border-gold/10 p-8 rounded-2xl relative shadow-elegant">
                  <span className="text-gold/20 text-8xl font-serif absolute -top-6 -left-2 leading-none">"</span>
                  <div className="flex text-gold text-lg mb-6 relative z-10"><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i></div>
                  <p className="text-gray-300 italic relative z-10 mb-8 leading-relaxed">
                    "{dep.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold text-primary rounded-full flex items-center justify-center font-bold text-xl uppercase shadow-glow">
                      {dep.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white tracking-wide">{dep.author}</p>
                      <p className="text-gold/70 text-sm">{dep.loc}, SP</p>
                    </div>
                  </div>
                </div>
             ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gold/20 text-center">
            <div className="p-4">
              <p className="text-5xl lg:text-6xl font-serif font-bold text-gold mb-3">1.200+</p>
              <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">Casos resolvidos em SP</p>
            </div>
            <div className="p-4">
              <p className="text-5xl lg:text-6xl font-serif font-bold text-gold mb-3">98%</p>
              <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">Taxa de sucesso em liminares</p>
            </div>
            <div className="p-4">
              <p className="text-5xl lg:text-6xl font-serif font-bold text-gold mb-3">24-48h</p>
              <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">Prazo médio para primeiro resultado</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
              <p className="text-5xl lg:text-6xl font-serif font-bold text-gold mb-3">20+</p>
              <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">Anos de experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MARQUEE INFINITO */}
      <div className="bg-navy-light overflow-hidden py-5 border-y border-gold/10">
        <div className="text-center mb-4 text-gray-400 text-sm font-medium tracking-widest uppercase">↓ Bairros onde já garantimos tratamentos para nossos clientes ↓</div>
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
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">Seu direito à saúde explicado sem juridiquês</h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <p className="text-gray-600 text-lg">Artigos escritos por advogados, para pessoas comuns. Entenda quando o plano errou e o que fazer.</p>
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
              <i className="ri-error-warning-fill text-5xl animate-pulse"></i>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              Seu plano negou. E agora?
            </h2>
            <p className="text-gray-300 text-xl font-light mb-12 max-w-3xl mx-auto">
              Não espere. Cada dia sem tratamento é um dia a mais de sofrimento — e os prazos legais são curtos. Fale agora com um especialista.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="h-16 px-10 text-lg bg-gold hover:bg-gold-dk text-primary shadow-glow uppercase tracking-wide font-bold">
                <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
                  <i className="ri-whatsapp-fill mr-2 text-2xl"></i> Agendar Consulta Gratuita
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-16 px-10 text-lg border-2 border-white text-white hover:bg-white hover:text-primary transition-colors font-bold uppercase tracking-wide">
                <a href="tel:4130130001">
                  <i className="ri-phone-fill mr-2 text-xl"></i> Ou ligue: (41) 3013-0001 — 24h
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
