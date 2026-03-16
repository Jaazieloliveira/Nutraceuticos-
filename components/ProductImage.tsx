import React, { useState } from 'react';

// This component simulates a premium 3D product render using CSS or displays Real Images
export const ProductImage: React.FC<{ productName: string; type?: string }> = ({ productName, type = 'glass' }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // RENDERIZAÇÃO ESPECÍFICA PARA A SPIRULINA (IMAGEM REAL ATUALIZADA)
  if (type === 'bottle-spirulina') {
    return (
      <div 
        // Aumentado max-w de 300px para 340px
        className="relative w-full max-w-[340px] mx-auto aspect-[3/4] flex items-center justify-center group"
        style={{ perspective: '1000px' }} // Cria o ambiente 3D
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
         {/* Luz Ambiente Estática */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-green/10 blur-[60px] rounded-full opacity-40"></div>

         {/* Sombra de Chão */}
         <div className={`absolute bottom-0 w-56 h-8 bg-black/60 blur-xl rounded-[100%] transition-all duration-700 ease-in-out ${isHovered ? 'scale-90 opacity-70 translate-y-4' : 'scale-100 opacity-40 translate-y-0'}`}></div>
         
         {/* Container da Animação de Flutuação */}
         <div 
           className="w-full flex items-center justify-center animate-float"
           style={{ 
             // Pausa a flutuação vertical quando o mouse está em cima
             animationPlayState: isHovered ? 'paused' : 'running',
             transformStyle: 'preserve-3d' 
           }}
         >
             <img 
               src="https://i.ibb.co/sd8xWNNF/spirulina-1.png" 
               alt="Espirulina Anew 750 Comprimidos"
               loading="eager"
               fetchPriority="high"
               decoding="async"
               className="w-auto h-[400px] object-contain will-change-transform transition-all duration-700 ease-out drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]"
               style={{ 
                 // Rotação leve e fixa (-12deg) ao passar o mouse
                 transform: isHovered ? 'rotateY(-12deg) scale(1.1)' : 'rotateY(0deg) scale(1)'
               }}
               referrerPolicy="no-referrer"
             />
         </div>
      </div>
    );
  }

  // RENDERIZAÇÃO ESPECÍFICA PARA FLORANEW
  if (type === 'bottle-floranew') {
    return (
      <div 
        className="relative w-full max-w-[340px] mx-auto aspect-[3/4] flex items-center justify-center group"
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
         {/* Luz Ambiente Estática */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-green/10 blur-[60px] rounded-full opacity-40"></div>

         {/* Sombra de Chão */}
         <div className={`absolute bottom-0 w-56 h-8 bg-black/60 blur-xl rounded-[100%] transition-all duration-700 ease-in-out ${isHovered ? 'scale-90 opacity-70 translate-y-4' : 'scale-100 opacity-40 translate-y-0'}`}></div>
         
         {/* Container da Animação de Flutuação */}
         <div 
           className="w-full flex items-center justify-center animate-float"
           style={{ 
             animationPlayState: isHovered ? 'paused' : 'running',
             transformStyle: 'preserve-3d' 
           }}
         >
             <img 
               src="https://i.ibb.co/W48Gyg6D/floranew.png" 
               alt="Floranew Anew"
               loading="eager"
               fetchPriority="high"
               decoding="async"
               className="w-auto h-[400px] object-contain will-change-transform transition-all duration-700 ease-out drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]"
               style={{ 
                 // Rotação suave no hover, igual à Spirulina
                 transform: isHovered ? 'rotateY(-12deg) scale(1.1)' : 'rotateY(0deg) scale(1)'
               }}
               referrerPolicy="no-referrer"
             />
         </div>
      </div>
    );
  }

  // RENDERIZAÇÃO ESPECÍFICA PARA IONEW
  if (type === 'bottle-ionew') {
    return (
      <div 
        className="relative w-full max-w-[340px] mx-auto aspect-[3/4] flex items-center justify-center group"
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
         {/* Luz Ambiente Estática */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-green/10 blur-[60px] rounded-full opacity-40"></div>

         {/* Sombra de Chão */}
         <div className={`absolute bottom-0 w-56 h-8 bg-black/60 blur-xl rounded-[100%] transition-all duration-700 ease-in-out ${isHovered ? 'scale-90 opacity-70 translate-y-4' : 'scale-100 opacity-40 translate-y-0'}`}></div>
         
         {/* Container da Animação de Flutuação */}
         <div 
           className="w-full flex items-center justify-center animate-float"
           style={{ 
             animationPlayState: isHovered ? 'paused' : 'running',
             transformStyle: 'preserve-3d' 
           }}
         >
             <img 
               src="https://i.ibb.co/7dsW2Lnd/ionew.png" 
               alt="Ionew Anew"
               loading="eager"
               fetchPriority="high"
               decoding="async"
               className="w-auto h-[400px] object-contain will-change-transform transition-all duration-700 ease-out drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]"
               style={{ 
                 // Rotação suave no hover
                 transform: isHovered ? 'rotateY(-12deg) scale(1.1)' : 'rotateY(0deg) scale(1)'
               }}
               referrerPolicy="no-referrer"
             />
         </div>
      </div>
    );
  }

  // RENDERIZAÇÃO ESPECÍFICA PARA AMINOFLORANEW
  if (type === 'bottle-aminofloranew') {
    return (
      <div 
        className="relative w-full max-w-[340px] mx-auto aspect-[3/4] flex items-center justify-center group"
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
         {/* Luz Ambiente Estática */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-green/10 blur-[60px] rounded-full opacity-40"></div>

         {/* Sombra de Chão */}
         <div className={`absolute bottom-0 w-56 h-8 bg-black/60 blur-xl rounded-[100%] transition-all duration-700 ease-in-out ${isHovered ? 'scale-90 opacity-70 translate-y-4' : 'scale-100 opacity-40 translate-y-0'}`}></div>
         
         {/* Container da Animação de Flutuação */}
         <div 
           className="w-full flex items-center justify-center animate-float"
           style={{ 
             animationPlayState: isHovered ? 'paused' : 'running',
             transformStyle: 'preserve-3d' 
           }}
         >
             <img 
               src="https://i.ibb.co/M5JdZ6fS/Aminofloranew.png" 
               alt="Aminofloranew Anew"
               loading="eager"
               fetchPriority="high"
               decoding="async"
               className="w-auto h-[400px] object-contain will-change-transform transition-all duration-700 ease-out drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]"
               style={{ 
                 // Rotação suave no hover
                 transform: isHovered ? 'rotateY(-12deg) scale(1.1)' : 'rotateY(0deg) scale(1)'
               }}
               referrerPolicy="no-referrer"
             />
         </div>
      </div>
    );
  }

  // RENDERIZAÇÃO ESPECÍFICA PARA BIOSYMBIO
  if (type === 'bottle-biosymbio') {
    return (
      <div 
        className="relative w-full max-w-[340px] mx-auto aspect-[3/4] flex items-center justify-center group"
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
         {/* Luz Ambiente Estática */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-green/10 blur-[60px] rounded-full opacity-40"></div>

         {/* Sombra de Chão */}
         <div className={`absolute bottom-0 w-56 h-8 bg-black/60 blur-xl rounded-[100%] transition-all duration-700 ease-in-out ${isHovered ? 'scale-90 opacity-70 translate-y-4' : 'scale-100 opacity-40 translate-y-0'}`}></div>
         
         {/* Container da Animação de Flutuação */}
         <div 
           className="w-full flex items-center justify-center animate-float"
           style={{ 
             // Pausa a flutuação vertical no hover para dar destaque à rotação
             animationPlayState: isHovered ? 'paused' : 'running',
             transformStyle: 'preserve-3d' 
           }}
         >
             <img 
               src="https://i.ibb.co/nMW82hY1/quantum-bio.png" 
               alt="BioSymbio*21"
               loading="eager"
               fetchPriority="high"
               decoding="async"
               // Adiciona a classe 'animate-rotate-y' quando hovered para girar suavemente no eixo
               className={`w-auto h-[400px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)] will-change-transform ${isHovered ? 'animate-rotate-y scale-110' : 'transition-all duration-700 ease-out scale-100'}`}
               style={{ 
                 // Quando não está hovered, mantemos a posição neutra. A classe CSS assume a animação no hover.
                 transform: isHovered ? undefined : 'rotateY(0deg) scale(1)'
               }}
               referrerPolicy="no-referrer"
             />
         </div>
      </div>
    );
  }
  
  // RENDERIZAÇÃO ESPECÍFICA PARA MTOX CDHG
  if (type === 'bottle-mtox-cdhg') {
    return (
      <div 
        className="relative w-full max-w-[340px] mx-auto aspect-[3/4] flex items-center justify-center group"
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
         {/* Luz Ambiente Estática */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-green/10 blur-[60px] rounded-full opacity-40"></div>

         {/* Sombra de Chão */}
         <div className={`absolute bottom-0 w-56 h-8 bg-black/60 blur-xl rounded-[100%] transition-all duration-700 ease-in-out ${isHovered ? 'scale-90 opacity-70 translate-y-4' : 'scale-100 opacity-40 translate-y-0'}`}></div>
         
         {/* Container da Animação de Flutuação */}
         <div 
           className="w-full flex items-center justify-center animate-float"
           style={{ 
             animationPlayState: isHovered ? 'paused' : 'running',
             transformStyle: 'preserve-3d' 
           }}
         >
             <img 
               src="https://i.ibb.co/1fSDrh0d/Mtox-CDHG.png" 
               alt="MTox*CdHg"
               loading="eager"
               fetchPriority="high"
               decoding="async"
               className={`w-auto h-[400px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)] will-change-transform ${isHovered ? 'animate-rotate-y scale-110' : 'transition-all duration-700 ease-out scale-100'}`}
               style={{ 
                 transform: isHovered ? undefined : 'rotateY(0deg) scale(1)'
               }}
               referrerPolicy="no-referrer"
             />
         </div>
      </div>
    );
  }

  // RENDERIZAÇÃO ESPECÍFICA PARA MTOX ALZN
  if (type === 'bottle-mtox-alzn') {
    return (
      <div 
        className="relative w-full max-w-[340px] mx-auto aspect-[3/4] flex items-center justify-center group"
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
         {/* Luz Ambiente Estática */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-green/10 blur-[60px] rounded-full opacity-40"></div>

         {/* Sombra de Chão */}
         <div className={`absolute bottom-0 w-56 h-8 bg-black/60 blur-xl rounded-[100%] transition-all duration-700 ease-in-out ${isHovered ? 'scale-90 opacity-70 translate-y-4' : 'scale-100 opacity-40 translate-y-0'}`}></div>
         
         {/* Container da Animação de Flutuação */}
         <div 
           className="w-full flex items-center justify-center animate-float"
           style={{ 
             animationPlayState: isHovered ? 'paused' : 'running',
             transformStyle: 'preserve-3d' 
           }}
         >
             <div 
               className="will-change-transform animate-wave"
               style={{
                 animationPlayState: isHovered ? 'running' : 'paused'
               }}
             >
                 <div className={`will-change-transform transition-all duration-700 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`}>
                   <div className={`relative inline-block ${isHovered ? 'animate-pulse-subtle' : ''}`}>
                     <img 
                       src="https://i.ibb.co/zVpktf8J/Mtox-AIZn.png" 
                       alt="MTox*AlZn"
                       loading="eager"
                       fetchPriority="high"
                       decoding="async"
                       className="w-auto h-[400px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)] will-change-transform"
                       referrerPolicy="no-referrer"
                     />
                     {/* Efeito de luz (Sweep) */}
                     <div 
                       className="absolute inset-0 z-10 pointer-events-none overflow-hidden" 
                       style={{ 
                         maskImage: 'url(https://i.ibb.co/zVpktf8J/Mtox-AIZn.png)', 
                         WebkitMaskImage: 'url(https://i.ibb.co/zVpktf8J/Mtox-AIZn.png)',
                         maskSize: 'contain', 
                         WebkitMaskSize: 'contain',
                         maskRepeat: 'no-repeat', 
                         WebkitMaskRepeat: 'no-repeat',
                         maskPosition: 'center',
                         WebkitMaskPosition: 'center'
                       }}
                     >
                        <div className={`absolute top-0 bottom-0 w-[60%] bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 transition-all duration-[1.2s] ease-in-out ${isHovered ? 'left-[150%]' : '-left-[100%]'}`}></div>
                     </div>
                   </div>
                 </div>
             </div>
         </div>
      </div>
    );
  }

  // RENDERIZAÇÃO ESPECÍFICA PARA NUTRI-Q*PLUS
  if (type === 'bottle-nutri-q-plus') {
    return (
      <div 
        className="relative w-full max-w-[340px] mx-auto aspect-[3/4] flex items-center justify-center group"
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
         {/* Luz Ambiente Estática */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-green/10 blur-[60px] rounded-full opacity-40"></div>

         {/* Sombra de Chão */}
         <div className={`absolute bottom-0 w-56 h-8 bg-black/60 blur-xl rounded-[100%] transition-all duration-700 ease-in-out ${isHovered ? 'scale-90 opacity-70 translate-y-4' : 'scale-100 opacity-40 translate-y-0'}`}></div>
         
         {/* Container da Animação de Flutuação */}
         <div 
           className="w-full flex items-center justify-center animate-float"
           style={{ 
             animationPlayState: isHovered ? 'paused' : 'running',
             transformStyle: 'preserve-3d' 
           }}
         >
             <div 
               className="will-change-transform animate-wave"
               style={{
                 animationPlayState: isHovered ? 'running' : 'paused'
               }}
             >
                 <div className={`will-change-transform transition-all duration-700 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`}>
                   <div className={isHovered ? 'animate-pulse-subtle' : ''}>
                     <img 
                       src="https://i.ibb.co/mFH3Mch1/12.png"
                       alt="Nutri-Q*Plus"
                       loading="eager"
                       fetchPriority="high"
                       decoding="async"
                       className="w-auto h-[400px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)] will-change-transform"
                       referrerPolicy="no-referrer"
                     />
                   </div>
                 </div>
             </div>
         </div>
      </div>
    );
  }

  // RENDERIZAÇÃO ESPECÍFICA PARA GH-L*E PLUS
  if (type === 'bottle-ghl-plus') {
    return (
      <div 
        className="relative w-full max-w-[340px] mx-auto aspect-[3/4] flex items-center justify-center group"
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
         {/* Luz Ambiente Estática */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-green/10 blur-[60px] rounded-full opacity-40"></div>

         {/* Sombra de Chão */}
         <div className={`absolute bottom-0 w-56 h-8 bg-black/60 blur-xl rounded-[100%] transition-all duration-700 ease-in-out ${isHovered ? 'scale-90 opacity-70 translate-y-4' : 'scale-100 opacity-40 translate-y-0'}`}></div>
         
         {/* Container da Animação de Flutuação */}
         <div 
           className="w-full flex items-center justify-center animate-float"
           style={{ 
             animationPlayState: isHovered ? 'paused' : 'running',
             transformStyle: 'preserve-3d' 
           }}
         >
             <div 
               className="will-change-transform animate-wave"
               style={{
                 animationPlayState: isHovered ? 'running' : 'paused'
               }}
             >
                 <div className={`will-change-transform transition-all duration-700 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`}>
                   <div className={isHovered ? 'animate-pulse-subtle' : ''}>
                     <img 
                       src="https://i.ibb.co/hFm2pYRZ/11.png"
                       alt="Gh-L*E Plus"
                       loading="eager"
                       fetchPriority="high"
                       decoding="async"
                       className="w-auto h-[400px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)] will-change-transform"
                       referrerPolicy="no-referrer"
                     />
                   </div>
                 </div>
             </div>
         </div>
      </div>
    );
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