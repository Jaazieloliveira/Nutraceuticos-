import React from 'react';

const imageMap: Record<string, string> = {
  'bottle-spirulina':    'https://i.ibb.co/sd8xWNNF/spirulina-1.png',
  'bottle-floranew':     'https://i.ibb.co/W48Gyg6D/floranew.png',
  'bottle-ionew':        'https://i.ibb.co/7dsW2Lnd/ionew.png',
  'bottle-aminofloranew':'https://i.ibb.co/M5JdZ6fS/Aminofloranew.png',
  'bottle-biosymbio':    'https://i.ibb.co/nMW82hY1/quantum-bio.png',
  'bottle-mtox-cdhg':    'https://i.ibb.co/1fSDrh0d/Mtox-CDHG.png',
  'bottle-mtox-alzn':    'https://i.ibb.co/zVpktf8J/Mtox-AIZn.png',
  'bottle-ghl-plus':     'https://i.ibb.co/mFH3Mch1/12.png',
  'bottle-nutri-q-plus': 'https://i.ibb.co/hFm2pYRZ/11.png',
};

export const ProductImage: React.FC<{ productName: string; type?: string }> = ({ productName, type = 'glass' }) => {
  const src = type ? imageMap[type] : undefined;

  if (src) {
    return (
      <div className="relative w-full max-w-[340px] mx-auto flex items-center justify-center" style={{ minHeight: '280px' }}>
        <div className="absolute inset-0 bg-brand-purple-accent/10 blur-[60px] rounded-full opacity-40 pointer-events-none" />
        <img
          src={src}
          alt={productName}
          className="relative animate-wave drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] max-h-[380px] w-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[280px] mx-auto aspect-[3/4] flex items-center justify-center">
      <div className="absolute inset-0 bg-brand-purple-accent/20 blur-3xl rounded-full scale-75 animate-pulse"></div>
      <div className="relative z-10 w-40 h-64 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl flex flex-col items-center justify-between overflow-hidden">
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
      </div>
      <div className="absolute -bottom-4 w-32 h-4 bg-black/60 blur-lg rounded-full"></div>
    </div>
  );
};
