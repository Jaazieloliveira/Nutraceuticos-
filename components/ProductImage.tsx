import React, { useState } from 'react';

// Premium CSS Bottle component - renders a beautiful supplement bottle without external images
const CSSBottle: React.FC<{
  productName: string;
  quantity: string;
  tagline: string;
  capFrom: string;
  capTo: string;
  bodyFrom: string;
  bodyTo: string;
  labelFrom: string;
  labelTo: string;
  accentHex: string;
  textColorClass: string;
  isHovered: boolean;
}> = ({ productName, quantity, tagline, capFrom, capTo, bodyFrom, bodyTo, labelFrom, labelTo, accentHex, textColorClass, isHovered }) => (
  <div
    className="relative w-40 h-72 flex flex-col items-center will-change-transform transition-all duration-700 ease-out drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
    style={{ transform: isHovered ? 'rotateY(-12deg) scale(1.1)' : 'rotateY(0deg) scale(1)', transformStyle: 'preserve-3d' }}
  >
    {/* Cap */}
    <div
      className="w-24 h-10 rounded-t-xl relative z-20 shadow-lg flex items-end justify-center pb-1"
      style={{ background: `linear-gradient(135deg, ${capFrom}, ${capTo})` }}
    >
      <div className="w-16 h-3 rounded-sm opacity-40" style={{ background: `linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)` }} />
      {/* Cap ridge */}
      <div className="absolute bottom-0 left-0 right-0 h-2 rounded-b-sm" style={{ background: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))` }} />
    </div>

    {/* Bottle body */}
    <div
      className="w-40 flex-1 rounded-b-3xl relative overflow-hidden shadow-[inset_-12px_0_24px_rgba(0,0,0,0.3),inset_12px_0_24px_rgba(255,255,255,0.03)]"
      style={{ background: `linear-gradient(180deg, ${bodyFrom}, ${bodyTo})` }}
    >
      {/* Label area */}
      <div
        className="absolute top-3 bottom-3 left-2 right-2 rounded-xl flex flex-col items-center justify-between py-3 overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${labelFrom}, ${labelTo})` }}
      >
        {/* Brand header */}
        <div className="w-full flex flex-col items-center border-b border-white/10 pb-2">
          <span className="text-white/50 font-bold text-[7px] uppercase tracking-[0.3em]">ANEW</span>
          <div className="flex gap-1 mt-1">
            <div className="w-2 h-2 rounded-tl-sm rounded-br-sm" style={{ backgroundColor: accentHex }} />
            <div className="w-2 h-2 rounded-full bg-white/30" />
          </div>
        </div>

        {/* Product name */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-3 py-2">
          <h3 className={`font-bold text-sm leading-tight text-center uppercase tracking-wide ${textColorClass}`}>
            {productName}
          </h3>
          <span className="text-white/50 text-[8px] mt-2 font-medium tracking-widest uppercase">{tagline}</span>
        </div>

        {/* Quantity bar */}
        <div className="w-full py-1.5 flex items-center justify-center rounded-b-xl" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}>
          <span className="text-white/60 text-[7px] font-bold uppercase tracking-widest">{quantity}</span>
        </div>

        {/* Shine sweep on hover */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{
            background: isHovered
              ? 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)'
              : 'transparent'
          }}
        />
      </div>

      {/* Glass highlight left */}
      <div className="absolute top-0 left-2 w-3 h-full bg-gradient-to-r from-white/10 to-transparent blur-sm pointer-events-none rounded-b-3xl" />
      {/* Glass shadow right */}
      <div className="absolute top-0 right-0 w-6 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none rounded-b-3xl" />
    </div>

    {/* Ground shadow */}
    <div
      className="absolute bottom-0 w-36 h-4 rounded-[100%] blur-lg transition-all duration-700"
      style={{
        backgroundColor: 'rgba(0,0,0,0.6)',
        transform: isHovered ? 'scaleX(0.8) translateY(4px)' : 'scaleX(1) translateY(0)',
        opacity: isHovered ? 0.7 : 0.4
      }}
    />
  </div>
);

