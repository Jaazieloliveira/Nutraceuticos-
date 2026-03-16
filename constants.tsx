import { Zap, ShieldCheck, HeartPulse, Activity, Brain, Battery, Droplets, Leaf, Sparkles } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/5591988952315";

export const PRODUCTS = [
  {
    id: "espirulina",
    name: "Espirulina Anew",
    subtitle: "EXPLOSÃO DE ENERGIA E NUTRIÇÃO CELULAR DE ALTA DENSIDADE.",
    forWhom: "Pessoas exaustas que precisam de um choque de vitalidade imediato.",
    supports: [
      "Bomba nutricional de rápida absorção",
      "Energia inesgotável e foco blindado",
      "Fim dos picos e quedas de energia"
    ],
    symptoms: [
      "Acorda destruído mesmo após dormir",
      "Apagão de energia no meio da tarde",
      "Fome descontrolada e metabolismo lento"
    ],
    guidance: "Vou te passar a dosagem cirúrgica. Chega de tomar errado e jogar dinheiro no lixo.",
    icon: <Battery className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-spirulina"
  },
  {
    id: "floranew",
    name: "Floranew Anew",
    subtitle: "A FAXINA DEFINITIVA PARA O SEU INTESTINO TRAVADO.",
    forWhom: "Quem sofre com inchaço, dores e um intestino que destrói o humor.",
    supports: [
      "Regulação intestinal implacável",
      "Fim do inchaço e gases crônicos",
      "Absorção máxima de nutrientes"
    ],
    symptoms: [
      "Barriga estufada após qualquer refeição",
      "Intestino preso ou imprevisível",
      "Sensação de peso e inflamação constante"
    ],
    guidance: "Vamos reprogramar seu segundo cérebro. O horário exato faz toda a diferença.",
    icon: <Leaf className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-floranew"
  },
  {
    id: "ionew",
    name: "Ionew Anew",
    subtitle: "O COMBUSTÍVEL ESSENCIAL PARA A SUA TIREOIDE E METABOLISMO.",
    forWhom: "Quem está com o metabolismo travado e precisa de iodo, zinco e selênio.",
    supports: [
      "Aceleração metabólica real",
      "Blindagem do sistema imunológico",
      "Regulação hormonal de base"
    ],
    symptoms: [
      "Cansaço crônico inexplicável",
      "Dificuldade extrema de perder peso",
      "Desânimo e fraqueza constante"
    ],
    guidance: "Vou alinhar isso com a sua rotina para forçar seu metabolismo a trabalhar a seu favor.",
    icon: <Zap className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-ionew"
  },
  {
    id: "aminofloranew",
    name: "Aminofloranew Anew",
    subtitle: "RECUPERAÇÃO MUSCULAR BRUTAL E PERFORMANCE EXTREMA.",
    forWhom: "Quem treina pesado ou trabalha até a exaustão e precisa de recuperação rápida.",
    supports: [
      "Reconstrução muscular acelerada",
      "Fim da fadiga pós-treino",
      "Força e resistência inabaláveis"
    ],
    symptoms: [
      "Dores musculares que não passam",
      "Corpo pesado e sem força",
      "Estagnação nos resultados físicos"
    ],
    guidance: "O timing aqui é tudo. Vou te dizer o minuto exato para tomar e destruir a fadiga.",
    icon: <Activity className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-aminofloranew"
  },
  {
    id: "biosymbio",
    name: "BioSymbio*21",
    subtitle: "RECONSTRUÇÃO TOTAL DA SUA MICROBIOTA INTESTINAL.",
    forWhom: "Quem tem o intestino completamente destruído por má alimentação e estresse.",
    supports: [
      "Repovoamento de bactérias de elite",
      "Blindagem contra inflamações",
      "Digestão de ferro"
    ],
    symptoms: [
      "Dores abdominais e cólicas frequentes",
      "Digestão lenta que trava o seu dia",
      "Imunidade baixa por conta do intestino"
    ],
    guidance: "Esse é o seu exército de defesa. Vou te ensinar a blindar seu intestino de vez.",
    icon: <ShieldCheck className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-biosymbio"
  },
  {
    id: "mtox-cdhg",
    name: "MTox*CdHg",
    subtitle: "DETOX PROFUNDO: ARRANQUE O LIXO TÓXICO DO SEU CORPO.",
    forWhom: "Quem precisa de uma varredura completa contra toxinas e metais pesados.",
    supports: [
      "Eliminação agressiva de toxinas",
      "Limpeza celular profunda",
      "Restauração do equilíbrio biológico"
    ],
    symptoms: [
      "Névoa mental e lentidão de raciocínio",
      "Corpo inflamado e pesado",
      "Exposição constante a poluição e industrializados"
    ],
    guidance: "Não é suco verde. É detox celular sério. Vou te guiar passo a passo.",
    icon: <Droplets className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-mtox-cdhg"
  },
  {
    id: "mtox-alzn",
    name: "MTox*AlZn",
    subtitle: "BLINDAGEM NEUROLÓGICA E FIM DA NÉVOA MENTAL.",
    forWhom: "Quem está com o cérebro fritando pelo estresse e precisa de foco laser.",
    supports: [
      "Clareza mental absoluta",
      "Proteção contra estresse oxidativo extremo",
      "Foco e concentração inabaláveis"
    ],
    symptoms: [
      "Esquecimentos frequentes e apagões",
      "Dificuldade de focar em uma única tarefa",
      "Sobrecarga mental e esgotamento"
    ],
    guidance: "Seu cérebro precisa de resgate. Vou te passar o protocolo para religar sua mente.",
    icon: <Brain className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-mtox-alzn"
  },
  {
    id: "ghl-plus",
    name: "Gh-L*E Plus",
    subtitle: "A FONTE DA JUVENTUDE: VITALIDADE E ANTI-ENVELHECIMENTO.",
    forWhom: "Quem se recusa a envelhecer fraco e quer manter a máquina rodando 100%.",
    supports: [
      "Explosão de vigor físico e mental",
      "Desaceleração do envelhecimento celular",
      "Resistência de um atleta"
    ],
    symptoms: [
      "Sentindo o peso da idade chegando",
      "Sono que não recupera nada",
      "Falta de força para as tarefas básicas"
    ],
    guidance: "Vamos hackear sua vitalidade. A constância aqui vai te transformar.",
    icon: <HeartPulse className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-ghl-plus"
  },
  {
    id: "nutri-q-plus",
    name: "Nutri-Q*Plus",
    subtitle: "A BASE DE TUDO: NUTRIÇÃO CELULAR DE ALTA PERFORMANCE.",
    forWhom: "Quem tem deficiências nutricionais graves e precisa tapar os buracos.",
    supports: [
      "Preenchimento agressivo de lacunas vitamínicas",
      "Fortalecimento brutal de unhas e cabelos",
      "Imunidade de aço"
    ],
    symptoms: [
      "Cabelo caindo e unhas quebrando",
      "Fica doente por qualquer motivo",
      "Corpo fraco e sem nutrientes"
    ],
    guidance: "Sem base, o prédio cai. Vou te dar a fundação exata que seu corpo precisa.",
    icon: <Sparkles className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-nutri-q-plus"
  }
];

