import React from 'react';

export const serviceContent: Record<string, any> = {
  "negativa-de-cirurgia": {
    seoTitle: "Cirurgia Negada pelo Plano de Saúde em SP | Liminar Rápida",
    seoDesc: "O plano negou sua cirurgia? Conseguimos liminar em 24h a 48h para obrigar o custeio em hospitais de São Paulo. Consulta grátis.",
    title: "Negativa de Cirurgia ou Exames",
    heroTitle: "Sua cirurgia foi negada? O plano de saúde errou.",
    heroSubtitle: "Revertemos judicialmente a recusa abusiva e obrigamos a operadora a custear o procedimento integralmente. Liminares concedidas em 24h a 48h.",
    bloco1: (
      <>
        <p className="lead text-xl text-primary font-medium border-l-4 border-gold pl-6 mb-8 italic">
          O papel do médico é prescrever o tratamento. O papel do plano é pagar. Quando o plano interfere na decisão médica, a recusa é ilegal.
        </p>
        <p>
          Bariátrica, cirurgias robóticas, intervenções cardíacas ou oncológicas: é muito comum que, após anos pagando a mensalidade em dia, o paciente receba uma resposta fria da operadora de saúde alegando "falta de cobertura" ou "procedimento fora do rol".
        </p>
        <p>
          A verdade que eles não te contam é: <strong>a recusa de procedimento com indicação médica clara é considerada abusiva pelos tribunais</strong>, especialmente em São Paulo.
        </p>
      </>
    ),
    bloco2: (
      <>
        <p>
          O <strong>Tribunal de Justiça de São Paulo (TJSP)</strong> possui jurisprudência firmada contra este tipo de abuso. A <a href="#" className="text-gold font-bold underline">Súmula 96 do TJSP</a> diz expressamente:
        </p>
        <blockquote className="border-l-4 border-primary bg-primary/5 p-4 rounded-r-xl italic my-6 text-gray-700">
          "Havendo expressa indicação médica de exames associados a enfermidade coberta pelo contrato, não prevalece a negativa de cobertura do procedimento."
        </blockquote>
        <p>
          Ou seja, se a sua doença (como obesidade, câncer ou cardiopatia) é coberta pelo plano, o método de tratamento exigido pelo médico também deve ser, ainda que o plano alegue ser experimental, de alto custo ou fora do rol da Agência Nacional de Saúde (ANS).
        </p>
      </>
    ),
    faq: [
      {
        pergunta: "Eles negaram porque a cirurgia é 'robótica'. Tem direito?",
        resposta: "Sim. O método cirúrgico quem decide é o médico especialista, não o plano. O TJSP rotineiramente obriga os planos a cobrirem técnicas robóticas e minimamente invasivas quando justificadas no laudo."
      },
      {
        pergunta: "A liminar sai no mesmo dia?",
        resposta: "Em casos de risco de morte ou dano irreversível (urgência emergencial), podemos despachar direto com o juiz plantonista e a decisão sai em poucas horas. Em casos eletivos, o prazo médio é de 24 a 48 horas úteis."
      },
      {
        pergunta: "Vou sofrer retaliação do plano se processar?",
        resposta: "Não. A lei impede o cancelamento do contrato por motivo de ação judicial. Se houver qualquer retaliação, o plano pode ser condenado a multas pesadas e danos morais."
      },
      {
        pergunta: "O rol da ANS não impede a liminar?",
        resposta: "Não. O rol da ANS agora é exemplificativo na justiça. Trazendo provas da eficácia do tratamento (artigos científicos ou aprovação na Anvisa/Conitec), superamos o rol facilmente."
      },
      {
        pergunta: "E se a cirurgia for amanhã?",
        resposta: "Temos advogados de plantão para casos limítrofes. Entre em contato urgente pelo WhatsApp."
      }
    ]
  },
  "reajustes-abusivos": {
    seoTitle: "Reajuste Abusivo no Plano de Saúde SP | Reduza sua Mensalidade",
    seoDesc: "Reduza os reajustes abusivos do seu convênio por faixa etária (59 anos) ou sinistralidade. Ações no TJSP com Risco Zero.",
    title: "Reajustes Abusivos na Mensalidade",
    heroTitle: "A mensalidade dobrou? O reajuste pode ser anulado.",
    heroSubtitle: "Aumentos exorbitantes por mudança de faixa etária aos 59 anos ou por 'alta sinistralidade' são derrubados na justiça todos os dias.",
    bloco1: (
      <>
        <p className="lead text-xl text-primary font-medium border-l-4 border-gold pl-6 mb-8 italic">
          Planos coletivos, por adesão ou empresariais costumam sofrer aumentos de 40%, 60% e até 100% que mascaram lucros desproporcionais e forçam a expulsão de idosos.
        </p>
        <p>
          Muitos paulistas ficam sem saída ao receber o novo boleto em datas de aniversário (especialmente aos 59 anos) ou no reajuste anual do contrato PME. A boa notícia é que o Poder Judiciário avalia esses aumentos e, quando injustificados por cálculos atuariais robustos, manda <strong>reduzir a mensalidade ao índice fixado pela ANS</strong>.
        </p>
      </>
    ),
    bloco2: (
      <>
        <p>
          O Código de Defesa do Consumidor, o Estatuto do Idoso e a jurisprudência consolidada protegem você. O STJ fixou tema obrigatório dizendo que o reajuste de faixa etária só é válido se não for um aumento irrazoável ("onerosidade excessiva").
        </p>
        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-4 border-b border-gray-300">Ano</th>
                <th className="p-4 border-b border-gray-300 w-1/3">Teto ANS (Individual)</th>
                <th className="p-4 border-b border-gray-300 w-1/3">Aumento Abusivo Comum (PME/Adesão)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-50">
                <td className="p-4 border border-gray-200">2024</td>
                <td className="p-4 border border-gray-200 text-gold font-bold font-mono">6,91%</td>
                <td className="p-4 border border-gray-200 bg-red-50 text-red-700">~15% a 25%</td>
              </tr>
              <tr className="bg-gray-lt hover:bg-gray-50">
                <td className="p-4 border border-gray-200">2023</td>
                <td className="p-4 border border-gray-200 text-gold font-bold font-mono">9,63%</td>
                <td className="p-4 border border-gray-200 bg-red-50 text-red-700">~18% a 30%</td>
              </tr>
              <tr className="bg-white hover:bg-gray-50">
                <td className="p-4 border border-gray-200">2022</td>
                <td className="p-4 border border-gray-200 text-gold font-bold font-mono">15,50%</td>
                <td className="p-4 border border-gray-200 bg-red-50 text-red-700">~25% a 45%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">Se o seu reajuste foi pareado muito acima da coluna ANS sem explicação técnica provada, ele pode ser anulado.</p>
      </>
    ),
    faq: [
      {
        pergunta: "Se eu entrar com ação, o plano reduz imediatamente?",
        resposta: "Sim, pedimos uma liminar para que a mensalidade do mês atual já seja cobrada com o valor reduzido."
      },
      {
        pergunta: "Posso recuperar o que paguei a mais?",
        resposta: "Sim. A lei permite a restituição dos valores pagos a mais nos últimos 3 anos, com correção monetária."
      },
      {
        pergunta: "Meu plano é empresarial. Tenho direito?",
        resposta: "Especialmente os planos PME (Pequenas e Médias Empresas) até 29 vidas têm forte proteção dos tribunais pela chamada 'teoria do agrupamento' (pool de risco)."
      },
      {
        pergunta: "O plano afirma que avisou no contrato. Está válido?",
        resposta: "Cláusulas abusivas são nulas de pleno direito. Uma mera cláusula genérica de alta sinistralidade não basta, a operadora é obrigada a provar matematicamente as despesas no processo (o que raramente conseguem)."
      },
      {
        pergunta: "E o reajuste de mudança de faixa para os 59 anos?",
        resposta: "Aos 59 anos, os planos dão um forte salto (por vezes +80%) para não reajustarem mais aos 60 (devido ao Estatuto do Idoso). Esse repasse estratosférico concentrado é ilegal se provada a onerosidade excessiva."
      }
    ]
  },
  "medicamentos-alto-custo": {
    seoTitle: "Liminar para Medicamento de Alto Custo | Advogado Saúde SP",
    seoDesc: "Obrigamos o plano de saúde a custear remédios importados ou Oncológicos, mesmo fora do rol da ANS. Atendimento especializado em SP.",
    title: "Medicamentos de Alto Custo Negados",
    heroTitle: "Não interrompa seu tratamento por recusa do plano.",
    heroSubtitle: "Medicamentos oncológicos, biológicos e off-label têm cobertura obrigatória quando há recomendação médica baseada em evidência científica.",
    bloco1: (
      <>
        <p className="lead text-xl text-primary font-medium border-l-4 border-gold pl-6 mb-8 italic">
          Diante de diagnósticos complexos (Câncer, Doenças Autoimunes, Raras), o tempo e a adesão ao melhor remédio valem vidas.
        </p>
        <p>
          Os planos negam medicações de R$ 10.000 ou R$ 100.000 mensais usando desculpas padronizadas: "remédio experimental", "uso off-label" ou "não consta no rol da ANS para esta patologia". O Judiciário entende o absurdo dessa prática.
        </p>
      </>
    ),
    bloco2: (
      <>
        <p>
          A <a href="#" className="text-gold font-bold underline">Súmula 102 do TJSP</a> é fulminante sobre o assunto:
        </p>
        <blockquote className="border-l-4 border-primary bg-primary/5 p-4 rounded-r-xl italic my-6 text-gray-700">
          "Havendo expressa indicação médica, é abusiva a negativa de custeio de custeio de tratamento sob o argumento da sua natureza experimental ou por não estar previsto no rol de procedimentos da ANS."
        </blockquote>
        <p>
          Se o medicamento tem registro na ANVISA, o plano (ou às vezes o Estado/SUS, em ações contra a Fazenda Pública) é obrigado a custeá-lo.
        </p>
      </>
    ),
    faq: [
      {
        pergunta: "O remédio é importado. Eles são obrigados a pagar?",
        resposta: "Sim, se tiver registro no país ou, em casos excepcionais (aprovados por agências internacionais de renome como FDA e EMA), mesmo sem registro nacional, havendo urgência médica comprovada."
      },
      {
        pergunta: "O que é medicamento Off-label e por que o plano nega?",
        resposta: "Off-label é quando o médico receita a droga para uma indicação diferente daquela escrita na bula original. A justiça entende que o plano não julga protocolo clínico, quem julga é o médico. A negativa é ilegal."
      },
      {
        pergunta: "O médico me prescreveu terapia oral para usar em casa (oncológico). Eles dizem que só cobrem radioterapia no hospital.",
        resposta: "Falso. A Lei dos Planos de Saúde garante a cobertura antineoplásica domiciliar de uso oral e terapias de suporte associadas."
      },
      {
        pergunta: "O plano exigiu tentar falhar em tratamentos mais baratos (try and fail). Isso é certo?",
        resposta: "Essa diretriz de utilização é cruel com o paciente. Se o laudo justificar a ineficácia prévia da linha de base, a liminar obriga a pularem para o tratamento de alto custo, poupando a saúde do segurado."
      },
      {
        pergunta: "Entro contra o Plano, SUS ou Estado?",
        resposta: "Se você tem plano privado, é infinitamente mais célere acioná-lo nos Juizados Cíveis ou Varas Cíveis estaduais. Acionar o SUS/Estado fica como alternativa para pacientes não cobertos ou negativas de rol SUS unificado."
      }
    ]
  },
  "home-care": {
    seoTitle: "Liminar para Home Care Negado SP | Cicarelli Advogados",
    seoDesc: "O plano cortou o Home Care do idoso ou acamado? A justiça paulista proíbe esse corte unilateral. Reverta com pedido de urgência 24h.",
    title: "Liberação de Home Care (Internação Domiciliar)",
    heroTitle: "Cortaram a internação domiciliar do seu familiar?",
    heroSubtitle: "É crueldade e ilegalidade. Garantimos via liminar enfermeiros, fraldas, fisio e suporte completo 24h em domicílio.",
    bloco1: (
      <>
        <p className="lead text-xl text-primary font-medium border-l-4 border-gold pl-6 mb-8 italic">
          Idosos acamados e pacientes debilitados frequentemente sofrem pressão absurda para alta hospitalar antes da hora, e os planos resistem a cobrir a extensão do cuidado (Home Care) na residência familiar.
        </p>
        <p>
          O serviço de urgência do escritório atende dezenas de casos semanais de planos ameaçando "cancelar a fono", "retirar a enfermagem" ou suspender materiais descartáveis alegando "fim da indicação por auditor próprio da operadora".
        </p>
      </>
    ),
    bloco2: (
      <>
        <p>
           A <strong>Súmula 90 do TJSP</strong> reza:
        </p>
        <blockquote className="border-l-4 border-primary bg-primary/5 p-4 rounded-r-xl italic my-6 text-gray-700">
           "Havendo expressa indicação médica para a utilização dos serviços de home care, revela-se abusiva a cláusula de exclusão inserida na avença, que não pode prevalecer."
        </blockquote>
        <p>
          Sendo a internação domiciliar um substituto da internação hospitalar (e até mais barata para o plano), a operadora que se recusa a cobri-la vai de encontro à lei, que determina a melhoria da condição do segurado.
        </p>
      </>
    ),
    faq: [
      {
        pergunta: "O plano diz que família (cuidador) deve assumir. Eles podem tirar o enfermeiro 24h?",
        resposta: "Não. Cuidador de idoso não tem habilitação técnica (punção venosa, sondas, respiração). Se o laudo médico atestar a necessidade de equipe técnica contínua, o plano deverá manter o enfermeiro ou tec.enfermagem."
      },
      {
        pergunta: "O plano também deve cobrir fisioterapia e fraldas?",
        resposta: "Sim! Nutrição enteral, cama hospitalar, suporte de oxigênio, fisioterapia respiratória, motoras fonoaudiólogas fazem parte do ecossistema do Home Care com prescrição."
      },
      {
        pergunta: "Pela auditoria particular deles, falaram que não é mais necessário. E agora?",
        resposta: "A opinião do médico que assiste o paciente se sobrepõe à do auditor (perito) que trabalha para o plano. Comprovamos a manutenção do quadro via relatórios diretos."
      },
      {
        pergunta: "Disseram que meu contrato não cobre Home Care.",
        resposta: "A cláusula de exclusão é considerada nula de pleno direito consoante entendimento sumular. Todo contrato de rede hospitalar implicitamente tem a sucessão domiciliar inerente."
      },
      {
        pergunta: "A ambulância está cancelada se entrarmos com a ação?",
        resposta: "Qualquer retaliação como cancelamento da ambulância sem ordem médica ensejará ordem coercitiva do juiz contra a diretoria, com multas altíssimas (astreintes)."
      }
    ]
  },
  "erro-medico": {
    seoTitle: "Advogado Especialista Erro Médico SP | Indenização Justa",
    seoDesc: "Sofreu sequelas por falha médica, negligência ou infecção hospitalar? Lutamos por Reparação de Danos estéticos, materiais e morais.",
    title: "Casos de Erro Médico e Defesa do Paciente",
    heroTitle: "Sofrimento ou sequelas causadas por erro de hospital/médico?",
    heroSubtitle: "A negligência ou imperícia não ficarão impunes. Buscamos justiça integral para você ou sua família nos tribunais com profundo respeito a dor e sigilo total.",
    bloco1: (
      <>
        <p className="lead text-xl text-primary font-medium border-l-4 border-gold pl-6 mb-8 italic">
           As falhas sistêmicas na saúde não podem ser varridas para debaixo do tapete. Do diagnóstico tardio à sequela num centro cirúrgico.
        </p>
        <p>
           Cirurgias plásticas com dano estético, infecções hospitalares severas, esquecimento de compressas/material cirúrgico, troca de exames, obstetrícia (violência obstétrica e erro no parto), entre outros. O primeiro passo é blindar a documentação.
        </p>
      </>
    ),
    bloco2: (
      <>
         <p>
           A justiça prevê três pilares de indenizações nesses casos:
         </p>
         <ul className="marker:text-gold list-disc pl-6 space-y-4 my-6">
            <li><strong>Dano Estético:</strong> Reparação pelo que é aparente e altera a forma física;</li>
            <li><strong>Dano Moral:</strong> Compensação pela angústia psíquica, tristeza ou luto (Morte do familiar);</li>
            <li><strong>Danos Materiais, Pensão ou Lucros Cessantes:</strong> Tudo que a família gastou ou vai deixar de ganhar nos meses sem trabalhar pelas sequelas. Custeio da reabilitação física inteira.</li>
         </ul>
      </>
    ),
    faq: [
      {
        pergunta: "Como provar que existiu de fato negligência?",
        resposta: "A base de toda ação de erro médico é a cópia integral do Prontuário Médico. Nossos primeiros atos são muitas vezes conseguir compulsoriamente (se esconderem) os exames daquele dia. Posteriormente há uma perícia."
      },
      {
        pergunta: "O hospital escondeu as folhas do laudo de enfermagem.",
        resposta: "Ingressamos com ação cautelar de exibição de documentos ou busca e apreensão."
      },
      {
        pergunta: "Vou processar o médico pessoa física ou o hospital/Plano de Saúde?",
        resposta: "Ambos ou apenas os Pessoas Jurídicas (Hospital). A responsabilidade do hospital na relação com o consumidor e da seguradora/cooperada é tida como Solidária. Assim a reparação aumenta as chances de sucesso."
      },
      {
        pergunta: "Quanto tempo tenho pra processar?",
        resposta: "Em regra, segundo o Código de Defesa do Consumidor você tem prescrição de 5 anos para pedir a indenização. Mas aja imediatamente, pois as evidências e o laudo esfriam."
      },
      {
        pergunta: "Qual o custo dessa ação no contencioso cível?",
        resposta: "Cada caso requer perícia e gastos judiciais próprios. Oferecemos pacotes moduláveis para honorários ou modelo quota de sucesso. Fale no WhatsApp informativamente que explicamos o que é justiça gratuita."
      }
    ]
  },
  "autismo-aba": {
    seoTitle: "Liminar Tratamento Autismo ABA | Sem Limite de Sessões",
    seoDesc: "Seu plano de saúde nega custeio integral do tratamento multidisciplinar TEA e ABA? Garantimentos liminarmente reembolso ou clínicas da rede.",
    title: "Cobertura Multidisciplinar e Método ABA (TEA)",
    heroTitle: "Plano de Saúde limitou o tratamento de Autismo?",
    heroSubtitle: "Eles não podem limitar as sessões ou impor métodos falhos. O tratamento multidisciplinar ABA para o Transtorno do Espectro Autista é imposto pelos juízes liminarmente.",
    bloco1: (
      <>
         <p className="lead text-xl text-primary font-medium border-l-4 border-gold pl-6 mb-8 italic">
            Pais de crianças atípicas ou com transtorno global do desenvolvimento sabem as lacunas profundas com os prestadores do convênio ou a interrupção abusiva do pacote das milhares de horas necessárias.
         </p>
         <p>
            É muito comum que após laudo neuropediatra constatar 40h semanais de ABA combinadas com Fonoaudiologia, Terapia Ocupacional c/ Integração Sensorial e Psicologia, as operadoras tentem capar estas intervenções essenciais, sob alegação de serem terapias alternativas ou coparticipações inviáveis.
         </p>
      </>
    ),
    bloco2: (
      <>
         <p>
           Esta é a tese de maior êxito absoluto nas liminares perante as Turmas do Direito Privado de São Paulo no decorrer do ano 2023 em diante, inclusive do STF via rol.
         </p>
         <blockquote className="border-l-4 border-primary bg-primary/5 p-4 rounded-r-xl italic my-6 text-gray-700">
           "A cobertura mínima e as diretrizes do judiciário para dependentes que requerem terapias de método ABA, Bobath etc são claras: os planos são co-obrigados a arcar financeiramente SEM restrições de horários."
         </blockquote>
      </>
    ),
    faq: [
      {
        pergunta: "Posso pedir reembolso das clínicas particulares em meu bairro visto que a rede credenciada é imensa de ruim e não usa a ciência ABA?",
        resposta: "Sim! É chamada Recusa Velada. Se a clínica credenciada no portal do plano não tiver a especialidade ABA e as vagas não existirem em tempo razoável de proximidade, pediremos por liminar que o plano seja condenado ao Reembolso Integral da clínica de sua confiança familiar."
      },
      {
        pergunta: "Cobrança excessiva em coparticipação em fono pode cair?",
        resposta: "Evitaremos as glosas. Quando a coparticipação (ex.: 30% a 50%) para terapias ininterruptas e essenciais à vida depara onerosidade absurda que chega a salários, a jurisprudência isenta o consumidor ou impõe limite teto acessível."
      },
      {
        pergunta: "Podem negar musicoterapia, equoterapia ou AT na sala de aula?",
        resposta: "Métodos que têm indicação clínica direta para aquele menor são chancelados por relatórios das juízas e peritos. Mas requerer a Liminar ABA, T.O, Fono ja garante o principal."
      },
      {
        pergunta: "Tem carência para uso disto?",
        resposta: "Para diagnóstico TEA, algumas de 180 dias ou menos são alegadas pelo plano, mas pode cair no judiciário frente a urgência no desenvolvimento neural até certa idade. Em urgências, aplicamos tese de 24 horas."
      },
      {
        pergunta: "Como vocês processam essa papelada?",
        resposta: "Basta você enviar pdf/foto dos requerimentos e da guia assinada negada. Atendemos digitalmente aos responsáveis dos menores diariamente!"
      }
    ]
  },
  "default": {
    seoTitle: "Advogado Plano de Sáude | Especialistas em Liminares SP",
    seoDesc: "Problemas com seu convênio médico em São Paulo? Revertemos liminarmente a negativas judiciais abusivas por um honorário transparente.",
    title: "Especialidade",
    heroTitle: "Derrubamos a Negativa do seu Plano",
    heroSubtitle: "Revertemos judicialmente recusas abusivas e obrigamos a operadora a cumprir com suas obrigações.",
    bloco1: <p>Conteúdo da exclusividade.</p>,
    bloco2: <p>Mais detalhes.</p>,
    faq: [{ pergunta: "Tem dúvida?", resposta: "Entre em contato agora conosco para resolver essa questão."}]
  }
}
