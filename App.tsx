import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, Shield, Clock, MessageSquare, ArrowRight, User, Star, ChevronDown, ChevronUp, Battery, Activity, Brain, ShieldCheck } from 'lucide-react';
import { PRODUCTS, FAQS, BENEFITS, WHATSAPP_LINK } from './constants';
import { Button } from './components/Button';
import { ProductImage } from './components/ProductImage';
import { RevealOnScroll } from './components/RevealOnScroll';
import { heroVideoB64 } from './heroVideo';

// --- COMPONENTS ---

// 0. Header
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/90 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-heading font-bold text-sm md:text-base tracking-tight text-gray-100">
          Terapia Quântica <span className="text-brand-green">•</span> Saúde do Corpo e da Mente
        </div>
        <Button text="WhatsApp" variant="outline" />
      </div>
    </header>
  );
};

// 1. Hero
const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center relative z-10">
        <RevealOnScroll className="text-left w-full" variant="slide-left">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-purple-900/50 border border-brand-purple-accent/20 text-brand-purple-accent text-xs font-bold tracking-widest mb-6 uppercase">
            REPROGRAMAÇÃO BIOLÓGICA ACELERADA
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-6">
            Pare de rasgar dinheiro com suplementos que não funcionam.
            <span className="text-brand-purple-accent block md:inline">Descubra o protocolo exato para o seu corpo.</span>
          </h1>
          <p className="font-sans text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            Energia inesgotável, foco blindado e intestino regulado. O método definitivo e validado, com acompanhamento direto no seu WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button text="QUERO MEU PROTOCOLO AGORA" fullWidth className="sm:w-auto" />
          </div>
          <div className="flex gap-6 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-green" />
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Ação Imediata</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-brand-green" />
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">100% Personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-brand-green" />
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Acompanhamento Real</span>
            </div>
          </div>
        </RevealOnScroll>

        <div className="relative flex justify-center items-center w-full">
          <RevealOnScroll delay={200} className="relative w-full flex justify-center" variant="slide-right">
            <div className="absolute inset-0 bg-brand-purple-accent/20 blur-[100px] rounded-full"></div>
            {/* Hero Video */}
            <video
              src={`data:video/mp4;base64,${heroVideoB64}`}
              autoPlay
              muted
              loop
              playsInline
              className="relative w-full max-w-[800px] aspect-square md:aspect-[4/5] lg:aspect-square mix-blend-screen z-20 object-cover scale-[1.7] md:scale-[1.35] pointer-events-none"
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