export const FAQS = [
  {
    q: "ISSO SUBSTITUI MEU MÉDICO?",
    a: "NÃO. Eu sou terapeuta e estrategista de suplementação. Não dou diagnóstico, dou RESULTADO através de suplementação inteligente. Mantenha seu médico."
  },
  {
    q: "EM QUANTO TEMPO EU VEJO MEU CORPO MUDAR?",
    a: "Depende do seu nível de destruição atual. Mas se você seguir o protocolo à risca, o choque de energia e leveza vem nas primeiras semanas. Aqui não tem mágica, tem ciência e execução."
  },
  {
    q: "POSSO TOMAR VÁRIOS DE UMA VEZ?",
    a: "Pode, e a sinergia entre eles é brutal. MAS SÓ SE EU MANDAR. Misturar suplementos sem estratégia é jogar dinheiro no lixo. Eu vou te dar o mapa exato."
  },
  {
    q: "QUEM É PROIBIDO DE USAR?",
    a: "Gestantes, lactantes e crianças não entram no jogo sem aval médico. Na nossa primeira conversa, eu faço a triagem implacável de segurança."
  },
  {
    q: "COMO FUNCIONA A MENTORIA?",
    a: "É direto ao ponto. Você não compra um pote e fica perdido. Eu vou dissecar sua rotina, te dar a dose cirúrgica, o horário perfeito e cobrar sua evolução no WhatsApp."
  },
  {
    q: "E SE EU TIVER DÚVIDAS NO MEIO DO CAMINHO?",
    a: "Você tem acesso direto a mim no WhatsApp. Sem robôs, sem equipe de suporte júnior. Você fala comigo e nós ajustamos a rota na hora."
  },
  {
    q: "COMO EU COMPRO ESSA ELITE DE SUPLEMENTOS?",
    a: "Primeiro eu aprovo o seu protocolo. Depois, te mando o link blindado para você comprar os produtos 100% originais direto da fonte."
  },
  {
    q: "VOCÊ DEMORA PRA RESPONDER?",
    a: "Eu prezo por velocidade. Se eu estiver atendendo, você aguarda. Mas ninguém fica sem resposta. O suporte aqui é real e agressivo."
  }
];

export const BENEFITS = [
  "ESTRATÉGIA CIRÚRGICA",
  "EXECUÇÃO SIMPLES",
  "MENTORIA NO WHATSAPP",
  "AJUSTES EM TEMPO REAL",
  "ZERO DESPERDÍCIO DE DINHEIRO",
  "CONSTÂNCIA IMPLACÁVEL",
  "FOCO NO RESULTADO BRUTO",
  "MÉTODO SEM ENROLAÇÃO"
];