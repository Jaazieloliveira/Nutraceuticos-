import { Zap, ShieldCheck, HeartPulse, Activity, Battery, Droplets, Droplet, Leaf, Sparkles } from 'lucide-react';
import React from 'react';

export const WHATSAPP_LINK = "https://wa.me/5591988952315";

export const PRODUCTS = [
  {
    id: "espirulina",
    name: "SPIRULINA Anew",
    subtitle: "DESCONTAMINAÇÃO ORGANICA",
    forWhom: "Nutrição abrangente de proteínas, vitaminas e minerais",
    supports: [
      "Nutrição abrangente de proteínas, vitaminas e minerais",
      "Reequilíbrio nutricional",
      "Fim dos picos e quedas de energia"
    ],
    symptoms: [
      "Acorda destruído mesmo após dormir",
      "Apagão de energia no meio da tarde",
      "Fome descontrolada e obesidade"
    ],
    guidance: "Vou te passar a dosagem cirúrgica. Chega de tomar errado e jogar dinheiro no lixo.",
    icon: <Battery className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-spirulina"
  },
  {
    id: "floranew",
    name: "Floranew Anew",
    subtitle: "PRÉ E PRÓBIOTICO",
    forWhom: "",
    supports: [
      "Regulação intestinal implacável",
      "FORTALECIMENTO DA MICROBIOTA INTESTINAL",
      "HARMONIZAÇÃO INTESTINAL",
      "ENZIMAS DIGESTIVAS"
    ],
    symptoms: [
      "MÁ DIGESTÃO DOS ALIMENTOS",
      "MAL HUMOR E IRRITABILIDADE"
    ],
    guidance: "Vamos reprogramar seu segundo cérebro. O horário exato faz toda a diferença.",
    icon: <Leaf className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-floranew"
  },
  {
    id: "ionew",
    name: "Ionew Anew",
    subtitle: "MINERAL ESSENCIAL PARA A SUA TIREOIDE E METABOLISMO",
    forWhom: "MINERAL ESSENCIAL PARA A SUA TIREOIDE E METABOLISMO",
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
    subtitle: "RECUPERAÇÃO MUSCULAR",
    forWhom: "",
    supports: [
      "Reconstrução muscular acelerada",
      "RECONSTRUÇÃO: OSSOS, MUSCULOS E TENDOES",
      "Fim da fadiga pós-treino",
      "QUALIDADE DE VIDA"
    ],
    symptoms: [
      "Dores musculares que não passam",
      "Corpo pesado e sem força",
      "Estagnação nos resultados físicos",
      "FIM DA SARCOPENIA / MAL DESEMPENHO FISICO"
    ],
    guidance: "O timing aqui é tudo. Vou te dizer o minuto exato para tomar e destruir a fadiga.",
    icon: <Activity className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-aminofloranew"
  },
  {
    id: "biosymbio",
    name: "LINHA BIOSYMBIO",
    subtitle: "ANTI-PARASITARIO",
    forWhom: "ESSENCIAS VIBRACIONAIS QUANTICAS",
    supports: [
      "NEUTRALIZAÇÃO DE BACTERIAS, FUNGOS E PROTOZOARIOS",
      "BioSymbio*1: para vermes e protozoários | BioSymbio*2: para bactérias | BioSymbio*21: para fungos e vírus"
    ],
    symptoms: [
      "Apoio contra parasitas de modo GERAL"
    ],
    guidance: "Esse é o seu exército de defesa. Vou te ensinar a blindar seu intestino de vez.",
    icon: <ShieldCheck className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-biosymbio"
  },
  {
    id: "mtox-cdhg",
    name: "LINHA MTOX",
    subtitle: "NEUTRALIZAÇÃO FREQUENCIAL DE METAIS TOXICOS",
    forWhom: "ESSENCIA VIBRACIONAIS QUANTICAS",
    supports: [
      "Eliminação agressiva de toxinas",
      "NEUTRALIZAÇÃO DE METAIS TOXICO",
      "FACILITA O EMAGRECIMENTO",
      "Restauração do equilíbrio biológico",
      "FACILITA A ABSORÇÃO DE VITAMINAS E MINERAIS"
    ],
    symptoms: [
      "Névoa mental e lentidão de raciocínio",
      "DESARMONIA NOS SISTEMAS PROVOCANDO SINTOMAS",
      "BAIXA IMUNIDADE",
      "SINTOMAS INESPLICAVEIS"
    ],
    guidance: "A Linha MTox age modulando as frequências negativas dos metais tóxicos no organismo. Vou te dar o protocolo certo para cada tipo de metal.",
    icon: <Droplets className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-mtox-cdhg"
  },
  {
    id: "ghl-plus",
    name: "Gh-L*E Plus",
    subtitle: "NEUTRALIZAÇÃO DE RADIAÇÃO E ESTRESSE",
    forWhom: "",
    supports: [
      "Explosão de vigor físico e mental",
      "NEUTRALIZAR A RADIAÇÃO DE CELULAR, WI FI, EXAMES DE IMAGEM...",
      "PROTEGE A MENTE"
    ],
    symptoms: [
      "DORMIR MAIS E MELHOR",
      "MAIS ENERGIA E HUMOR",
      "MELHORA A COGNIÇÃO E ASSIMILAÇÃO"
    ],
    guidance: "Vamos hackear sua vitalidade. A constância aqui vai te transformar.",
    icon: <HeartPulse className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-ghl-plus"
  },
  {
    id: "nutri-q-plus",
    name: "Nutri-Q*Plus",
    subtitle: "ESSENCIA VIBACIONAL QUANTICA",
    forWhom: "",
    supports: [
      "Preenchimento agressivo de lacunas vitamínicas",
      "NEUTRALIZAR AS INTOLERANCIAS ALIMENTAR"
    ],
    symptoms: [
      "Cabelo caindo e unhas quebrando",
      "EVITA DESCONFORTO DE CERTAS INTOLERANCIAS",
      "Fica doente por qualquer motivo",
      "ATUA NA PROTEÇÃO DOS ALIMENTOS, AUXILIANDO NAS SUA LIMPEZA E CONTRIBUINDO PARA QUE SE MANTENHAM SEGUROS E CONSERVADOS POR MAIS TEMPO",
      "Corpo fraco e sem nutrientes"
    ],
    guidance: "Sem base, o prédio cai. Vou te dar a fundação exata que seu corpo precisa.",
    icon: <Sparkles className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-nutri-q-plus"
  },
  {
    id: "acqua",
    name: "ACQUA",
    subtitle: "ÁGUA DE ALTA QUALIDADE E PUREZA",
    forWhom: "Quem busca hidratação de alta performance para potencializar resultados e saúde",
    supports: [
      "HIDRATAÇÃO CELULAR PROFUNDA E EFICIENTE",
      "Água de pureza superior — livre de contaminantes e metais pesados",
      "POTENCIALIZA A AÇÃO DE TODOS OS SUPLEMENTOS DO SEU PROTOCOLO",
      "Equilíbrio mineral natural que seu organismo precisa"
    ],
    symptoms: [
      "Corpo desidratado e sem energia mesmo bebendo água comum",
      "ABSORÇÃO DEFICIENTE DE NUTRIENTES E SUPLEMENTOS",
      "Toxinas e impurezas comprometendo sua saúde silenciosamente",
      "FADIGA, CABEÇA PESADA E BAIXO DESEMPENHO"
    ],
    guidance: "Sem hidratação de qualidade, nenhum suplemento funciona no máximo. A Acqua é a base do seu protocolo — vou te mostrar como ela transforma seus resultados de dentro para fora.",
    icon: <Droplet className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-acqua"
  },
  {
    id: "american-sugar",
    name: "American Sugar",
    subtitle: "ALIMENTO EM PÓ PARA DIETAS DE INGESTÃO CONTROLADA DE AÇÚCARES",
    forWhom: "Quem quer manter dieta equilibrada sem abrir mão do sabor doce",
    supports: [
      "Zero Calorias — sem Glicose, Sacarose, Maltose, Frutose ou Lactose",
      "Ingredientes naturais: Trealose, Taumatina e Cálcio de alga Lithothamnion",
      "NÃO CONTÉM GLÚTEN — sem sabor residual"
    ],
    symptoms: [
      "Quer adoçar sem culpa ou calorias",
      "Intolerância ou restrição a açúcares convencionais",
      "Busca substituir açúcares e adoçantes com sabor real"
    ],
    guidance: "American Sugar é uma revolução — doçura real sem nenhuma caloria. Vou te mostrar como incluir no seu protocolo sem comprometer sua dieta.",
    icon: <Sparkles className="w-6 h-6 text-brand-purple-accent" />,
    imageType: "bottle-american-sugar"
  }
];

