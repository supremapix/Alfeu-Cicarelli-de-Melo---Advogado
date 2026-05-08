import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Link } from "react-router-dom"

export default function FAQ() {
  return (
    <>
      <SEO 
        title="Dúvidas Frequentes | Advogado Plano de Saúde SP" 
        description="Dúvidas comuns sobre planos de saúde em SP: liminares, negativas de cirurgias, reajustes, home care, terapias ABA e muito mais." 
      />
      <div className="pt-32 pb-24 bg-gray-lt min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-4 bg-gold/20 border border-gold/50 text-gold rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
              Direito da Saúde
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Dúvidas Frequentes (FAQ)</h1>
            <p className="text-gray-600 text-lg">Respostas claras, transparentes e embasadas na jurisprudência do TJSP.</p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gold/10">
            {/* Negativas */}
            <h2 className="text-2xl font-serif font-bold text-gold mb-6 border-b border-gold/20 pb-4">Liminares e Negativas de Cirurgia SP</h2>
            <Accordion type="single" collapsible className="w-full mb-12">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-serif text-lg text-primary hover:text-gold data-[state=open]:text-gold">
                  1. O plano negou minha cirurgia dizendo não estar no rol da ANS. O que o TJSP decide sobre isso?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pt-2">
                  No Estado de São Paulo, a Súmula 102 do Tribunal de Justiça pacifica este tema: "Havendo expressa indicação médica, é abusiva a negativa de cobertura sob o argumento de não estar no rol da ANS." Portanto, é direito seu obter uma <strong>Liminar na Justiça</strong> obrigando a cobertura do procedimento, mesmo que fora do rol.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-serif text-lg text-primary hover:text-gold data-[state=open]:text-gold">
                  2. Quanto tempo demora para sair uma Liminar contra plano de saúde na capital paulista?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pt-2">
                  Trabalhando em regime de urgência, os juízes de São Paulo costumam analisar pedidos de tutela (liminares) de pacientes em estado grave num prazo de <strong>24h a 48h</strong>.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-med-alto">
                <AccordionTrigger className="text-left font-serif text-lg text-primary hover:text-gold data-[state=open]:text-gold">
                  3. O convênio pode negar medicação de alto custo ou oncológica?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pt-2">
                  Não. Seja medicamento imunobiológico ou tratamento contra câncer, a jurisprudência proíbe a operadora de eleger o momento em que se dará a cura. Ingressamos com liminar para fornecimento de quimioterapia oral, imunoterapia para autismo e remédios importados quando têm registro na ANVISA.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Reajustes */}
            <h2 className="text-2xl font-serif font-bold text-gold mb-6 border-b border-gold/20 pb-4">Reajuste Abusivo e Cancelamento</h2>
            <Accordion type="single" collapsible className="w-full mb-12">
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-serif text-lg text-primary hover:text-gold data-[state=open]:text-gold">
                  4. Recebi um aumento de 100% no plano ao fazer 59 anos. Posso processar?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pt-2">
                  Sim. É um clássico "reajuste asfixiante" da velhice. A Justiça considera ilegal concentrarem todo o aumento no degrau dos 59 anos. Ingressamos com <strong>Ação Revisional de Mensalidade</strong> para reduzir drasticamente o valor e ainda recuperar o dinheiro pago a mais nos últimos 3 anos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-reajuste-pj">
                <AccordionTrigger className="text-left font-serif text-lg text-primary hover:text-gold data-[state=open]:text-gold">
                  5. O meu plano PME (CNPJ) aumentou por "Sinistralidade". O que fazer?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pt-2">
                  Reajustes baseados em alta sinistralidade sem a devida transparência e prestação de contas são nulos. Se você possui até 30 vidas no CNPJ, aplicamos o pool de risco normativo da ANS, o que anula aumentos astronômicos abusivos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-cancela">
                <AccordionTrigger className="text-left font-serif text-lg text-primary hover:text-gold data-[state=open]:text-gold">
                  6. O plano cancelou o contrato unilateralmente enquanto eu estava internado.
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pt-2">
                  Isto é um crime contra do consumidor. Se você está em meio a tratamento de doença grave (internação, quimioterapia), independentemente se o contrato for coletivo ou PME, o Superior Tribunal entende que ele NÃO pode ser rescindido até a alta médica. Entre com liminar sob risco de morte (periculum in mora).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            {/* Terapias ABA e Home Care*/}
            <h2 className="text-2xl font-serif font-bold text-gold mb-6 border-b border-gold/20 pb-4">Terapias ABA, Home Care e Erro Médico</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-aba">
                <AccordionTrigger className="text-left font-serif text-lg text-primary hover:text-gold data-[state=open]:text-gold">
                  7. Plano cobre Terapias para Autismo (ABA, Denver, Integração Sensorial)?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pt-2">
                  A ANS derrubou o limite de sessões terapêuticas para autistas com CID F84. Se o plano credenciado não disponibilizar as terapias em clínica especializada perto da sua clínica no prazo, a Justiça obriga o plano a custear as terapias integralmente no formato particular.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-homecare">
                <AccordionTrigger className="text-left font-serif text-lg text-primary hover:text-gold data-[state=open]:text-gold">
                  8. Plano de Saúde nega "Home Care" e oferece apenas cuidador. O que fazer?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pt-2">
                  Segundo o TJSP (Súmula 90), havendo expressa indicação médica, é abusiva a negativa de prestação de serviços de enfermagem domiciliar (Home Care) prescrevendo que isso seja considerado "exclusão contratual". Uma liminar resolve esse tipo de questão rapidamente.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="mt-12 text-center bg-gray-50 border border-gold/10 p-8 rounded-3xl">
             <p className="text-gray-700 mb-6 font-medium">Sua dúvida não está aqui? Nossos especialistas em São Paulo respondem via WhatsApp.</p>
             <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer" className="inline-flex bg-gold hover:bg-gold-dk text-primary font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                Falar com Advogado (41) 99958-0015
             </a>
          </div>
        </div>
      </div>
    </>
  )
}
