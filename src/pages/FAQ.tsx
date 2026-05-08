import { SEO } from "../components/SEO"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"

export default function FAQ() {
  return (
    <>
      <SEO title="Perguntas Frequentes (FAQ)" description="Tire suas dúvidas sobre Direito à Saúde." />
      <div className="pt-32 pb-20 container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-primary mb-8 text-center mt-12">Perguntas Frequentes</h1>
        <Accordion type="single" collapsible className="w-full bg-white p-6 rounded-xl shadow-elegant">
          <AccordionItem value="item-1">
            <AccordionTrigger>O plano de saúde negou minha cirurgia. O que fazer?</AccordionTrigger>
            <AccordionContent>A negativa de cobertura muitas vezes é abusiva. Juntando os laudos médicos e a negativa por escrito, podemos ingressar com uma liminar para garantir a realização do procedimento.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Meu plano sofreu um reajuste muito alto. Posso revisar?</AccordionTrigger>
            <AccordionContent>Sim. Reajustes por faixa etária (especialmente aos 59 anos) ou sinistralidade muitas vezes infringem normas da ANS. É possível revisar os valores e até pedir restituição.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}
