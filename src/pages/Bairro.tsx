import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { LeadForm } from "@/components/LeadForm";
import { getBairroBySlug, getBairrosByZona } from "@/data/bairros";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, Home, Pill, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Bairro() {
  const { slug } = useParams<{ slug: string }>();
  const bairro = getBairroBySlug(slug || '');
  
  if (!bairro) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-serif text-primary mb-4">Bairro não encontrado</h1>
        <p className="text-gray-600 mb-8">Não localizamos a região solicitada.</p>
        <Button asChild variant="accent">
          <Link to="/">Voltar para Home</Link>
        </Button>
      </div>
    );
  }

  const bairrosProximos = getBairrosByZona(bairro.zona).filter(b => b.slug !== bairro.slug).slice(0, 8);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <SEO 
        title={`Advogado Plano de Saúde ${bairro.nome} SP | Cicarelli Advogados`} 
        description={`Plano de saúde negou cobertura em ${bairro.nome}, São Paulo? A Cicarelli Advogados garante seus direitos. Consulta grátis através do nosso plantão: (41) 99958-0015.`}
        keywords={`advogado plano de saúde ${bairro.nome}, negativa cobertura ${bairro.nome}, direito saúde ${bairro.nome} SP, advogado saúde suplementar ${bairro.nome}`}
      />

      {/* 1. HERO LOCALIZADO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-hero opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block py-1.5 px-4 bg-gold/20 border border-gold/50 text-gold rounded-full text-sm font-semibold tracking-wider uppercase">
                Atendimento em {bairro.nome} · São Paulo
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Advogado Especialista em Plano de Saúde em {bairro.nome}
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              O plano de saúde negou seu tratamento em {bairro.nome}? A Cicarelli Advogados garante seus direitos. Consulta gratuita e análise rápida.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 bg-gold hover:bg-gold-dk text-primary font-bold text-lg rounded-xl transition-all shadow-glow">
                <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
                  <i className="ri-whatsapp-line mr-2 text-2xl"></i> Consulta Gratuita
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg rounded-xl transition-all">
                <a href="tel:4130130001">
                  <i className="ri-phone-line mr-2 text-2xl"></i> Ligar Agora
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. BLOCO DE URGÊNCIA */}
      <section className="py-16 bg-gray-lt border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">
              Seu plano negou cobertura? Você tem direito à liminar em 24h
            </h2>
            <p className="text-gray-600">Não aceite a recusa do convênio. Atuamos com extrema urgência na região do {bairro.nome}.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            <div className="bg-white p-6 rounded-2xl border border-gold/20 shadow-sm flex flex-col items-center text-center hover:border-gold/60 transition-colors">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4 text-gold">
                <ShieldAlert size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">Negativa de cirurgia</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gold/20 shadow-sm flex flex-col items-center text-center hover:border-gold/60 transition-colors">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4 text-gold">
                <Pill size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">Medicamento negado</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gold/20 shadow-sm flex flex-col items-center text-center hover:border-gold/60 transition-colors">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4 text-gold">
                <Home size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">Home Care recusado</h3>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="h-14 px-10 bg-gold hover:bg-gold-dk text-primary font-bold text-lg rounded-xl shadow-elegant">
              <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
                Envie sua negativa agora pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 3. POR QUE CICARELLI */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">Por que a Cicarelli em {bairro.nome}?</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start p-6 bg-gray-lt rounded-2xl">
              <i className="ri-award-fill text-4xl text-gold mr-6"></i>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">+20 anos de experiência</h3>
                <p className="text-gray-600">Sólida atuação apenas em direito da saúde, com milhares de decisões favoráveis.</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-gray-lt rounded-2xl">
              <i className="ri-pin-distance-fill text-4xl text-gold mr-6"></i>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Atuação em todo São Paulo</h3>
                <p className="text-gray-600">Atendimento 100% digital garantindo agilidade para quem mora em {bairro.nome} e região.</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-gray-lt rounded-2xl">
              <i className="ri-money-dollar-circle-fill text-4xl text-gold mr-6"></i>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Sem adiantamento de honorários*</h3>
                <p className="text-gray-600">Em diversas ações liminares, os honorários incidem apenas sobre o êxito ou ao final do processo.</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-gray-lt rounded-2xl">
              <i className="ri-timer-flash-fill text-4xl text-gold mr-6"></i>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Primeiros resultados em 48h</h3>
                <p className="text-gray-600">Pedidos de liminar são despachados diretamente com o juiz para decisões urgentes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVIÇOS MAIS BUSCADOS NA REGIÃO */}
      <section className="py-20 bg-gray-lt">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">Serviços Mais Buscados na Região</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'negativa-de-cirurgia', icon: 'ri-hospital-line', title: 'Negativa de Cirurgia' },
              { id: 'medicamentos-alto-custo', icon: 'ri-capsule-line', title: 'Medicamentos Alto Custo' },
              { id: 'home-care', icon: 'ri-home-heart-line', title: 'Home Care e Internação' },
              { id: 'reajustes-abusivos', icon: 'ri-line-chart-line', title: 'Reajustes Abusivos' },
              { id: 'erro-medico', icon: 'ri-stethoscope-line', title: 'Erro Médico' },
              { id: 'autismo-aba', icon: 'ri-mental-health-line', title: 'Tratamento ABA / Autismo' }
            ].map(svc => (
              <Link to={`/${svc.id}`} key={svc.id} className="bg-white p-8 rounded-2xl border border-gold/10 hover:border-gold/60 shadow-[0_4px_24px_rgba(251,191,36,0.02)] hover:shadow-[0_4px_24px_rgba(251,191,36,0.08)] transition-all group">
                <i className={`${svc.icon} text-4xl text-gold mb-4 block group-hover:scale-110 transition-transform origin-left`}></i>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{svc.title} no {bairro.nome}</h3>
                <p className="text-gray-600 text-sm">Problemas com o plano para este serviço? Clique para saber como podemos reverter judicialmente.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROVA SOCIAL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">Avaliados e Comprovados</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
             {[1, 2, 3].map(i => (
                <div key={i} className="bg-gray-lt p-8 rounded-2xl relative">
                  <span className="text-gold text-6xl font-serif absolute -top-4 -left-2 opacity-50">"</span>
                  <p className="text-gray-700 italic relative z-10 mb-6">"Quando meu pai teve a cirurgia negada, estávamos desesperados. O escritório conseguiu uma liminar em menos de dois dias e o plano teve que arcar com tudo."</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3">M</div>
                    <div>
                      <p className="font-bold text-primary text-sm">Maria S.</p>
                      <div className="flex text-gold text-sm"><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i></div>
                    </div>
                  </div>
                </div>
             ))}
          </div>

          <div className="text-center bg-primary rounded-3xl p-10 text-white shadow-elegant">
             <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} className="inline-block relative">
               <span className="text-5xl md:text-7xl font-serif font-bold text-gold drop-shadow-lg">312</span>
               <span className="block text-xl md:text-2xl mt-2 font-light">casos ganhos em SP em 2024</span>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 6. FORMULÁRIO DE URGÊNCIA */}
      <section className="py-20 bg-primary relative overflow-hidden" id="contato">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-hero opacity-30 z-0 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Fale agora com um advogado de {bairro.nome}</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Preencha o formulário abaixo e nossa equipe avaliará se o seu caso tem direito a uma liminar urgente para forçar a autorização pelo plano de saúde.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300"><i className="ri-check-line text-gold text-xl mr-3"></i> Análise 100% Gratuita</li>
                <li className="flex items-center text-gray-300"><i className="ri-check-line text-gold text-xl mr-3"></i> Resposta no WhatsApp no mesmo dia</li>
                <li className="flex items-center text-gray-300"><i className="ri-check-line text-gold text-xl mr-3"></i> Atendimento com Sigilo Absoluto</li>
              </ul>
            </div>
            
            <div className="bg-navy-light/50 backdrop-blur-md p-8 rounded-2xl border border-gold/20 shadow-2xl">
              <LeadForm bairro={bairro.nome} />
            </div>
          </div>
        </div>
      </section>

      {/* 7. BAIRROS PRÓXIMOS */}
      {bairrosProximos.length > 0 && (
        <section className="py-16 bg-gray-lt border-y border-gray-200">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h3 className="text-xl text-primary font-bold mb-6">Também atendemos causas de plano de saúde próximo a {bairro.nome}:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {bairrosProximos.map(b => (
                <Link key={b.slug} to={`/bairro/${b.slug}`} className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-full text-sm hover:border-gold hover:text-primary transition-colors">
                  {b.nome}
                </Link>
              ))}
              <Link to="/advogado-plano-de-saude-sao-paulo" className="px-4 py-2 bg-primary text-white border border-primary rounded-full text-sm hover:bg-navy-light transition-colors">
                Ver todos os bairros
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 8. FAQ LOCALIZADO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">Dúvidas Frequentes no {bairro.nome}</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-6"></div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-serif text-lg text-primary hover:text-gold data-[state=open]:text-gold">1. Plano de saúde pode negar cirurgia no {bairro.nome}?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                <strong>Via de regra, não.</strong> Se o seu médico assistente (seja em clínica do {bairro.nome} ou qualquer outra região de São Paulo) prescreveu a cirurgia robótica, oncológica, bariátrica, ou qualquer outra especialidade urgente, atestando a necessidade da mesma, o plano não pode negar sob alegações genéricas como "falta de cobertura" ou "não consta no rol". Apenas a equipe médica tem o condão de decidir a melhor intervenção para o paciente e a Súmula 102 do TJSP protege esse direito.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-serif text-lg text-primary hover:text-gold data-[state=open]:text-gold">2. Qual o prazo para liminar de urgência em SP para medicamento oncológico?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Em Média, varas e plantões judiciários de São Paulo (TJSP) costumam analisar pedidos de tutela de urgência (liminar) em até <strong>24 a 48 horas úteis</strong>. Tratando-se de medicamentos oncológicos ou internação em Home Care para idosos, a gravidade clínica demonstrada no laudo médico impõe agilidade extrema. Nosso escritório distribui a ação muitas vezes no mesmo dia.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-reajuste">
              <AccordionTrigger className="text-left font-serif text-lg text-primary hover:text-gold data-[state=open]:text-gold">3. Sofri um reajuste de faixa etária aos 59 anos absurdo. O que diz o TJSP?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Concentrar a totalidade do aumento do plano no aniversário de 59 anos na tentativa de burlar o Estatuto do Idoso é considerado prática abusiva. O Tribunal de São Paulo costuma afastar percentuais desproporcionais (ex: 80%, 100%, 130%), reduzindo-os significativamente e ordenando a devolução do que o idoso pagou a mais retroativamente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-serif text-lg text-primary hover:text-gold data-[state=open]:text-gold">4. O advogado precisa estar localizado fisicamente no {bairro.nome}?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                <strong>Não.</strong> O processo judicial contra planos de saúde no Tribunal de Justiça de São Paulo é <strong>100% eletrônico</strong>. Isso significa que conduzimos toda a ação, desde o protocolo até a liminar, remotamente, garantindo muito mais agilidade para o benefeciário que não precisa se deslocar no trânsito de São Paulo ou aguardar filas físicas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-serif text-lg text-primary hover:text-gold data-[state=open]:text-gold">5. O convênio pode me expulsar após eu ganhar a liminar processual?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                <strong>Definitivamente não.</strong> Processar o convênio médico é exercer um direito constitucional. A operadora não pode realizar qualquer tipo de retaliação, corte de serviços médicos, bloqueio ou cancelamento do plano alegando litigância. Isso configura rescisão unilateral e rende direito à indenização por danos morais na justiça paulista.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