export const FAQS = [
  { q: "ISSO SUBSTITUI MEU MÉDICO?", a: "NÃO. Eu sou terapeuta e estrategista de suplementação. Não dou diagnóstico, dou RESULTADO através de suplementação inteligente. Mantenha seu médico." },
  { q: "EM QUANTO TEMPO EU VEJO MEU CORPO MUDAR?", a: "Depende do seu nível de destruição atual. Mas se você seguir o protocolo à risca, o choque de energia e leveza vem nas primeiras semanas. Aqui não tem mágica, tem ciência e execução." },
  { q: "POSSO TOMAR VÁRIOS DE UMA VEZ?", a: "Pode, e a sinergia entre eles é brutal. MAS SÓ SE EU MANDAR. Misturar suplementos sem estratégia é jogar dinheiro no lixo. Eu vou te dar o mapa exato." },
  { q: "QUEM É PROIBIDO DE USAR?", a: "Gestantes, lactantes e crianças não entram no jogo sem aval médico. Na nossa primeira conversa, eu faço a triagem implacável de segurança." },
  { q: "COMO FUNCIONA A MENTORIA?", a: "É direto ao ponto. Você não compra um pote e fica perdido. Eu vou dissecar sua rotina, te dar a dose cirúrgica, o horário perfeito e cobrar sua evolução no WhatsApp." },
  { q: "E SE EU TIVER DÚVIDAS NO MEIO DO CAMINHO?", a: "Você tem acesso direto a mim no WhatsApp. Sem robôs, sem equipe de suporte júnior. Você fala comigo e nós ajustamos a rota na hora." },
  { q: "COMO EU COMPRO ESSA ELITE DE SUPLEMENTOS?", a: "Primeiro eu aprovo o seu protocolo. Depois, te mando o link blindado para você comprar os produtos 100% originais direto da fonte." },
  { q: "VOCÊ DEMORA PRA RESPONDER?", a: "Eu prezo por velocidade. Se eu estiver atendendo, você aguarda. Mas ninguém fica sem resposta. O suporte aqui é real e agressivo." }
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
