import { blogPosts } from "../data/blog";
import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { getAllZonas, getBairrosByZona, bairrosSP } from "@/data/bairros"
import { HeroSection } from "@/components/HeroSection"
import { AdvogadoProfile } from "@/components/AdvogadoProfile"

const services = [
  {
    title: "Cirurgia ou Exame Negado",
    desc: "O plano não pode recusar procedimento com expressa prescrição médica. Atuação com pedido de liminar no TJSP.",
    icon: "ri-hospital-line",
    href: "/negativa-de-cirurgia",
    cta: "Entenda seus direitos →"
  },
  {
    title: "Reajuste Abusivo na Mensalidade",
    desc: "Aumentos exorbitantes por faixa etária ou sinistralidade podem ser revistos perante o Judiciário paulista.",
    icon: "ri-line-chart-line",
    href: "/reajustes-abusivos",
    cta: "Revisão de reajustes →"
  },
  {
    title: "Medicamento de Alto Custo",
    desc: "Remédios oncológicos e imunobiológicos receitados pelo médico assistente, mesmo fora do rol da ANS.",
    icon: "ri-capsule-line",
    href: "/medicamentos-alto-custo",
    cta: "Fornecimento de remédios →"
  },
  {
    title: "Home Care e Internação Domiciliar",
    desc: "Custeio de atendimento domiciliar multidisciplinar em substituição à internação hospitalar necessária.",
    icon: "ri-home-heart-line",
    href: "/home-care",
    cta: "Internação domiciliar →"
  },
  {
    title: "Erro Médico e Dano à Saúde",
    desc: "Análise jurídica técnica e ética de condutas com imperícia, imprudência ou negligência hospitalar.",
    icon: "ri-stethoscope-line",
    href: "/erro-medico",
    cta: "Avaliação do caso →"
  },
  {
    title: "Tratamento ABA para Autismo (TEA)",
    desc: "Obrigatoriedade de cobertura integral de terapias comportamentais e multidisciplinares sem limite de sessões.",
    icon: "ri-mental-health-line",
    href: "/autismo-aba",
    cta: "Cobertura terapêutica →"
  }
]

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
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
  const principaisBairros = bairrosSP.slice(0, 24)

  return (
    <>
      <SEO 
        title="Advogado para Plano de Saúde em São Paulo | Cicarelli Advogados" 
        description="Atuação em Direito da Saúde no âmbito do Tribunal de Justiça de São Paulo (TJSP). Pedidos de liminar para cirurgias, medicamentos, home care e reajustes."
        keywords="advogado plano de saúde são paulo, direito da saúde sp, liminar tjsp, negativa cirurgia tjsp, medicamento alto custo sp"
      />

      {/* 1. HERO SP */}
      <HeroSection
        badge="✦ Advocacia em Direito da Saúde · São Paulo ✦"
        title="Defesa Jurídica contra Negativas de Planos de Saúde"
        subtitle="Atuação especializada no Tribunal de Justiça de São Paulo (TJSP) para pacientes em toda a capital paulista. Pedidos de tutela de urgência em cirurgias, medicamentos e terapias."
        ctaPrimary={{
          label: "Falar com Advogado →",
          href: "https://wa.me/5541999580015"
        }}
        ctaSecondary={{
          label: "Ver como funciona ↓",
          href: "/como-funciona"
        }}
        height="full"
      >
        <div className="flex flex-wrap gap-4 mt-8 opacity-90">
          <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full border border-white/20">
            <i className="ri-scales-3-line text-gold"></i>
            <span className="text-sm font-medium">Atuação no TJSP</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full border border-white/20">
            <i className="ri-shield-check-line text-gold"></i>
            <span className="text-sm font-medium">Direito da Saúde Suplementar</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full border border-white/20">
            <i className="ri-computer-line text-gold"></i>
            <span className="text-sm font-medium">Atendimento 100% Digital</span>
          </div>
        </div>
      </HeroSection>

      {/* 2. STRIP DE URGÊNCIA */}
      <div className="bg-gold py-4 shadow-elegant relative z-20">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex items-center text-primary font-bold text-lg sm:text-xl">
            <i className="ri-error-warning-fill text-2xl mr-2"></i>
            <span>Negativa do plano? Casos de urgência e risco demandam avaliação imediata dos requisitos da tutela.</span>
          </div>
          <Button size="sm" asChild className="bg-primary hover:bg-navy-light text-gold font-bold">
            <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
              Avaliar meu caso →
            </a>
          </Button>
        </div>
      </div>

      {/* NOVO: COMO AJUDAMOS */}
      <section id="como-ajudamos" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial={false}
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">Etapas da Atuação Jurídica</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-gray-600 text-lg">Entenda como estruturamos a análise técnica e o ajuizamento da ação perante o Judiciário paulista.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto mt-12"
            variants={staggerContainer}
            initial={false}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[1px] bg-gold/30" />
            
            {[
              { num: "01", title: "Envio de Documentos", desc: "Envio seguro do laudo médico circunstanciado, prescrições e negativa formal emitida pela operadora." },
              { num: "02", title: "Análise de Viabilidade", desc: "Verificação dos requisitos legais da tutela de urgência (probabilidade do direito e perigo de dano)." },
              { num: "03", title: "Distribuição da Ação", desc: "Protocolo da petição perante a vara cível competente ou no plantão judiciário estadual." }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative z-10 flex flex-col items-center group">
                <div className="w-[88px] h-[88px] rounded-full bg-white border border-gold/30 shadow-elegant flex items-center justify-center mb-8 bg-gradient-to-br from-white to-gold/5 group-hover:border-gold transition-colors duration-500">
                   <span className="font-serif text-3xl font-bold text-gold">{step.num}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4 text-center group-hover:text-gold transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SERVIÇOS EM SP */}
      <section id="areas-atuacao" className="py-24 bg-gray-lt">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial={false}
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">Áreas de Atuação em São Paulo</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-gray-600 text-lg">Defesa do beneficiário contra recusas e cláusulas contratuais abusivas no âmbito da saúde suplementar.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={false}
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
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">Atendimento a Pacientes da Capital Paulista</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Atuação jurídica digital em todas as regiões de São Paulo perante as varas cíveis e câmaras de direito privado do TJSP.
            </p>
          </div>

          <div className="grid grid-cols-1 flex-col gap-12">
            {zonas.map((zona, idx) => (
              <motion.div 
                key={zona}
                initial={false}
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
        </div>
      </section>

      {/* 5. PILARES DA ATUAÇÃO */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Pilares da Nossa Atuação Jurídica</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
             {[
               { title: "Rigor Técnico e Ético", text: "Elaboração de petições fundamentadas nas súmulas do STJ, enunciados do CNJ e jurisprudência consolidada do Tribunal de Justiça de São Paulo.", icon: "ri-scales-3-line" },
               { title: "Processo 100% Eletrônico", text: "Peticionamento eletrônico ágil via portal e-SAJ do TJSP, viabilizando o acompanhamento processual completo à distância pelo constituinte.", icon: "ri-file-text-line" },
               { title: "Transparência Contratual", text: "Atendimento formal com contrato escrito de honorários advocatícios e estrita observância das diretrizes éticas da OAB.", icon: "ri-shield-user-line" }
             ].map((item, i) => (
                <div key={i} className="bg-navy-light border border-gold/10 p-8 rounded-2xl relative shadow-elegant">
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center text-2xl mb-6">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {item.text}
                  </p>
                </div>
             ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gold/20 pt-12">
            <div className="p-4">
              <p className="text-3xl lg:text-4xl font-serif font-bold text-gold mb-2">TJSP</p>
              <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">Atuação no Judiciário Paulista</p>
            </div>
            <div className="p-4">
              <p className="text-3xl lg:text-4xl font-serif font-bold text-gold mb-2">Tutela de Urgência</p>
              <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">Ações com Pedido de Liminar</p>
            </div>
            <div className="p-4">
              <p className="text-3xl lg:text-4xl font-serif font-bold text-gold mb-2">Art. 300 CPC</p>
              <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">Fundamentação Técnica Estrita</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MARQUEE CONSOLIDADO */}
      <div className="bg-[#0a0f1a] overflow-hidden py-2.5 border-y border-white/5 relative flex items-center">
        <div className="absolute left-0 z-10 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent w-32 h-full pointer-events-none"></div>
        
        <div className="absolute left-4 z-20 hidden md:flex items-center gap-2 bg-[#0a0f1a] shadow-[0_0_10px_rgba(0,0,0,0.5)] px-3 py-1 rounded-full border border-gold/20">
           <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
           <span className="text-gold text-[10px] font-bold tracking-widest uppercase">Atendimento São Paulo</span>
        </div>

        <div className="flex w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap items-center w-max hover:[animation-play-state:paused]">
            {principaisBairros.concat(principaisBairros).map((b, i) => (
              <span key={i} className="text-gold/50 font-medium uppercase tracking-[0.2em] text-[10px] flex items-center shrink-0">
                <span className="text-white/70 mx-3 hover:text-gold transition-colors cursor-default">{b.nome}</span>
                <span className="text-gold/30">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="absolute right-0 z-10 bg-gradient-to-l from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent w-32 h-full pointer-events-none"></div>
      </div>

      {/* 7. BLOG PREVIEW */}
      <section className="py-24 bg-gray-lt">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">Direito da Saúde e Jurisprudência</h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <p className="text-gray-600 text-lg">Análises de decisões do TJSP e do STJ sobre negativas de planos de saúde e direitos dos segurados.</p>
            </div>
            <div className="mt-8 md:mt-0">
              <Link to="/blog" className="text-primary font-bold hover:text-gold-dk transition-colors flex items-center bg-white border border-gray-200 px-8 py-4 rounded-full shadow-sm hover:shadow-md">
                Ver Todos os Artigos <i className="ri-arrow-right-line ml-2 text-xl"></i>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.div 
                key={i} 
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl shadow-sm hover:shadow-elegant overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-gold/10"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex text-xs items-center gap-3 mb-6 text-gray-500 font-bold tracking-wider uppercase">
                    <span className="text-gold px-3 py-1 bg-gold/10 rounded-full">{post.tag}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold group-hover:text-gold-dk transition-colors mb-6 leading-snug text-primary">
                    {post.title}
                  </h3>
                  <Link to={`/blog/${post.slug}`} className="text-sm font-bold text-gray-400 flex items-center mt-auto uppercase tracking-wider group-hover:text-primary transition-colors">
                    Ler Artigos <i className="ri-arrow-right-line ml-1 text-gold"></i>
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
          <motion.div initial={false}whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 text-gold">
              <i className="ri-scales-3-line text-4xl"></i>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              Teve cobertura recusada pelo plano de saúde?
            </h2>
            <p className="text-gray-300 text-lg font-light mb-12 max-w-2xl mx-auto">
              Nossa equipe jurídica analisa a documentação e os requisitos para adoção das medidas judiciais cabíveis perante o Tribunal de Justiça de São Paulo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="h-16 px-10 text-lg bg-gold hover:bg-gold-dk text-primary shadow-glow uppercase tracking-wide font-bold">
                <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
                  <i className="ri-whatsapp-fill mr-2 text-2xl"></i> Falar com Advogado
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-16 px-10 text-lg border-2 border-white text-white hover:bg-white hover:text-primary transition-colors font-bold uppercase tracking-wide">
                <a href="tel:4130130001">
                  <i className="ri-phone-fill mr-2 text-xl"></i> Telefone: (41) 3013-0001
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <AdvogadoProfile 
        imageIndex={1} 
        title="Atuação Estratégica em Direito da Saúde" 
        altText="Dr. Alfeu Cicarelli trabalhando em processos de Direito da Saúde" 
      />
    </>
  )
}
