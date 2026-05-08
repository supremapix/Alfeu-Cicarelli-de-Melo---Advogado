import { SEO } from "../components/SEO"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Localidade() {
  const { slug } = useParams<{ slug: string }>()
  
  // Format slug to readable name
  const formattedName = slug 
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Localidade'
    
  const isCity = window.location.pathname.includes('/cidades')
  const locationType = isCity ? 'em' : 'na região de'
  
  const title = `Especialista em Planos de Saúde ${locationType} ${formattedName} | Cicarelli Advogados`
  const description = `Advogado Especialista em Direito à Saúde ${locationType} ${formattedName}. Liminares, Negativas de Cobertura, Reembolso e Alto Custo. Atendimento imediato no WhatsApp.`
  const keywords = `advogado plano de saúde ${formattedName}, liminar plano de saúde ${formattedName}, negativa de cirurgia ${formattedName}, advogado contra plano de saúde ${formattedName}`
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <>
      <SEO title={title} description={description} keywords={keywords} />
      
      {/* Hero Local */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-overlay z-0" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-6">
              <span className="bg-transparent border border-accent text-accent px-4 py-1.5 rounded-full text-sm tracking-widest uppercase font-semibold">
                Atendimento Jurídico {locationType} {formattedName}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Advogado Especialista em Planos de Saúde {locationType} {formattedName}
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Seu plano de saúde negou um tratamento, cirurgia ou medicamento? Nossa equipe jurídica atua ativamente para garantir seus direitos com urgência.
              </p>
              <div className="pt-6">
                <Button variant="accent" size="lg" asChild className="h-16 px-8 text-lg font-bold shadow-glow uppercase tracking-wide">
                  <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
                    <i className="ri-whatsapp-line mr-2 text-2xl"></i> Avaliar meu caso sem compromisso
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conteúdo SEO Otimizado */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg prose-blue max-w-none">
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">
              Escritório de Advocacia contra Plano de Saúde {locationType} {formattedName}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Enfrentar uma recusa do convênio médico é um momento de extrema angústia e fragilidade para qualquer paciente. Por isso, caso você resida {locationType} <strong>{formattedName}</strong>, é fundamental contar com o respaldo de um <strong>advogado especialista em Direito da Saúde</strong> para reverter abusos de forma ágil através de ações com pedido de liminar.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              O escritório Cicarelli Advogados possui ampla expertise na defesa de beneficiários de convênios médicos, atuando de forma focada e estratégica para compelir operadoras a custearem cirurgias, internamentos, terapias, medicamentos de alto custo e home care.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                <i className="ri-shield-cross-fill text-3xl text-accent mb-4"></i>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Negativas de Cirurgias</h3>
                <p className="text-gray-600 text-sm">Cancelamentos injustificados e negativas de procedimentos cirúrgicos urgentes {locationType} {formattedName}.</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                <i className="ri-capsule-fill text-3xl text-accent mb-4"></i>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Remédios de Alto Custo</h3>
                <p className="text-gray-600 text-sm">Obrigatoriedade de fornecimento de medicamentos importados e oncológicos, mesmo fora do rol da ANS.</p>
              </div>
            </div>

            <h2 className="font-serif text-2xl font-bold text-primary mt-12 mb-6">
              Como funciona uma Ação Liminar contra Plano de Saúde?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Com o auxílio de um <em>advogado especializado em planos de saúde {locationType} {formattedName}</em>, ingressamos com uma ação judicial com pedido de Tutela de Urgência (Liminar). Essa medida visa solicitar ao juiz que ordene a liberação imediata do tratamento, sem a necessidade de aguardar o trânsito em julgado do processo, dada a urgência médica atestada pelo seu médico assistente.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ Local */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-primary mb-10 text-center">
            Principais Dúvidas de Beneficiários {locationType} {formattedName}
          </h2>
          <Accordion type="single" collapsible className="w-full bg-white p-8 rounded-2xl shadow-elegant">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg text-left">O médico que prescreveu o tratamento precisa ser credenciado ao meu plano?</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                <strong>Não.</strong> A Súmula do Superior Tribunal de Justiça e jurisprudências majoritárias estabelecem que o plano não pode negar tratamento sob o argumento de que o médico assistente não pertence à rede credenciada. Se a prescrição tem base científica, deve ser cumprida.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg text-left">O que fazer se o medicamento não estiver no Rol da ANS?</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                A Justiça entende que <strong>o Rol da ANS é exemplificativo e pode ser superado</strong>. Se o tratamento tem eficácia comprovada ou não há substituto terapêutico eficaz no rol, é possível exigir o custeio através de via judicial com o apoio de nosso escritório.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">
            Não aceite a negativa do seu plano de saúde.
          </h2>
          <p className="text-white text-xl font-medium mb-10 max-w-2xl mx-auto drop-shadow-md">
            Atendemos <strong>{formattedName}</strong> e toda a Grande São Paulo de forma ágil, priorizando causas urgentes.
          </p>
          <Button size="lg" asChild className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-2xl transition-transform hover:scale-105">
            <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
               Falar com Especialista Agora
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