// 2. Pain Points
const PainPoints = () => {
  const points = [
    { title: "ENERGIA NO ZERO?", icon: <Battery className="text-brand-purple-accent w-6 h-6" />, desc: "Você acorda exausto, se arrasta o dia inteiro e vive à base de café. Seu corpo está pedindo socorro." },
    { title: "INTESTINO TRAVADO?", icon: <Activity className="text-brand-purple-accent w-6 h-6" />, desc: "Inchaço constante, dores e metabolismo lento. Seu segundo cérebro está inflamado e destruindo sua saúde." },
    { title: "MENTE NEVOENTA?", icon: <Brain className="text-brand-purple-accent w-6 h-6" />, desc: "Falta de concentração, esquecimentos e produtividade no lixo. Você não consegue focar no que realmente importa." }
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll variant="fade-down">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-12">
            Se você sente isso no dia a dia,<br className="hidden md:block"/> essa página é pra você
          </h2>
        </RevealOnScroll>
        <div className="grid md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <RevealOnScroll key={i} delay={i * 100} className="h-full" variant="zoom-in">
              <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-purple-900 flex items-center justify-center border border-white/10">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Products Section (The Core)
const ProductSection: React.FC<{ product: any, index: number }> = ({ product, index }) => {
  const isEven = index % 2 === 0;
  const bgClass = isEven ? 'bg-gradient-to-b from-[#050508] via-[#0D0712] to-[#050508]' : 'bg-gradient-to-b from-[#050508] via-[#0A0A10] to-[#050508]';

  return (
    <section className={`py-20 border-t border-white/5 relative overflow-hidden ${bgClass}`} id={`product-${product.id}`}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header (A) */}
        <RevealOnScroll variant="fade-down">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-brand-purple-accent">
                {product.icon}
              </div>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">{product.name}</h2>
            <p className="text-lg md:text-xl text-brand-green/90 font-medium mb-2">{product.subtitle}</p>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Para quem é: <span className="text-gray-300 normal-case">{product.forWhom}</span></p>
          </div>
        </RevealOnScroll>

        {/* Content Block (B, C, D, E, F) */}
        <RevealOnScroll delay={200} variant="fade-in">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center glass-card p-6 md:p-10 rounded-3xl">
            {/* Visual (B) */}
            <div className="md:col-span-5 flex justify-center">
              <RevealOnScroll variant="zoom-in" delay={300} className="w-full flex justify-center">
                <ProductImage productName={product.name} type={product.imageType} />
              </RevealOnScroll>
            </div>

            {/* Details */}
            <div className="md:col-span-7 space-y-8">
              {/* O que apoia (C) */}
              <RevealOnScroll variant="slide-left" delay={400}>
                <div>
                  <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-brand-purple-accent" />
                    O que ele apoia no corpo
                  </h3>
                  <ul className="space-y-3">
                    {product.supports.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              {/* Sinais (D) */}
              <RevealOnScroll variant="slide-left" delay={500}>
                <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                  <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wide opacity-80">
                    Sinais que você pode se beneficiar
                  </h3>
                  <ul className="space-y-2">
                    {product.symptoms.map((item: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                        <ArrowRight className="w-3 h-3 text-brand-purple-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              {/* Guidance (E) */}
              <RevealOnScroll variant="slide-left" delay={600}>
                <div className="flex gap-4 items-start border-l-2 border-brand-purple-accent pl-4">
                  <div className="text-sm text-gray-300 italic">
                    <span className="block text-brand-purple-accent font-bold mb-1 not-italic">O PROTOCOLO:</span>
                    "{product.guidance}"
                  </div>
                </div>
              </RevealOnScroll>

              {/* CTA (F) */}
              <RevealOnScroll variant="fade-up" delay={700}>
                <div className="pt-2">
                  <Button text="QUERO MEU PROTOCOLO AGORA" fullWidth />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

// 5. Benefits Grid
const Benefits = () => {
  return (
    <section className="py-20 bg-[#0A0A10]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <RevealOnScroll variant="fade-down">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-12">POR QUE 99% DAS PESSOAS <span className="text-brand-purple-accent">FALHAM</span> AO TOMAR SUPLEMENTOS?</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">A indústria quer que você compre potes e mais potes sem resultado. O segredo não é a pílula mágica, é a <strong className="text-white">ESTRATÉGIA BIOLÓGICA EXATA</strong> para o seu organismo.</p>
        </RevealOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {BENEFITS.map((b, i) => (
            <RevealOnScroll key={i} delay={i * 50} className="h-full" variant="zoom-in">
              <div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:bg-white/5 transition-colors h-full">
                <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-brand-green" />
                </div>
                <span className="text-sm font-medium text-gray-200">{b}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={300} className="mt-12" variant="fade-up">
          <Button text="QUERO A ESTRATÉGIA EXATA" />
        </RevealOnScroll>
      </div>
    </section>
  );
};

// 6. Proof/Trust
const Trust = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-brand-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <RevealOnScroll variant="zoom-in">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
            {["PUREZA ABSOLUTA", "ABSORÇÃO EXTREMA", "RESULTADO REAL"].map((label, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Shield className="w-4 h-4 text-brand-green" />
                <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
        <RevealOnScroll variant="fade-up" delay={200}>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">"Trabalhamos exclusivamente com a elite da suplementação mundial. Marcas como a Anew, que garantem <strong className="text-white">100% de absorção e resultados que você sente na pele.</strong>"</p>
        </RevealOnScroll>
      </div>
    </section>
  );
};

// 7. Steps to Start
const Steps = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#050508] to-[#1B0F24]">
      <div className="max-w-4xl mx-auto px-6">
        <RevealOnScroll variant="fade-down">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">O CAMINHO PARA A SUA <span className="text-brand-purple-accent">NOVA VERSÃO</span></h2>
        </RevealOnScroll>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "O PRIMEIRO PASSO", desc: "Clique no botão e fale diretamente comigo. Sem robôs, sem enrolação." },
            { title: "MAPEAMENTO BIOLÓGICO", desc: "Vou analisar sua rotina, seus objetivos e descobrir exatamente onde seu corpo está falhando." },
            { title: "EXECUÇÃO E RESULTADO", desc: "Receba seu protocolo de guerra. Comece a usar com a estratégia certa e veja seu corpo se transformar." }
          ].map((step, i) => (
            <RevealOnScroll key={i} delay={i * 150} className="h-full" variant="fade-up">
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-brand-green/5 blur-xl group-hover:bg-brand-green/10 transition-colors rounded-3xl"></div>
                <div className="relative glass-card p-8 rounded-3xl text-center h-full flex flex-col items-center">
                  <span className="text-5xl font-heading font-bold text-white/5 mb-4 group-hover:text-brand-green/20 transition-colors">0{i+1}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={400} className="mt-12 text-center" variant="fade-up">
          <Button text="QUERO MEU PROTOCOLO AGORA" className="px-10" />
        </RevealOnScroll>
      </div>
    </section>
  );
};

// 8. FAQ
const FAQItem: React.FC<{ q: string, a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-200 group-hover:text-brand-green transition-colors">{q}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-400 text-sm leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-20 bg-brand-black">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        {/* Left CTA Card */}
        <div className="md:col-span-4">
          <RevealOnScroll className="h-full" variant="slide-left">
            <div className="glass-card p-8 rounded-3xl bg-gradient-to-br from-brand-purple-900/50 to-brand-black sticky top-24 border border-brand-purple-accent/20">
              <h3 className="text-2xl font-heading font-bold mb-4">O QUE VOCÊ PRECISA SABER ANTES DE COMEÇAR</h3>
              <p className="text-gray-400 mb-6 text-sm">Não se preocupe. O atendimento é justamente para te explicar tudo e montar a estratégia perfeita para você.</p>
              <Button text="FALAR COMIGO AGORA" fullWidth variant="small" />
            </div>
          </RevealOnScroll>
        </div>

        {/* Accordion */}
        <div className="md:col-span-8">
          <RevealOnScroll delay={200} variant="slide-right">
            <div className="glass-card rounded-3xl p-6 md:p-8">
              {FAQS.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

// 9. Footer
const Footer = () => {
  return (
    <footer className="bg-[#020203] py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h4 className="font-heading font-bold text-white mb-2">Especialista em Suplementação</h4>
        <p className="text-gray-500 text-sm mb-8">Atendimento e mentoria complementar.</p>
        <div className="max-w-2xl mx-auto p-4 bg-white/5 rounded-xl border border-white/5">
          <p className="text-[10px] md:text-xs text-gray-600 leading-relaxed uppercase tracking-wide">
            Disclaimer: Os produtos listados são suplementos alimentares e terapias complementares. Não são medicamentos e não substituem o tratamento médico convencional. Em caso de condição de saúde, procure sempre um profissional médico habilitado. Resultados variam de pessoa para pessoa.
          </p>
        </div>
        <p className="text-xs text-gray-700 mt-8">© {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

// 10. Floating WhatsApp Button
const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 transition-all duration-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="block relative group"
      >
        <div className="absolute inset-0 bg-brand-green rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
        <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-float transition-transform duration-300 group-hover:-translate-y-1">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#4ADE80] to-[#166534] shadow-[0_10px_25px_-5px_rgba(34,197,94,0.6),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-4px_6px_rgba(0,0,0,0.2)] flex items-center justify-center relative overflow-hidden border border-white/10">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-full pointer-events-none"></div>
            <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 fill-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] z-10 relative" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};

// --- APP COMPOSITION ---
function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-purple-accent selection:text-white">
      <Header />
      <Hero />
      <PainPoints />
      <div id="products-anchor">
        {PRODUCTS.map((product, index) => (
          <ProductSection key={product.id} product={product} index={index} />
        ))}
      </div>
      <Benefits />
      <Trust />
      <Steps />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
