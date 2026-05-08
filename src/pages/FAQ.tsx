import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Link } from "react-router-dom"

export default function FAQ() {
  return (
    <>
      <SEO 
        title="Dúvidas Frequentes sobre Planos de Saúde" 
        description="Encontre respostas claras para os principais problemas com convênios médicos: negativas, carência, reembolso e reajustes." 
      />
      <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Dúvidas Frequentes</h1>
            <p className="text-gray-600 text-lg">Respostas elaboradas pelo nosso corpo jurídico para esclarecer seus direitos.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-elegant">
            <h2 className="text-2xl font-serif font-bold text-accent mb-6 border-b pb-2">Negativas de Cobertura</h2>
            <Accordion type="single" collapsible className="w-full mb-12">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">O plano de saúde negou minha cirurgia e não justificou por escrito. O que fazer?</AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
                  <strong>Você deve exigir a negativa formal por escrito.</strong> A Resolução Normativa nº 319 da ANS determina que a operadora é obrigada a fornecer a justificativa da recusa em até 24 horas. Com ela em mãos, juntamente com o pedido médico fundamentado, é possível ingressar com uma <em>ação judicial com pedido de liminar</em>. <Link to="/contato" className="text-blue-600 underline">Fale conosco para analisarmos o caso.</Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">A operadora alega "doença preexistente" para negar tratamento. Está correto?</AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
                  <strong>Nem sempre.</strong> Se a operadora não exigiu exame admissional preventivo, ela assumiu o risco e não pode alegar <em>doença preexistente</em> no momento em que você precisa do tratamento (Súmula 105 do TJ-SP). Caso seja uma urgência/emergência, o atendimento deve ser imediato, independentemente de preexistência.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h2 className="text-2xl font-serif font-bold text-accent mb-6 border-b pb-2">Prazos de Carência</h2>
            <Accordion type="single" collapsible className="w-full mb-12">
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">Tive uma emergência médica, mas estou no período de carência. Tenho direito ao atendimento?</AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
                  <strong>Sim. Em casos de urgência e emergência, a carência máxima permitida por lei é de 24 horas.</strong> Se a operadora recusar a internação alegando carência de 180 dias, trata-se de uma conduta abusiva, e o paciente tem o direito de exigir a cobertura da internação via judicial. <Link to="/contato" className="text-blue-600 underline">Acione nosso plantão.</Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <h2 className="text-2xl font-serif font-bold text-accent mb-6 border-b pb-2">Reembolso Médico</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">O plano reembolsou um valor irrisório da minha consulta. Isso é legal?</AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed">
                  <strong>A operadora tem o dever de informar previamente e de forma clara como é feito o cálculo do reembolso.</strong> Fórmulas complexas e inacessíveis são consideradas nulas pela Justiça, e você pode propor uma <em>ação de cobrança de reembolso médico</em> para o pagamento da diferença.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}
