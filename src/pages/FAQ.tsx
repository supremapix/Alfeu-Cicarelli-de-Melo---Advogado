import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { ShieldX, Clock, TrendingUp, Timer, AlertTriangle, Heart, Briefcase, Scale, ArrowRight, CheckCircle2 } from "lucide-react"
import { SEO } from "../components/SEO"
import { HeroSection } from "@/components/HeroSection"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqCategories = [
  {
    id: "negativas",
    label: "Negativas",
    title: "Negativas de Cobertura",
    icon: ShieldX,
    items: [
      {
        q: "O plano de saúde pode negar cobertura de cirurgia prescrita pelo meu médico?",
        a: "Não. Quando um procedimento é prescrito por médico e consta no Rol de Procedimentos da ANS (ou fora dele, pois o STJ fixou no Tema 1069 que o Rol é exemplificativo), o plano não pode negar arbitrariamente. A negativa deve ser fundamentada por escrito, indicando a cláusula contratual ou norma que justifica a recusa — obrigação criada pela RN ANS nº 623/2024. Se a justificativa for insuficiente ou ilegal, é possível obter autorização judicial por liminar em 24 a 48 horas.",
        cta: "Minha cirurgia foi negada → Falar com advogado agora",
        wamsg: "Olá, minha cirurgia foi negada pelo plano. Quero consulta gratuita."
      },
      {
        q: "O plano negou cobertura. Qual é o prazo para responder à minha solicitação?",
        a: "Desde 1º de julho de 2025, a RN ANS nº 623/2024 fixou prazos obrigatórios:\n• Urgência e emergência: resposta IMEDIATA.\n• Outras solicitações assistenciais: até 5 dias úteis.\n• Alta complexidade ou internação eletiva: até 10 dias úteis.\n• Demandas não assistenciais (2ª via, cancelamento etc.): até 7 dias úteis.\nSe o plano não responder nesses prazos ou der resposta genérica (\"em análise\"), isso é infração à ANS e motivo para ação judicial imediata.",
        cta: "Meu plano não respondeu no prazo → Quero acionar judicialmente",
        wamsg: "Olá, meu plano não cumpriu o prazo de resposta da ANS. Quero saber como acionar judicialmente."
      },
      {
        q: "A negativa pode ser dada verbalmente ou por telefone?",
        a: "Não mais. A partir de julho de 2025, pela RN 623/2024, toda negativa de cobertura deve ser reduzida a termo por escrito, enviada automaticamente ao beneficiário (mesmo sem que ele solicite), em formato que permita download ou impressão. A negativa precisa indicar exatamente qual cláusula ou norma da ANS fundamenta a recusa. Negativa oral ou genérica é ilegal e facilita a obtenção de liminar na Justiça.",
        cta: "Recebi negativa verbal → O que fazer agora",
        wamsg: "Olá, o plano negou meu procedimento apenas de boca. O que devo fazer?"
      },
      {
        q: "O plano pode negar cobertura alegando que o procedimento é experimental?",
        a: "Depende. Se o procedimento constar no Rol da ANS, a negativa por \"experimentalidade\" é ilegal. Para procedimentos fora do Rol, o STJ (Tema 1069, 2022) estabeleceu que o plano pode negar — EXCETO quando há: (a) recomendação de órgão técnico nacional (CONITEC) ou internacional, (b) ausência de substituto no Rol, ou (c) comprovação médica de eficácia. Em casos oncológicos, a Lei nº 12.732/2012 impõe cobertura em 60 dias.",
        cta: "Meu procedimento foi negado por ser 'experimental' → Avaliar caso",
        wamsg: "Olá, o plano negou meu tratamento alegando ser experimental. Quero que avaliem meu caso."
      },
      {
        q: "O plano pode negar reembolso quando atendi fora da rede credenciada?",
        a: "Depende da situação. Em caso de urgência ou emergência, o plano é obrigado a reembolsar mesmo fora da rede (Lei 9.656/98, art. 12). Em atendimento eletivo fora da rede, o reembolso é obrigatório se não houver prestador credenciado na área geográfica do contrato ou se houve indicação de médico da própria rede. O valor do reembolso deve ser suficiente para cobrir o atendimento equivalente na tabela AMB ou CBHPM.",
        cta: "Meu reembolso foi negado → Verificar se tenho direito",
        wamsg: "Olá, o plano negou meu reembolso por atendimento fora da rede. Gostaria de saber meus direitos."
      }
    ]
  },
  {
    id: "carencia",
    label: "Carência",
    title: "Carência",
    icon: Clock,
    items: [
      {
        q: "Quais são os prazos máximos de carência permitidos pela lei?",
        a: "A Lei 9.656/98 (art. 12, V) estabelece os seguintes prazos máximos:\n• Urgência e emergência: 24 horas (após a contratação, o plano já deve cobrir)\n• Consultas, exames ambulatoriais: 30 dias\n• Internações, cirurgias eletivas: 180 dias (6 meses)\n• Parto a termo: 300 dias (10 meses)\n• Doenças e lesões preexistentes: cobertura parcial temporária por até 24 meses\nQualquer prazo maior que esses é ilegal e pode ser contestado judicialmente.",
        cta: "Estão me cobrando carência acima do prazo → Consultar advogado",
        wamsg: "Olá, estão me cobrando um prazo de carência muito alto. Quero contestar."
      },
      {
        q: "O plano pode exigir carência para atendimento de urgência ou emergência?",
        a: "Não. Mesmo que você tenha acabado de contratar o plano, em casos de urgência ou emergência a operadora é obrigada a prestar atendimento em até 24 horas após a assinatura do contrato, independentemente de qualquer período de carência (Lei 9.656/98 e RN ANS nº 186/2009). Se o plano recusar, cabe liminar judicial imediata — casos assim costumam ser deferidos em menos de 12 horas.",
        cta: "Plano negou urgência alegando carência → Ação imediata",
        wamsg: "Olá, é uma situação de urgência e o plano está negando por carência. Preciso de ação imediata."
      },
      {
        q: "O que é portabilidade de carência e como funciona?",
        a: "A portabilidade permite trocar de plano sem precisar cumprir novamente os prazos de carência, desde que: (a) você esteja há pelo menos 2 anos no plano atual, (b) o novo plano seja de cobertura equivalente ou inferior, e (c) não haja interrupção de pagamentos. A RN ANS nº 438/2018 regulamenta os detalhes. É um direito pouco conhecido — muitas operadoras dificultam o processo propositalmente, o que pode ser contestado.",
        cta: "Quero trocar de plano sem perder carência → Como fazer",
        wamsg: "Olá, quero trocar de plano através da portabilidade de carência e preciso de orientação."
      },
      {
        q: "Tenho doença preexistente. O plano é obrigado a me aceitar?",
        a: "Sim. A Lei 9.656/98 proíbe a recusa de contratação por doença preexistente. O que pode ocorrer é uma Cobertura Parcial Temporária (CPT): durante até 24 meses, o plano não cobre cirurgias, UTI e procedimentos de alta complexidade relacionados especificamente àquela doença preexistente. Após 24 meses, a cobertura passa a ser total e irrestrita.",
        cta: "Meu plano está negando por doença preexistente → Verificar prazo",
        wamsg: "Olá, meu convênio está embasando uma negativa na minha doença preexistente. Pode avaliar se é legal?"
      }
    ]
  },
  {
    id: "reajustes",
    label: "Reajustes",
    title: "Reajustes Abusivos",
    icon: TrendingUp,
    items: [
      {
        q: "O plano pode aumentar o valor da mensalidade quando quiser?",
        a: "Não. Planos individuais e familiares só podem ser reajustados uma vez por ano, no mês de aniversário do contrato, pelo índice máximo autorizado pela ANS (divulgado anualmente). Para 2024, o teto foi de 6,91%. Qualquer reajuste acima desse índice ou em prazo inferior a 12 meses é ilegal. Para planos coletivos, o reajuste é negociado entre operadora e empresa, mas deve ser justificado e comunicado com 30 dias de antecedência.",
        cta: "Minha mensalidade subiu acima do índice → Calcular o abuso",
        wamsg: "Olá, a mensalidade do meu convênio sofreu um reajuste muito acima do permitido. Quero revisar meu contrato."
      },
      {
        q: "O plano pode reajustar a mensalidade quando completo 60 anos?",
        a: "Não pode, se você já for beneficiário há mais de 10 anos. O art. 15, parágrafo único, da Lei 9.656/98 proíbe reajuste por faixa etária para consumidores com mais de 60 anos que estejam no mesmo plano há mais de 10 anos. Para quem tem menos de 60 anos, o reajuste é permitido, mas os percentuais devem estar previstos no contrato original e obedecer às normas da ANS — aumentos desproporcionais são contestáveis.",
        cta: "Reajustaram meu plano depois dos 60 anos → Tenho direito de contestar",
        wamsg: "Olá, meu plano me aplicou reajuste após eu completar 60 anos. Quero revogar essa cobrança."
      },
      {
        q: "Posso recuperar valores pagos a mais em reajustes ilegais?",
        a: "Sim. O prazo prescricional para cobrar valores pagos indevidamente é de 3 anos (art. 206, §3º, IV do Código Civil). Isso significa que você pode reclamar os últimos 36 meses de reajustes abusivos, com correção monetária e juros. A ação pode ser movida mesmo que o contrato ainda esteja vigente. Em muitos casos, o valor recuperado compensa com folga os honorários advocatícios.",
        cta: "Quero calcular quanto posso recuperar → Análise gratuita",
        wamsg: "Olá, acredito que paguei mensalidades com reajuste ilegal. Como calculo esses últimos anos?"
      }
    ]
  },
  {
    id: "prazos",
    label: "Prazos",
    title: "Prazos de Atendimento",
    icon: Timer,
    items: [
      {
        q: "Qual é o prazo máximo para o plano marcar minha consulta ou cirurgia?",
        a: "A RN ANS nº 566/2022 define os prazos máximos que o plano tem para disponibilizar os serviços APÓS a autorização:\n• Consulta com médico especialista: 14 dias úteis\n• Consulta em pronto-socorro: imediata\n• Consultas de retorno: 7 dias úteis\n• Exames simples: 3 dias úteis (eletivos) / imediato (urgência)\n• Exames complexos: 10 dias úteis\n• Cirurgias eletivas: 30 dias corridos\n• Quimioterapia e radioterapia: 10 dias corridos\n• Fisioterapia e terapias: 10 dias úteis\nUltrapassados esses prazos, você pode exigir atendimento fora da rede com reembolso integral ou recorrer à Justiça.",
        cta: "Estão demorando para marcar meu procedimento → O que fazer",
        wamsg: "Olá, o plano extrapolou o limite para marcar a minha consulta e tratamento. Preciso de orientações legais."
      },
      {
        q: "O plano pode exigir autorização prévia para todo tipo de atendimento?",
        a: "Não. Urgências e emergências não precisam de autorização prévia. Consultas básicas em geral também não dependem de pré-autorização. A exigência de autorização só é válida para procedimentos que a própria ANS lista como sujeitos à regulação administrativa. Exigir autorização prévia para urgências é prática abusiva vedada pelo CDC.",
        cta: "Estão exigindo autorização em caso de urgência → Ação imediata",
        wamsg: "Olá, estou num caso de emergência que requer ação ágil da operadora, mas me pediram uma autorização burocrática absurda."
      }
    ]
  },
  {
    id: "urgencia",
    label: "Urgência",
    title: "Urgência e Emergência",
    icon: AlertTriangle,
    items: [
      {
        q: "O plano pode negar atendimento de emergência por falta de rede credenciada?",
        a: "Não. Em situações de risco de vida ou lesão grave (emergência), qualquer hospital deve ser utilizado e o plano é obrigado a cobrir, mesmo fora da rede. É o chamado \"livre acesso em emergência\". Após a estabilização, o plano pode solicitar remoção para hospital credenciado, mas até a estabilização a negativa é ilegal. Negar emergência pode inclusive configurar crime (omissão de socorro) para a operadora.",
        cta: "Plano negou emergência fora da rede → Acionar agora",
        wamsg: "Olá, o meu plano me abandonou numa situação de emergência fora da rede conveniada. Preciso acioná-los."
      },
      {
        q: "Internei de urgência e o plano quer me remover para hospital credenciado. Sou obrigado?",
        a: "Depende do seu estado clínico. A remoção só é permitida se o médico assistente (não o médico da operadora) atestar que você está estável e a remoção não oferece risco. Se houver divergência médica, você pode recusar a remoção e o plano deve manter o custeio. Um advogado pode obter liminar impedindo a remoção forçada em menos de 24 horas quando há risco comprovado.",
        cta: "Estão tentando me remover forçadamente → Preciso de liminar",
        wamsg: "Olá, o convênio está querendo forçar minha transferência de um hospital para outro e sinto que não estou com a saúde estável para o risco. Quero barrar isso na liminar."
      }
    ]
  },
  {
    id: "autismo",
    label: "Autismo/TEA",
    title: "Autismo e TEA",
    icon: Heart,
    items: [
      {
        q: "O plano de saúde é obrigado a cobrir terapia ABA para autismo?",
        a: "Sim. A RN ANS nº 539/2022 tornou obrigatória a cobertura de terapia ABA (Análise do Comportamento Aplicada), fonoaudiologia, psicologia, terapia ocupacional e demais terapias para beneficiários com diagnóstico de Transtorno do Espectro Autista (TEA). O STJ já consolidou que planos não podem limitar sessões de terapia para pacientes com TEA (ver REsp 1.733.013). Qualquer negativa é ilegal e contestável.",
        cta: "Plano negou ABA para meu filho → Garantir cobertura agora",
        wamsg: "Olá, o plano negou cobertura de terapia ABA e preciso de amparo jurídico."
      },
      {
        q: "O plano pode limitar o número de sessões de terapia por mês para autismo?",
        a: "Não pode estabelecer limites sem base clínica. O STJ firmou que limitações arbitrárias de sessões para pacientes com TEA ferem o direito à saúde e o CDC. A quantidade de sessões deve ser determinada pelo médico e pelo terapeuta responsável, com base no plano terapêutico individual (PTI). Planos que impõem limite de 4 ou 8 sessões/mês estão agindo ilegalmente e podem ser obrigados judicialmente a custear o tratamento completo.",
        cta: "Limitaram as sessões de terapia do meu filho → Ação judicial",
        wamsg: "Olá, meu convênio criou um limite indevido nas sessões de terapia comportamental de que meu familiar precisa."
      }
    ]
  },
  {
    id: "demissao",
    label: "Após Demissão",
    title: "Após Demissão e Aposentadoria",
    icon: Briefcase,
    items: [
      {
        q: "Fui demitido sem justa causa. Posso manter o plano de saúde da empresa?",
        a: "Sim. O art. 30 da Lei 9.656/98 garante que, em caso de demissão sem justa causa, você pode manter o plano pelo prazo de 1/3 do tempo que estava como beneficiário, com mínimo de 6 meses e máximo de 24 meses. Durante esse período, você assume o pagamento integral (sua parte + parte da empresa). A operadora não pode criar obstáculos para o exercício desse direito. A empresa demissora tem obrigação de te informar sobre esse direito no ato da demissão — se não informou, há prazo adicional para reivindicar.",
        cta: "Fui demitido e quero manter o plano → Como proceder",
        wamsg: "Olá, acabo de ser demitido sem justa causa e a empresa quer cortar o convênio na mesma hora. Desejo reverter a situação."
      },
      {
        q: "Me aposentei. Tenho direito de manter o plano da empresa?",
        a: "Sim, se você contribuiu por pelo menos 10 anos para o plano coletivo da empresa, tem direito à manutenção vitalícia nas mesmas condições (art. 31 da Lei 9.656/98), pagando o valor integral. Se contribuiu por menos de 10 anos, tem direito proporcional: 1 ano de manutenção para cada ano de contribuição. Empresas frequentemente não informam esse direito — se você foi excluído indevidamente, é possível reintegrar e cobrar danos pelo período sem cobertura.",
        cta: "Perdi o plano ao me aposentar → Verificar meu direito",
        wamsg: "Olá, me aposentei com uma longa contribuição pregressa num plano empresarial e pretendo mantê-lo."
      },
      {
        q: "O plano pode ser cancelado pela operadora se eu ficar doente?",
        a: "Não. A Súmula 102 do STJ é expressa: é abusiva a cláusula que prevê o cancelamento do plano de saúde em razão de doença ou agravamento da saúde do beneficiário. O plano individual e familiar não pode ser cancelado unilateralmente pela operadora, exceto por inadimplência superior a 60 dias (art. 13 da Lei 9.656/98). Qualquer cancelamento por doença é ilegal e o beneficiário tem direito de ser reintegrado.",
        cta: "Cancelaram meu plano porque fiquei doente → Reintegração judicial",
        wamsg: "Olá, a operadora desfez meu contrato de modo unilateral alegando minha doença de base."
      }
    ]
  },
  {
    id: "honorarios",
    label: "Processo Judicial",
    title: "Honorários e Processo Judicial",
    icon: Scale,
    items: [
      {
        q: "Quanto custa contratar a Cicarelli Advogados?",
        a: "A consulta inicial é sempre gratuita e sem compromisso. Para ações judiciais, trabalhamos com honorários de êxito: você só paga se ganharmos. O percentual é acordado previamente e de forma transparente. Não há nenhum custo adiantado. Acreditamos que o acesso à justiça não deve depender da capacidade financeira do cliente.",
        cta: "Quero a consulta gratuita → Agendar agora",
        wamsg: "Olá, quero agendar uma consulta gratuita com a Cicarelli Advogados."
      },
      {
        q: "O que é uma medida liminar e como ela funciona em casos de plano de saúde?",
        a: "A liminar é uma decisão judicial provisória e urgente que obriga o plano a liberar o tratamento ANTES do julgamento final da ação. Ela é concedida quando há risco de dano grave e urgência (ex: cirurgia necessária, doença progressiva, tratamento de criança). Nos casos de Direito à Saúde, juízes costumam deferir liminares em 24 a 48 horas. Se o plano descumprir a liminar, fica sujeito a multa diária (astreintes) que pode chegar a R$ 1.000 por dia ou mais, dependendo do caso.",
        cta: "Quero entender se meu caso cabe liminar → Análise gratuita",
        wamsg: "Olá, desejo conferir a viabilidade de emissão de medida liminar judiciária para o meu caso."
      },
      {
        q: "Preciso ir pessoalmente ao escritório em São Paulo?",
        a: "Não. Todos os procedimentos iniciais — análise do caso, assinatura de contrato, envio de documentos — são feitos digitalmente. Atendemos por WhatsApp, videochamada e e-mail. Para moradores de São Paulo, também realizamos atendimentos presenciais mediante agendamento. Nossa atuação abrange todos os bairros da capital e Grande SP.",
        cta: "Quero atendimento digital → Iniciar pelo WhatsApp",
        wamsg: "Olá, necessito de patrocínio jurídico da Cicarelli e solicito atendimento digital."
      },
      {
        q: "Qual é o prazo prescricional para entrar com ação contra o plano?",
        a: "Depende do tipo de ação:\n• Cobrança de reembolso ou valores pagos a mais: 3 anos (art. 206 CC)\n• Indenização por dano moral: 3 anos\n• Ação para obrigar cobertura de tratamento: imprescritível enquanto houver a necessidade médica\n• Erro médico: 3 anos\nO prazo começa a contar da data em que você teve conhecimento da violação do seu direito. Se você está com dúvida sobre seu prazo, a consulta gratuita esclarece o caso concreto em minutos.",
        cta: "Estou no prazo para entrar com ação? → Verificar agora",
        wamsg: "Olá, quero investigar a prescrição ainda disponível para o meu caso."
      },
      {
        q: "O que devo fazer ao receber uma negativa do plano de saúde?",
        a: "Siga estes passos imediatamente:\n1. Exija a negativa por ESCRITO (desde jul/2025 é obrigatório pela RN 623)\n2. Guarde toda a documentação: prescrição médica, laudos, exames\n3. Registre a reclamação na ouvidoria da operadora (prazo deles: 7 dias)\n4. Registre também na ANS pelo canal 0800 701 9656 ou app MinhaANS\n5. Procure um advogado especializado — em 24h é possível ter liminar\nCada hora perdida pode ser decisiva em casos de doenças graves.",
        cta: "Recebi negativa agora → Falar com advogado de urgência",
        wamsg: "Olá, recebi uma recusa e preciso de assistência com urgência para o meu caso."
      }
    ]
  }
]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("todas")

  // Generate JSON-LD Schema
  const allQuestions = faqCategories.flatMap(c => c.items)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a.replace(/\n•/g, " ").replace(/\n/g, " ")
      }
    }))
  }

  const filteredCategories = activeCategory === "todas" 
    ? faqCategories 
    : faqCategories.filter(c => c.id === activeCategory)

  return (
    <>
      <Helmet>
        <title>FAQ: Seus Direitos no Plano de Saúde em SP | Cicarelli Advogados</title>
        <meta 
          name="description" 
          content="Plano negou cobertura? Tire suas dúvidas sobre carência, reajuste, liminar e muito mais. Respostas baseadas na Lei 9.656/98 e RN 623/2024 da ANS. Consulta gratuita com advogado especialista em São Paulo." 
        />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <HeroSection
        badge="Base Jurídica Atualizada · 2025"
        title="Tudo o Que Você Precisa Saber Sobre Seus Direitos no Plano de Saúde"
        subtitle="Respostas claras, baseadas na lei, sem juridiquês. Se sua dúvida não estiver aqui, fale com um advogado — grátis."
        ctaText="Falar com Advogado →"
        ctaLink="https://wa.me/5541999580015"
        height="medium"
      />

      <div className="py-16 md:py-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Tabs / Filters */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-12 justify-center">
            <button
              onClick={() => setActiveCategory("todas")}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === "todas" 
                  ? "bg-gold text-primary shadow-md shadow-gold/20" 
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              Todas
            </button>
            {faqCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? "bg-gold text-primary shadow-md shadow-gold/20" 
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordions */}
          <div className="space-y-12">
            {filteredCategories.map(category => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gold/20 flex items-center justify-center text-gold">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-primary">{category.title}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.items.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${category.id}-${index}`}
                      className="bg-white border border-gray-100 rounded-2xl overflow-hidden data-[state=open]:bg-[#fbbf24]/5 data-[state=open]:border-l-4 data-[state=open]:border-l-[#fbbf24] shadow-sm hover:bg-gray-50/50 transition-all duration-300"
                    >
                      <AccordionTrigger className="px-6 py-5 text-left hover:no-underline [&[data-state=open]>svg]:text-[#fbbf24] [&[data-state=open]>svg]:rotate-180">
                        <span className="font-semibold text-[#0a0f1a] text-base md:text-lg pr-4">{item.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 pt-2">
                        <div className="text-gray-700 leading-relaxed space-y-3">
                          {item.a.split('\n').map((paragraph, i) => (
                            <p key={i} className={paragraph.startsWith('•') ? "pl-4" : ""}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-100/50">
                          <a 
                            href={`https://wa.me/5541999580015?text=${encodeURIComponent(item.wamsg)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center font-semibold text-[#c8981e] hover:text-[#eab308] underline transition-colors"
                          >
                            {item.cta} <ArrowRight className="w-4 h-4 ml-1.5" />
                          </a>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>

          {/* Rodapé Interno */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-white border border-gold/20 p-10 md:p-14 rounded-[2rem] shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
            <ShieldX className="w-12 h-12 text-gold mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Não encontrou sua resposta?</h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Cada caso é único. A melhor forma de entender seus direitos é através de uma análise individualizada. Fale com um especialista agora mesmo.
            </p>
            <a 
              href="https://wa.me/5541999580015" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-dk text-primary font-bold py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Enviar minha dúvida pelo WhatsApp <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
          
        </div>
      </div>
    </>
  )
}
