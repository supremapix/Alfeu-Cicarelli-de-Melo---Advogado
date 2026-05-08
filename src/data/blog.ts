export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tag: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "liminar-negativa-cirurgia-sp",
    title: "Liminar contra Negativa de Cirurgia em São Paulo: Como Funciona?",
    excerpt: "Se o seu plano de saúde negou uma cirurgia urgente na capital paulista ou interior, saiba que a justiça de SP tem concedido liminares em tempo recorde.",
    date: "Acesso em " + new Date().toLocaleDateString('pt-BR'),
    author: "Dr. Alfeu Cicarelli",
    tag: "Liminares SP",
    content: `
## A Ilegalidade das Negativas de Cirurgias pelos Planos de Saúde

É cada vez mais frequente conviver com pacientes que, no momento de maior dor e urgência, recebem de suas operadoras a negativa para uma cirurgia prescrita pelo médico assistente. O **Tribunal de Justiça de São Paulo (TJSP)** é pacífico ao considerar que **cabe apenas ao médico** definir o tratamento adequado ao paciente e não ao plano de saúde.

### Por que o plano nega?
Geralmente, as operadoras utilizam as seguintes justificativas:
- Procedimentos alegadamente "fora do rol da ANS"
- Não cumprimento de supostos prazos de carência
- Alegação de doença preexistente (CPT)
- Materiais cirúrgicos descritos na solicitação

### A Súmula 102 do TJSP
O TJSP consolidou o entendimento através de suas Súmulas. A Súmula 102 define claramente: *"Havendo expressa indicação médica, é abusiva a negativa de cobertura de custeio de tratamento sob o argumento da sua natureza experimental ou por não estar previsto no rol de procedimentos da ANS."*

### Como conseguir a Liminar em São Paulo?
Se a cirurgia for urgente, a ação judicial deve conter um pedido de **Tutela de Urgência (Liminar)**. 
1. **Reúna documentos**: Relatório médico detalhado informando a urgência, laudos de exames, tentativa de autorização e a negativa formal do plano, RG, CPF e carteirinha.
2. Acesse um advogado especialista em Direito à Saúde Suplementar.
3. O advogado ingressará com a ação com pedido liminar. Em São Paulo, juízes costumam apreciar esses pedidos em **24 a 48 horas**, determinando que a operadora de saúde libere a cirurgia sob pena de multa diária elevada.

Não perca tempo tentando resolver sozinho. O desgaste emocional prejudica sua saúde. O Judiciário é a via mais rápida e eficaz.
    `
  },
  {
    id: "2",
    slug: "reajuste-abusivo-plano-de-saude-idade",
    title: "Reajuste Abusivo no Plano de Saúde por Mudança de Faixa Etária aos 59 anos",
    excerpt: "Você completou 59 anos e a mensalidade do seu convênio mais que dobrou? Veja como reverter esse abuso nos tribunais.",
    date: "Acesso em " + new Date().toLocaleDateString('pt-BR'),
    author: "Equipe Cicarelli",
    tag: "Reajustes",
    content: `
## O Susto da Mensalidade aos 59 Anos

Ao completar 59 anos, muitos beneficiários de planos de saúde são surpreendidos com reajustes que chegam a incríveis **90%, 120% ou até 150%** no valor de suas mensalidades. 

Isso ocorre porque as operadoras tentam burlar o Estatuto do Idoso concentrando todo o aumento da velhice na última mudança de faixa etária permitida por lei (aos 59 anos). Contudo, essa prática é frequentemente considerada ilegal e abusiva.

### O que diz a Jurisprudência?
O Superior Tribunal de Justiça (STJ) formou tese fixada estipulando que o reajuste por faixa etária é válido **apenas se preencher três requisitos**:
1. Previsão expressa no contrato.
2. Observância das normas dos órgãos competentes (ANS).
3. Não aplicação de índices desarrazoados ou aleatórios que onerem excessivamente o consumidor.

### Ação de Revisão de Reajuste
Entrando com uma ação de revisão contratual, o juiz pode:
- Reduzir liminarmente o valor da mensalidade (Tutela de Urgência).
- Declarar o percentual cobrado como abusivo.
- Fixar um índice menor e mais justo.
- Condenar o plano a **devolver os valores pagos a mais** nos últimos 3 anos, de forma atualizada.

Se você está em São Paulo sofrendo com a asfixia financeira do seu plano de saúde, entre em contato para calcularmos seus valores.
    `
  },
  {
    id: "3",
    slug: "home-care-cobertura-obrigatoria",
    title: "Home Care: O Plano de Saúde é Obrigado a Custear a Internação Domiciliar?",
    excerpt: "Conheça os requisitos e por que muitos idosos e pacientes acamados em São Paulo recorrem à justiça para garantir assistência médica em casa.",
    date: "Acesso em " + new Date().toLocaleDateString('pt-BR'),
    author: "Dr. Alfeu Cicarelli",
    tag: "Home Care",
    content: `
## O Direito ao Home Care (Internação Domiciliar)

O tratamento domiciliar (home care) traz conforto ao paciente acamado, reduz os riscos de infecção hospitalar e mantém a proximidade com a família. No entanto, é recorrente a recusa dos planos de saúde em fornecer a equipe multidisciplinar necessária para a residência, usando a antiga desculpa de ser uma "exclusão contratual".

### A Súmula 90 do TJSP
Mais uma vez, o Tribunal de Justiça de São Paulo protege o consumidor: *Súmula 90: Havendo expressa indicação médica para a utilização dos serviços de "home care", revela-se abusiva a cláusula de exclusão inserida na avença, que não pode prevalecer.*

O que isso significa? Significa que **se o seu plano oferece internação hospitalar, ele não pode negar a internação domiciliar caso seja a escolha médica.**

### Os Requisitos para a Ação
1. **Prescrição Médica Detalhada**: O médico que acompanha o paciente (seja particular ou do próprio plano) deve fazer um relatório atestando a necessidade da internação em domicílio, destacando plantões de enfermagem, fonoterapia, fisioterapia e afins.
2. **Estabilidade Clínica**: O paciente precisa ter indicação para continuar o tratamento agudo fora do hospital.

Se a operadora negou sob a justificativa de fornecer apenas *cuidador*, saiba que enfermagem domiciliar e *home care* são coberturas judicializadas frequentemente e com extremo êxito. Fale conosco para proteger o seu ente querido.
    `
  }
];

export const getPostBySlug = (slug: string) => blogPosts.find(p => p.slug === slug);