// Wrapper with float animation and hover state
const BottleWrapper: React.FC<{
  productName: string;
  quantity: string;
  tagline: string;
  capFrom: string;
  capTo: string;
  bodyFrom: string;
  bodyTo: string;
  labelFrom: string;
  labelTo: string;
  accentHex: string;
  textColorClass: string;
}> = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative w-full max-w-[340px] mx-auto aspect-[3/4] flex items-center justify-center group"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-green/10 blur-[60px] rounded-full opacity-40" />
      {/* Float animation wrapper */}
      <div
        className="w-full flex items-center justify-center animate-float"
        style={{ animationPlayState: isHovered ? 'paused' : 'running', transformStyle: 'preserve-3d' }}
      >
        <CSSBottle {...props} isHovered={isHovered} />
      </div>
    </div>
  );
};

// This component simulates a premium 3D product render using CSS
export const ProductImage: React.FC<{ productName: string; type?: string }> = ({ productName, type = 'glass' }) => {

  if (type === 'bottle-spirulina') {
    return <BottleWrapper
      productName="Espirulina" quantity="750 Comprimidos" tagline="Superfood Premium"
      capFrom="#16a34a" capTo="#14532d"
      bodyFrom="#0f2d1a" bodyTo="#0a1f12"
      labelFrom="#14532d" labelTo="#052e16"
      accentHex="#4ade80" textColorClass="text-emerald-400"
    />;
  }

  if (type === 'bottle-floranew') {
    return <BottleWrapper
      productName="Floranew" quantity="630g" tagline="Complexo Enzimático"
      capFrom="#b45309" capTo="#78350f"
      bodyFrom="#2d1a08" bodyTo="#1c1005"
      labelFrom="#7c2d12" labelTo="#431407"
      accentHex="#fb923c" textColorClass="text-orange-400"
    />;
  }

  if (type === 'bottle-ionew') {
    return <BottleWrapper
      productName="Ionew" quantity="60 Cápsulas" tagline="Iodo · Zinco · Selênio"
      capFrom="#7c3aed" capTo="#4c1d95"
      bodyFrom="#1e1040" bodyTo="#120a2e"
      labelFrom="#4c1d95" labelTo="#2e1065"
      accentHex="#a78bfa" textColorClass="text-violet-400"
    />;
  }

  if (type === 'bottle-aminofloranew') {
    return <BottleWrapper
      productName="Amino Floranew" quantity="300g" tagline="Aminoácidos Essenciais"
      capFrom="#0369a1" capTo="#0c4a6e"
      bodyFrom="#0c2d4a" bodyTo="#071c2e"
      labelFrom="#0c4a6e" labelTo="#082f47"
      accentHex="#38bdf8" textColorClass="text-sky-400"
    />;
  }

  if (type === 'bottle-biosymbio') {
    return <BottleWrapper
      productName="BioSymbio*21" quantity="120 Cápsulas" tagline="Probiótico Quântico"
      capFrom="#0f766e" capTo="#134e4a"
      bodyFrom="#0d2e2c" bodyTo="#081c1b"
      labelFrom="#134e4a" labelTo="#0d3330"
      accentHex="#2dd4bf" textColorClass="text-teal-400"
    />;
  }

  if (type === 'bottle-mtox-cdhg') {
    return <BottleWrapper
      productName="MTox*CdHg" quantity="60 Cápsulas" tagline="Detox Cádmio · Mercúrio"
      capFrom="#1d4ed8" capTo="#1e3a8a"
      bodyFrom="#0f1f50" bodyTo="#091336"
      labelFrom="#1e3a8a" labelTo="#172554"
      accentHex="#60a5fa" textColorClass="text-blue-400"
    />;
  }

  if (type === 'bottle-mtox-alzn') {
    return <BottleWrapper
      productName="MTox*AlZn" quantity="60 Cápsulas" tagline="Detox Alumínio · Zinco"
      capFrom="#9f1239" capTo="#881337"
      bodyFrom="#3b0a1a" bodyTo="#250610"
      labelFrom="#881337" labelTo="#4c0519"
      accentHex="#fb7185" textColorClass="text-rose-400"
    />;
  }

  if (type === 'bottle-nutri-q-plus') {
    return <BottleWrapper
      productName="Nutri-Q*Plus" quantity="90 Cápsulas" tagline="Nutrição Quântica Plus"
      capFrom="#a16207" capTo="#713f12"
      bodyFrom="#2d1f06" bodyTo="#1a1204"
      labelFrom="#713f12" labelTo="#422006"
      accentHex="#facc15" textColorClass="text-yellow-400"
    />;
  }

  if (type === 'bottle-ghl-plus') {
    return <BottleWrapper
      productName="GH-L*E Plus" quantity="60 Cápsulas" tagline="Hormônio do Crescimento"
      capFrom="#15803d" capTo="#14532d"
      bodyFrom="#0d2e1a" bodyTo="#071c10"
      labelFrom="#14532d" labelTo="#052e16"
      accentHex="#4ade80" textColorClass="text-green-400"
    />;
  }

  // RENDERIZAÇÃO DO FRASCO BRANCO PADRÃO (CSS PURO)
  if (type === 'bottle-white') {
    return (
      <div className="relative w-full max-w-[240px] mx-auto aspect-[3/4] flex items-center justify-center animate-float">
        <div className="absolute -bottom-8 w-40 h-6 bg-black/40 blur-xl rounded-[100%]"></div>
        <div className="relative w-48 h-72 flex flex-col items-center">
          <div className="w-36 h-12 bg-gradient-to-r from-gray-200 via-white to-gray-300 rounded-t-lg relative z-20 shadow-md border-b border-gray-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-gradient-to-b from-white to-gray-100 rounded-b-lg border border-gray-200"></div>
          </div>
          <div className="w-48 h-full bg-gradient-to-r from-gray-200 via-white to-gray-200 rounded-b-3xl relative overflow-hidden shadow-[inset_-10px_0_20px_rgba(0,0,0,0.1),inset_10px_0_20px_rgba(255,255,255,1)]">
            <div className="absolute top-4 bottom-4 left-0 right-0 bg-[#EFE8C8] mx-0 flex flex-col items-center shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]">
              <div className="w-full h-12 bg-gradient-to-r from-[#D98C35] via-[#F4B060] to-[#D98C35] mt-10 flex items-center justify-center shadow-sm">
                <span className="text-[10px] text-white font-bold uppercase tracking-widest text-shadow-sm">Suplemento Alimentar</span>
              </div>
              <div className="absolute top-2 flex flex-col items-center">
                <div className="flex gap-1 mb-1">
                  <div className="w-3 h-3 bg-red-500 rounded-tl-lg rounded-br-lg"></div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-green-700 font-bold font-heading text-lg lowercase tracking-tight">anew</span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <div className="relative">
                  <h3 className="text-4xl font-heading font-extrabold text-[#B09040] drop-shadow-sm opacity-30 absolute top-1 left-1 blur-[1px]">ACENew</h3>
                  <h3 className="text-4xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#8B7030] to-[#B09040] relative z-10">ACENew</h3>
                </div>
                <span className="font-serif italic text-black font-bold text-lg mt-1">Antioxidante</span>
              </div>
              <div className="w-full h-8 bg-yellow-300/80 mb-6 flex items-center justify-center">
                <span className="text-xs font-bold text-black uppercase">Contém 120 cápsulas</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-black/10 pointer-events-none rounded-b-3xl"></div>
            <div className="absolute top-0 left-4 w-4 h-full bg-gradient-to-r from-white/60 to-transparent blur-sm pointer-events-none"></div>
          </div>
        </div>
      </div>
    );
  }

  // RENDERIZAÇÃO PADRÃO (GENÉRICO)
  return (
    <div className="relative w-full max-w-[280px] mx-auto aspect-[3/4] flex items-center justify-center">
      <div className="absolute inset-0 bg-brand-purple-accent/20 blur-3xl rounded-full scale-75 animate-pulse"></div>
      <div className="relative z-10 w-40 h-64 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl flex flex-col items-center justify-between overflow-hidden group">
        <div className="w-full h-12 bg-[#2A1233] border-b border-white/10 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
        <div className="w-full flex-1 flex flex-col items-center justify-center p-4 text-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-green to-transparent mb-2"></div>
          <h3 className="text-white font-heading font-bold text-lg leading-tight uppercase tracking-wider">{productName.split(' ')[0]}</h3>
          <span className="text-brand-purple-accent text-xs font-sans tracking-[0.2em] mt-1">{productName.split(' ').slice(1).join(' ')}</span>
          <div className="mt-4 w-8 h-8 rounded-full border border-brand-green/30 flex items-center justify-center">
            <div className="w-4 h-4 bg-brand-green rounded-full shadow-[0_0_10px_#28E06A]"></div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
      </div>
      <div className="absolute -bottom-4 w-32 h-4 bg-black/60 blur-lg rounded-full"></div>
    </div>
  );
};
