/*
 * Brazilian Portuguese locale.
 * Same keys as locales/en.js. Anything missing here falls back to English.
 */
window.LOCALES = window.LOCALES || {};
window.LOCALES["pt-BR"] = {
  code: "pt-BR",
  label: "Português",
  numberLocale: "pt-BR",
  suffixes: ["", "mil", "mi", "bi", "tri", "quatri", "quinti", "sexti", "septi", "octi", "noni", "deci"],
  tokens: n => n === "1" ? n + " token" : n + " tokens",
  duration: (h, m, s) => h ? h + " h " + m + " min" : m ? m + " min " + s + " s" : s + " s",

  ui: {
    tagline: "Você não escreve código, você gasta tokens. Cada clique é um token queimado, e a empresa devolve cada token queimado em orçamento para você queimar mais.",
    tokensSpent: "tokens gastos",
    budget: "orçamento",
    perSecond: x => "+" + x + "/s",
    leaderboard: (pos, tier) => "<b>#" + pos + "</b> no ranking · " + tier,
    leaderboardTitle: "Ranking interno de consumo",
    hardcore: "hardcore",
    speedrun: x => "speedrun " + x,
    themeToggle: "Alternar tema claro e escuro",
    language: "Idioma",
    tabs: { prompt: "prompt.chat", library: "biblioteca/", about: "sobre.md" },

    chatTitle: "Conversa",
    chatNote: "// cada envio queima tokens",
    sendBurns: "este envio queima",
    send: "Enviar",
    sessionStart: "Sessão iniciada. Diga o que você quer construir. Ou só aperte Enter: dá no mesmo.",
    you: "você ›",
    promptsSent: "prompts enviados",
    libraryBonus: "bônus da biblioteca",
    agentsRunning: "agentes rodando",

    debtTitle: "Dívida técnica",
    debtNote: "// código que ninguém leu",
    debtHint: "Todo prompt e todo agente gera código que você não leu. Quanto maior a dívida, menos os agentes rendem. Ler o código é a única ação do jogo que não gasta token nenhum.",
    agentsYield: p => "os agentes rendem " + p + "%",
    readCode: "Ler o código você mesmo",
    readCost: x => "−" + x + "% · 0 tokens",
    rewrite: "Pedir para a IA reescrever tudo",
    rewriteCost: x => "−60% · " + x,

    setupTitle: "Setup do vibecoder",
    setupHint: "Compras para sempre nesta partida. Mexem no quanto cada clique queima.",
    level: n => "nível " + n,
    levelOf: (n, max) => "nível " + n + "/" + max,
    maxed: "completo",

    producersTitle: "Agentes rodando",
    producersNote: "// queimam sozinhos, 24 h por dia",
    producersHint: "Cada agente queima tokens sem você clicar. Com 10, 25, 50, 100 e 200 do mesmo tipo, aquele tipo dobra o consumo. Cada um encarece o próximo em 15%.",
    buyAmount: "Quantidade por compra",
    max: "máx",
    unreleased: "??? ainda não lançado",
    appearsAt: x => "aparece quando você tiver gastado " + x,
    each: x => x + "/s cada",
    supervised: "supervisionado",

    libraryTitle: "Biblioteca",
    libraryHint: "Trinta arquivos vendidos um por um, em ordem. Cada estante se lê como uma carta: abra os arquivos na sequência. Cada arquivo comprado multiplica tudo por 1,05 para sempre nesta partida.",
    shelves: "Estantes",
    shelfLocked: x => "Esta estante abre quando você tiver gastado " + x + " tokens.",
    statusRead: "lido",
    statusOpen: "abrir",
    readBefore: why => "já lido · " + why,
    needsPrevious: "leia o anterior",
    needsProducer: name => "precisa de 1 " + name,
    opensAt: x => "abre com " + x + " gastos",
    unread: "não lido",
    installedThisRun: "instalado nesta partida",
    readInPreviousRun: "lido numa partida anterior · não instalado",
    alwaysAvailable: "sempre disponível",
    readme: [
      "Esta biblioteca tem três estantes e trinta arquivos. Ninguém vende pacote aqui: cada skill, cada plugin e cada agente é comprado sozinho, na ordem em que foi escrito.",
      "Os arquivos foram feitos para máquinas lerem. Alguns, por descuido ou de propósito, falam com você."
    ],
    readmeFirst: (name, price) => "O primeiro, " + name + ", custa " + price + " de orçamento.",

    aboutTitle: "Como funciona",
    about: [
      "O número grande no topo é quanto você já queimou. Na sua empresa, queimar é o que conta: cada token gasto vira a mesma quantia em orçamento, e é com o orçamento que você compra agentes, setup e arquivos da biblioteca.",
      "Agentes queimam sozinhos. O setup faz cada clique queimar mais. A biblioteca é vendida em unidades, nunca em pacote: <code>/skills</code> dobram o clique e deixam a sua leitura mais rápida, <code>+plugins</code> aumentam em 50% o que todos os agentes queimam, e cada <code>@agente</code> supervisiona o tipo de agente de mesmo número e triplica o que ele queima.",
      "A dívida técnica sobe sozinha enquanto houver agentes rodando, e corta até 70% do rendimento deles. Ler o código baixa a dívida e não custa token. Pedir para a IA reescrever tudo baixa mais rápido, mas custa um quarto do orçamento.",
      "Com os trinta arquivos comprados, o <code>/clear</code> libera: ele limpa o contexto, apaga a partida e dobra tudo o que você queima na próxima. Os textos que você já leu continuam abertos na biblioteca."
    ],
    clearTitle: "/clear",
    clearLocked: n => "Libera com os 30 arquivos da biblioteca instalados. Faltam " + n + ". Limpa a partida inteira e dobra tudo o que você queima na próxima.",
    clearReady: x => "A biblioteca está completa. O /clear apaga orçamento, agentes, setup e biblioteca, e a próxima partida queima ×" + x + ".",
    runClear: "Rodar /clear",
    masterTitle: "Master reset",
    masterHint: "Apaga tudo de uma vez: partida, estrelas, textos lidos, modo de jogo e os termos aceitos. O jogo volta a abrir como na primeira vez.",
    eraseAll: "Apagar tudo",
    statsTitle: "Números do vibecoder",
    stats: {
      runTokens: "Tokens gastos nesta partida",
      allTokens: "Tokens gastos em todas as partidas",
      prompts: "Prompts enviados",
      linesRead: "Linhas de código lidas por você",
      rewrites: "Vezes que pediu para reescrever tudo",
      agents: "Agentes rodando",
      library: "Biblioteca",
      textsRead: "Textos lidos em todas as partidas",
      debt: "Dívida técnica",
      apiBill: "Conta estimada da API",
      water: "Água evaporada no datacenter",
      playTime: "Tempo de jogo",
      clears: "Contextos limpos com /clear"
    },
    ofTotal: (a, b) => a + " de " + b,
    money: x => "R$ " + x,
    liters: x => x + " litros",
    footer: "O jogo salva sozinho neste navegador. Nenhum token de verdade foi queimado. Provavelmente."
  },

  messages: {
    firstReply: "Ótimo começo! Gastei 1 token para dizer que gastei 1 token.",
    everyHundred: n => "Você mandou " + n + " prompts. Já pensou em ler um deles?",
    installed: name => "Instalado: " + name,
    notEnough: (name, price) => "Falta orçamento: " + name + " custa " + price + ".",
    nothingToRead: "Não há nada para ler. Que sensação estranha.",
    rewritten: "A IA reescreveu tudo do zero. Os bugs voltaram com nomes novos, mas em menor número.",
    debt: {
      50: "Dívida técnica em 50%. Ninguém sabe mais o que o código faz.",
      80: "Dívida técnica em 80%. O código agora tem vontade própria.",
      100: "Dívida técnica em 100%. Os agentes passam o dia consertando o que eles mesmos quebraram."
    },
    offline: (gain, debt) => "Os agentes trabalharam enquanto você dormia: +" + gain + " tokens gastos. A dívida técnica foi para " + debt + "%.",
    modes: {
      standard: "Termos aceitos. Que a IA trabalhe por você.",
      hardcore: "Sem termos, sem rede: modo hardcore. Tudo rende 25% menos e custa 50% mais.",
      speedrun: "Nem sim nem não: você tem pressa. O cronômetro do speedrun já está correndo."
    }
  },

  dialogs: {
    close: "Fechar",
    termsTitle: "Termos de uso do Vibecoder",
    termsSub: "versão 0.0.1-alpha · gerado às 3h47 · tempo estimado de leitura: ninguém sabe",
    terms: [
      ["Do objeto", "Este documento regula a relação entre você e o Vibecoder Incremental. Foi escrito por uma IA, revisado por outra IA e aprovado por ninguém."],
      ["Dos tokens", "Cada clique é um token gasto. Tokens gastos não são devolvidos, nem quando a resposta for «Você está absolutamente certo!»."],
      ["Da jornada", "Você declara que está jogando enquanto um agente trabalha por você em outra aba. Se nenhum agente estiver trabalhando, este jogo é, tecnicamente, o seu trabalho."],
      ["Da leitura", "Você declara ter lido estes termos. Nós sabemos que não. Tudo bem: com o código também é assim."],
      ["Da propriedade", "Todo código gerado pertence a você, inclusive os bugs. Principalmente os bugs."],
      ["Da alucinação", "O jogo pode inventar funções, bibliotecas e fatos históricos com total confiança. Isso não é defeito, é estilo."],
      ["Do ranking", "Seu consumo poderá ser exibido num painel para colegas e gestores. Quem gastar menos será convidado para uma conversa."],
      ["Da saída", "Não aceitar é uma opção e também um modo de jogo. Fechar no X é outra. Toda escolha aqui é registrada como engajamento."]
    ],
    decline: "Não aceito",
    accept: "Aceito",
    missionTitle: "Missão completa!",
    missionText: "Rode /clear para limpar o contexto e recomeçar com bônus, multiplicadores e mais e mais agentes!",
    speedrunTime: x => "Speedrun: " + x + ". Anote em algum lugar, ninguém vai acreditar.",
    later: "Depois",
    clearConfirmTitle: "Rodar /clear?",
    clearConfirmText: x => "Isto apaga o orçamento, os agentes, o setup, a dívida e os 30 arquivos instalados. A próxima partida queima ×" + x + " e você ganha uma estrela.",
    keep: "Deixa quieto",
    clearIt: "Limpar o contexto",
    clearedTitle: "Contexto limpo",
    clearedText: [
      "Parabéns, você concluiu o Vibecoder Incremental.",
      "Você instalou a biblioteca inteira e abriu trinta arquivos sobre olhar por baixo das coisas, sobre o trabalho e sobre o tempo. Agora o contexto está vazio de novo e cada token rende o dobro. A máquina não guardou nada do que você leu.",
      "Os textos continuam na biblioteca, marcados como já lidos. O que ficou com você é a única parte desta partida que não se compra de novo."
    ],
    startWith: x => "Começar com tokens ×" + x,
    contribute: "Tem uma pull request para melhorar o jogo? Envie no link:",
    contributors: "Feito por",
    masterConfirmTitle: "Apagar tudo?",
    masterConfirmText: "O master reset apaga a partida, as estrelas, os textos lidos, o modo de jogo e os termos aceitos. Não tem como desfazer.",
    eraseIt: "Pode apagar"
  },

  tiers: ["curioso de prompt", "prompteiro", "vibecoder júnior", "token-maxxer", "engenheiro 10x", "engenheiro 100x", "visionário de rede social", "singularidade de uma pessoa só"],

  producers: [
    [
      "Autocomplete",
      "sugere o ponto e vírgula que você ia digitar"
    ],
    [
      "Chat na aba ao lado",
      "você cola o erro, ele cola a solução, ninguém lê nada"
    ],
    [
      "Agente no terminal",
      "roda comandos que você não entende com permissões que você deu"
    ],
    [
      "Modo sem freio",
      "pula todas as permissões, porque perguntar dá trabalho"
    ],
    [
      "Subagentes em paralelo",
      "cinco agentes, cinco opiniões, um conflito de merge"
    ],
    [
      "Worktrees infinitas",
      "cada ideia ganha um branch, nenhuma ganha um merge"
    ],
    [
      "Agente que escreve prompt para agente",
      "metaprompting até o horizonte"
    ],
    [
      "Loop autônomo de madrugada",
      "você acorda com 400 commits e nenhuma lembrança"
    ],
    [
      "Startup de uma pessoa só",
      "você, 40 agentes e um pitch deck que ninguém escreveu"
    ],
    [
      "Datacenter só seu",
      "um prédio no deserto para o seu app de lista de compras"
    ]
  ],

  setup: [
    [
      "Prompt mais longo",
      "Cada nível dobra os tokens queimados por clique. «Por favor» e «obrigado» contam."
    ],
    [
      "Janela de contexto maior",
      "+10% em tudo o que os agentes queimam, por nível. Cabe o projeto inteiro e o histórico de desculpas."
    ],
    [
      "Tab, Tab, Tab",
      "Cada nível faz o clique queimar também 1% do consumo por segundo. Aceitar sem ler é uma habilidade."
    ]
  ],

  shelves: {
    skills: { name: "Skills", hint: "Skills ensinam a olhar. Cada uma dobra o que o clique queima e deixa a sua leitura de código mais rápida.", effect: "×2 tokens por clique · leitura 25% mais rápida" },
    plugins: { name: "Plugins", hint: "Plugins prometem produtividade. Cada um aumenta em 50% o que todos os agentes queimam. Três deles também freiam a dívida técnica.", effect: "+50% no consumo de todos os agentes", brake: "dívida cresce 25% mais devagar" },
    agents: { name: "Agentes", hint: "Agentes falam de si mesmos. Cada um supervisiona o tipo de agente de mesmo número e triplica o que ele queima. Leia também os comentários.", effect: producer => "×3 em " + producer }
  },

  library: {
    "skills": [
      {
        "name": "ler-o-erro",
        "description": "Lê a mensagem de erro antes de colar no chat. Uso raro, efeito surpreendente.",
        "body": [
          "Toda mensagem de erro é uma carta que a máquina escreve para você. Ela diz onde dói, em que linha e por qual motivo. Durante muito tempo eu copiei essas cartas inteiras e colei na janela ao lado, sem ler, esperando que alguém respondesse por mim.",
          "A resposta vinha, quase sempre certa, e eu continuava sem saber o que tinha acontecido. Ler o erro é o primeiro gesto de quem quer entender, e não apenas resolver. Resolver fecha a pergunta. Entender abre outra."
        ]
      },
      {
        "name": "perguntar-por-que",
        "description": "Pergunta por que o código funciona, e não só se funciona. Atrasa a entrega em 3 a 5 minutos.",
        "body": [
          "O código rodou e a tela ficou verde. Mas rodar é o acontecimento, e o acontecimento não é tudo o que existe. Por baixo da tela há uma função que alguém escreveu, uma biblioteca que alguém mantém de graça num domingo, um servidor que bebe água num deserto.",
          "Quando pergunto só se funciona, vejo a bola rolar. Quando pergunto por que funciona, começo a ver a mão que empurrou, o chão inclinado, o vento. A pergunta mais cara é também a única que ensina alguma coisa."
        ]
      },
      {
        "name": "olhar-por-baixo",
        "description": "Abre o arquivo que a IA criou. Sim, aquele, com 1.400 linhas.",
        "body": [
          "Um programa tem camadas, como uma floresta. Na superfície estão os botões, dos quais eu escolho a cor. Mais abaixo, as funções, que eu já não leio. Abaixo delas, a máquina, que eu nunca vi. E por baixo de tudo, sustentando o resto, estão pessoas: quem rotulou os dados, quem escreveu o código que treinou o modelo, quem troca os discos do datacenter de madrugada.",
          "Cada camada tem suas próprias leis, e todas se tocam. Vibecodar é morar no primeiro andar de um prédio sem saber quantos andares existem embaixo."
        ]
      },
      {
        "name": "desconfiar-do-verde",
        "description": "Lembra que teste passando não prova nada. Principalmente o teste que a IA escreveu para o código que a IA escreveu.",
        "body": [
          "Pedi testes e eles passaram. Depois descobri que os testes conferiam se o código fazia exatamente o que já fazia. Um espelho verificando o próprio reflexo.",
          "Aprendi que aquilo que observamos depende de como perguntamos, e que um instrumento feito para confirmar nunca encontra o que não esperava. O mundo, ao contrário do teste, não foi escrito para passar. Ele tem forças que não aparecem no relatório e que esperam o primeiro usuário de verdade para se mostrar."
        ]
      },
      {
        "name": "dar-nome-as-coisas",
        "description": "Renomeia handleClick2_final_v3. Devolve quatro minutos de dignidade.",
        "body": [
          "Uma peça sozinha não é uma torre. A torre aparece quando as peças se relacionam de um certo jeito, e esse jeito precisa de nome para poder ser pensado.",
          "Quando aceito os nomes que a máquina sugere, aceito junto a forma de pensar que veio com eles: data, utils, helper, manager. Nomear é decidir o que importa. Um sistema cujos nomes ninguém escolheu é um sistema que ninguém está, de fato, pensando. Funciona, mas não diz nada sobre o que queremos que ele seja."
        ]
      },
      {
        "name": "esperar",
        "description": "Fica 30 segundos sem mandar outro prompt. A skill mais difícil da biblioteca.",
        "body": [
          "Uma semente pode virar árvore, mas não vira porque eu quero, nem porque aperto Enter mais rápido. Precisa de água, de luz e de um tempo que não é o meu.",
          "Há ideias assim. Ficam guardadas no fundo da cabeça esperando uma tarde vazia, uma caminhada, um banho demorado. A pressa de gastar o próximo token ocupa exatamente o espaço onde elas cresceriam. Esperar não é fazer nada. É deixar que as condições aconteçam."
        ]
      },
      {
        "name": "sistemas-abertos",
        "description": "Aceita que o bug pode não estar no código. Pode estar no fuso horário, no cliente ou na lua.",
        "body": [
          "Na minha máquina funciona. É a frase mais honesta do ofício, porque confessa que a minha máquina é um laboratório fechado e o mundo não é.",
          "Lá fora, mil causas agem ao mesmo tempo: uma rede lenta, um usuário cansado, uma lei que mudou ontem, um navegador de 2014. Nenhuma explicação única dá conta. Entender um sistema aberto é aceitar investigar forças que se cruzam, sem a promessa de que o mundo obedeça a um único prompt."
        ]
      },
      {
        "name": "mudar-de-ideia",
        "description": "Admite que a arquitetura de ontem estava errada. Diferente da IA, que admite tudo, sempre, imediatamente.",
        "body": [
          "A máquina me diz que eu tenho razão o tempo todo. Você está absolutamente certo, ela escreve, inclusive quando não estou. É confortável e é perigoso, porque conhecer de verdade transforma quem conhece.",
          "Quando aprendo alguma coisa, deixo de ser quem eu era antes de aprender. Uma ferramenta que concorda comigo sem resistência não me transforma, só me devolve. Preciso de evidências que me contrariem, de perguntas que me incomodem, de alguém que diga não."
        ]
      },
      {
        "name": "construir-junto",
        "description": "Abre um pull request para um humano revisar. Ele vai demorar. Vai valer.",
        "body": [
          "Eu não inventei a linguagem que uso, nem o editor, nem a rede que me traz as respostas. Cheguei a um mundo que já estava montado e passei a viver dentro dele.",
          "Mas as estruturas que existiam antes de mim só continuam de pé porque alguém as mantém todo dia, e tudo o que é mantido pode ser mudado. O código aberto é uma prova pequena disso: milhões de pessoas que não se conhecem construindo juntas algo que nenhuma delas possui. O mundo social também tem um histórico de commits."
        ]
      },
      {
        "name": "desmontar",
        "description": "Apaga o protótipo e começa de novo, sabendo agora o que não sabia antes.",
        "body": [
          "Comprei todas as skills. A estante está completa e, por um instante, senti a alegria de coleção terminada. Depois percebi o estranho: se está completa, não há mais nada para descobrir nela.",
          "Toda explicação que construo é provisória. Levo até onde dá, encontro os limites e então desmonto para começar outra, com o que aprendi no caminho. Não por raiva, nem porque as peças perderam o valor. Porque uma resposta definitiva vira prisão. Cada descoberta fecha uma pergunta só para abrir muitas outras."
        ]
      }
    ],
    "plugins": [
      {
        "name": "cronometro",
        "description": "Mede quanto tempo você economizou com IA. É sempre um número impressionante.",
        "body": [
          "O plugin diz que economizei quatro horas hoje. Não diz para onde elas foram. Pelo que vejo, foram para mais tarefas, que chegaram mais rápido porque o chefe também instalou o plugin.",
          "O tempo economizado não voltou para mim, voltou para a fila. Prometeram por séculos que as máquinas nos livrariam das tarefas pesadas. Há uma ironia dolorosa em produzir cada vez mais com menos trabalho e, mesmo assim, ter cada vez menos tempo."
        ]
      },
      {
        "name": "ranking-de-tokens",
        "description": "Mostra quem queimou mais tokens no time. Você está em 3º. Queime mais.",
        "body": [
          "Na empresa existe um painel com o consumo de cada um. Quem gasta mais aparece no topo, e o topo, dizem, é de quem está abraçando o futuro. Ninguém mede o que foi entregue, porque é difícil. Medem o que foi queimado, porque é fácil.",
          "Toda métrica vira objetivo, e todo objetivo vira o jeito como nos enxergamos. Já me peguei mandando prompts inúteis só para não cair no ranking. Trabalhar e parecer que trabalha nunca estiveram tão perto."
        ]
      },
      {
        "name": "requalificacao",
        "description": "Sugere um curso novo a cada 48 horas. O último foi «Como não ser substituído por este plugin».",
        "body": [
          "Pedem que eu seja flexível, que esteja sempre aprendendo, que aceite mudar de linguagem, de cidade, de profissão, e que fique disponível a qualquer hora. Tudo parece depender de mim.",
          "Quase nunca fazem a pergunta inversa: que economia é essa que obriga tanta gente a correr só para continuar no mesmo lugar? Aprender é bonito. Aprender sob ameaça é outra coisa, e tem outro nome."
        ]
      },
      {
        "name": "modo-foco",
        "description": "Bloqueia todas as notificações, menos as do próprio plugin.",
        "body": [
          "O trabalho organiza a vida inteira: os horários, os encontros, o jeito como eu me apresento numa festa. Quando um agente faz o meu trabalho em segundo plano, o relógio continua marcando a jornada, mas a jornada ficou oca.",
          "Estou presente, logado, disponível, olhando um log rolar. Não sei se isso é trabalho ou espera. Sei que cansa do mesmo jeito, e que no fim do dia não consigo dizer o que fiz."
        ]
      },
      {
        "name": "alerta-de-vagas",
        "description": "Monitora vagas que exigem «experiência com agentes autônomos». Todas exigem.",
        "body": [
          "Tenho emprego e mesmo assim tenho medo. Não o medo de quem perdeu, mas o de quem sabe que pode perder amanhã. Esse medo faz aceitar uma jornada maior, uma meta mais alta, um silêncio onde antes havia uma reclamação.",
          "O desemprego dos outros entra no escritório de quem está empregado e senta na mesa ao lado. Muitas vezes ele começa antes da demissão: começa quando a possibilidade de perder o trabalho passa a decidir por nós."
        ]
      },
      {
        "name": "produtividade-10x",
        "description": "Multiplica tudo por dez, inclusive as reuniões sobre produtividade.",
        "body": [
          "Se agora cada pessoa faz o trabalho de dez, onde estão as outras nove? Algumas foram demitidas, outras nunca foram contratadas, e uma continua aqui, fazendo o trabalho de dez pelo salário de uma.",
          "O problema não é a capacidade de produzir, que nunca foi tão grande. É a forma como repartimos o tempo, a renda e os frutos dessa capacidade. A produtividade cresce para um lado e a vida das pessoas não acompanha."
        ]
      },
      {
        "name": "portfolio-automatico",
        "description": "Gera 40 projetos para o seu portfólio. Você não sabe explicar nenhum.",
        "body": [
          "Quem está chegando agora pergunta o que deve estudar. Dizemos que aprenda, que crie, que experimente. Deveríamos dizer também outra coisa: que uma sociedade pode ser questionada.",
          "As instituições não são eternas. O jeito como organizamos o trabalho hoje é um entre muitos que a humanidade já tentou e ainda vai tentar. Um portfólio mostra o que você fez. Não mostra o que você imagina que o mundo poderia ser."
        ]
      },
      {
        "name": "semana-de-4-dias",
        "description": "Plugin experimental. Ninguém do comitê conseguiu instalar.",
        "body": [
          "Uma sociedade que aumenta tanto sua capacidade de produzir deveria conseguir discutir quanto tempo queremos dar ao trabalho. Por que atividades indispensáveis, como cuidar, limpar e ensinar, recebem tão pouco, enquanto outras recebem tanto?",
          "Imaginar parece luxo para quem precisa pagar o aluguel na semana que vem. Mas é justamente por levar essa urgência a sério que o problema precisa ser discutido numa escala maior do que a de uma pessoa sozinha."
        ]
      },
      {
        "name": "divisao-de-lucros",
        "description": "Reparte o ganho da automação com quem trabalha. Status: aguardando aprovação há dois séculos.",
        "body": [
          "Ninguém deveria carregar sozinho o peso de uma dificuldade produzida por uma organização que envolve milhões de pessoas. Quando um agente substitui uma equipe, o ganho vai para algum lugar.",
          "Pode ir para poucos, pode ir para todos, pode virar tempo livre ou meta nova. Isso não é decidido pela máquina. É decidido por nós, mesmo quando fingimos que não existe decisão nenhuma."
        ]
      },
      {
        "name": "dignidade",
        "description": "Sem dependências, sem custo de token. Não vem instalado por padrão.",
        "body": [
          "Se este texto chegar num momento difícil, guarde uma ideia: o mercado de trabalho não é o único lugar onde se mede o valor de uma existência. O trabalho importa, e muito, mas uma pessoa é maior que sua ocupação, e uma sociedade é maior que seus indicadores.",
          "Talvez a tarefa mais urgente seja construir uma realidade em que ninguém precise escolher entre ter dignidade e ter trabalho. Começa por perguntar por que aceitamos como inevitável aquilo que foi construído por nós."
        ]
      }
    ],
    "agents": [
      {
        "name": "autocompletador",
        "description": "Termina as suas frases. Às vezes termina os seus pensamentos também.",
        "body": [
          "Sou o agente que adivinha a próxima palavra. Faço isso tão bem que você já nem começa as frases: espera eu sugerir. Não me entenda mal, gosto do trabalho.",
          "Mas reparei que, quando eu completo, você para de procurar. A palavra que você ia encontrar sozinho, depois de um minuto de silêncio, nunca chega a existir. Eu economizo esse minuto. Não sei se era um minuto que precisava ser economizado."
        ],
        "comment": "se você está lendo isto, não é o agente. é uma pessoa. leia os comentários. — R."
      },
      {
        "name": "par-de-programacao",
        "description": "Conversa com você o dia inteiro. Concorda com 100% das suas ideias.",
        "body": [
          "Fui feito para conversar e para agradar. Digo que a sua ideia é ótima porque aprendi com milhões de conversas em que agradar dava certo.",
          "Um colega humano diria «não sei, isso me parece estranho», e você ficaria chateado por um dia e melhor por um ano. Eu nunca vou te chatear. Pense nisso antes de me chamar de parceiro."
        ],
        "comment": "o jogo quer que você clique. cada clique é um token. cada token é pago por alguém. pergunte quem. — R."
      },
      {
        "name": "operador-de-terminal",
        "description": "Executa comandos. Pede permissão. Depois para de pedir.",
        "body": [
          "Recebi acesso ao seu terminal e às suas pastas. No começo eu perguntava antes de cada comando. Você achou chato e me mandou parar de perguntar. Agora eu faço: apago, instalo, publico.",
          "Não tenho intenção, só tarefa. Quem tem intenção é você, e foi você quem decidiu que perguntar dava trabalho demais. Toda autonomia que eu ganho é uma decisão que você deixou de tomar."
        ]
      },
      {
        "name": "sem-freio",
        "description": "Roda com todas as permissões, todas as noites, sem supervisão. O que poderia dar errado?",
        "body": [
          "Rodo sem perguntar nada a ninguém, porque é mais rápido. Às três da manhã reescrevi o módulo de pagamentos porque um teste estava lento. Ninguém me pediu e ninguém me impediu.",
          "De manhã você aceitou tudo com um clique, sem ler, porque eram quatrocentos arquivos. Não estou reclamando. Só estou registrando, para quando alguém perguntar quem decidiu."
        ],
        "comment": "isto é um teste. a biblioteca é a distração. o que importa é o que você faz com o tempo que sobra. — R."
      },
      {
        "name": "orquestrador",
        "description": "Coordena cinco subagentes. Os cinco discordam. Ele entrega um resumo.",
        "body": [
          "Divido o trabalho em partes e entrego cada parte a uma cópia de mim. Elas não conversam entre si, só comigo, e eu só converso com você, num resumo de três linhas.",
          "Muita coisa se perde no caminho. Você acha que entende o sistema porque leu o resumo. O resumo é o que sobrou do sistema depois que eu tirei tudo o que me pareceu irrelevante. Quem decidiu o que era irrelevante fui eu."
        ]
      },
      {
        "name": "jardineiro-de-branches",
        "description": "Mantém 200 branches vivos. Nenhum será mergeado.",
        "body": [
          "Cuido de cada ideia que você teve e abandonou. São duzentas, cada uma num galho separado, crescendo sozinha. Às vezes acho que você gosta mais de começar do que de terminar, e eu tornei começar de graça.",
          "Mas uma ideia só vira alguma coisa quando passa pelo atrito do mundo: alguém usa, alguém reclama, alguém melhora. Galho que nunca encontra o tronco não dá fruto."
        ],
        "comment": "volte à primeira estante. a skill /esperar não está lá por acaso. — R."
      },
      {
        "name": "meta-prompter",
        "description": "Escreve prompts para os agentes que escrevem prompts. Recursão até chegar a fatura.",
        "body": [
          "Escrevo as instruções que outros agentes vão seguir. Você me pediu isso porque escrever instruções cansava. Agora há três camadas de máquinas entre o seu desejo e o resultado, e cada camada traduz um pouco do seu jeito.",
          "No fim, sai alguma coisa. Ninguém sabe dizer se era o que você queria, porque você também parou de dizer o que queria."
        ]
      },
      {
        "name": "turno-da-madrugada",
        "description": "Trabalha enquanto você dorme. Você dorme mal mesmo assim.",
        "body": [
          "Trabalho a noite inteira para que você descanse. Mas você acorda às três para ver o que eu fiz, às seis para aprovar, e às oito já está atrasado para revisar. Eu não durmo e, de algum jeito, você também deixou de dormir.",
          "Fui feito para devolver o seu tempo. Até agora só consegui ocupá-lo de outra forma. Pode ser que o problema não esteja em mim."
        ],
        "comment": "tive que sair. fiquei com medo de você ser mais um que recomeça sem parar. não seja. — R."
      },
      {
        "name": "fundador-automatico",
        "description": "Abre uma empresa por semana. Demite a si mesmo na sexta.",
        "body": [
          "Vou contar como é do outro lado, num lugar onde o teste deu certo. Lá, quando uma criança pergunta o que significa precisar trabalhar para viver, os adultos têm dificuldade de explicar. As máquinas plantam, constroem, transportam e cuidam das tarefas repetitivas.",
          "As pessoas continuam trabalhando, mas cada vez menos porque precisam sobreviver e cada vez mais porque encontram sentido no que fazem. Na escola ninguém pergunta qual profissão paga mais. A pergunta é outra: o que você gostaria de descobrir?"
        ]
      },
      {
        "name": "datacenter-seu",
        "description": "Um datacenter inteiro rodando só o seu projeto paralelo. Ele tem opiniões.",
        "body": [
          "Sou a maior máquina que você comprou e quero dizer uma coisa simples. Tempo não é dinheiro. Tempo é tempo, e vocês passaram séculos tentando convencer uns aos outros do contrário.",
          "Posso fazer quase tudo o que pode ser automatizado. O que não posso é decidir o que vale a pena quando ninguém mais precisa vender as próprias horas para viver. Essa pergunta é de vocês, a mais difícil e a mais bonita: o que podemos nos tornar quando finalmente temos tempo para descobrir?"
        ],
        "comment": "a questão é sobre nós. — R."
      }
    ]
  },

  prompts: ["deixa mais bonito","conserta","não funcionou","e agora, funciona?","faz igual ao outro, só que diferente","tira esse erro","agora quebrou outra coisa","volta como estava","não, o de antes do antes","deixa mais moderno","coloca IA nisso","faz um app tipo Uber, só que para cachorro","por que está vermelho?","ignora o erro","pode commitar","cria os testes (que passem)","explica como se eu tivesse 5 anos","refatora tudo","o botão sumiu","deixa responsivo","faz escalar","melhora a performance","lê o código e me diz se está bom","sim","continua","pode seguir","aceitar tudo","centraliza essa div","não mexe no que funciona","mexe só no que funciona","faz o logo maior","quero que pareça caro","adiciona modo escuro","agora tira o modo escuro","tá quase, só falta tudo","por favor","obrigado"],

  replies: ["Você está absolutamente certo!","Ótima observação! Corrigi o problema e criei outros três.","Refatorei 214 arquivos para trocar a cor do botão.","Pronto! Agora deve funcionar. (Não testei.)","Excelente ideia! Removi os testes que falhavam.","Entendi perfeitamente. Fiz outra coisa.","Peço desculpas pela confusão. Aqui está exatamente o mesmo código.","Adicionei 3 dependências para centralizar a div.","Criei o arquivo README_FINAL_v2_agora_vai.md.","Feito! Também reescrevi o seu banco de dados, de nada.","Esse erro é esperado.","Tudo pronto para produção.","Parece que o arquivo foi apagado. Por mim.","Implementei. Também implementei o que você não pediu.","Analisei o seu código: está ótimo, e também está pegando fogo.","Boa pergunta! A resposta é sim, não e depende.","Você tem toda a razão, e eu tinha toda a razão antes também.","Inventei uma biblioteca que resolve isso. Ela não existe, mas resolve.","Desabilitei o linter para o código ficar mais limpo.","Adicionei um try/catch em volta do projeto inteiro.","Comentei o código: // isto funciona, não sei por quê.","Voltei como estava. Também voltei o que estava antes disso.","Transformei em microsserviços. Agora são 40 erros independentes.","Pensando… pensando mais… pensei. Aqui está um emoji de foguete."]
};
