import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'outline' | 'small';
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, variant = 'primary', className = '', fullWidth = false }) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-2xl tracking-wide";
  
  const variants = {
    primary: "bg-brand-green text-brand-black hover:bg-brand-green-hover shadow-[0_0_20px_rgba(40,224,106,0.3)] hover:shadow-[0_0_30px_rgba(40,224,106,0.5)] py-4 px-8 text-lg min-h-[52px]",
    outline: "border border-brand-green text-brand-green hover:bg-brand-green/10 py-2 px-4 text-sm min-h-[40px]",
    small: "bg-brand-green text-brand-black hover:bg-brand-green-hover py-3 px-6 text-base shadow-lg"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir WhatsApp para ${text}`}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className} group`}
      onClick={() => {
        // Simple analytics tracking mock
        console.log('cta_whatsapp_click', text);
      }}
    >
      <MessageCircle className={`mr-2 ${variant === 'primary' ? 'w-5 h-5' : 'w-4 h-4'} group-hover:scale-110 transition-transform`} />
      {text}
    </a>
  );
};