import React, { useState, useEffect, useRef } from 'react';

type AnimationVariant = 'fade-up' | 'fade-down' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms
  variant?: AnimationVariant;
  duration?: number; // in ms
}

export const RevealOnScroll: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  variant = 'fade-up',
  duration = 1000
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view or just as it enters
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransformClasses = () => {
    if (isVisible) return "opacity-100 translate-y-0 translate-x-0 scale-100 blur-0";
    
    switch (variant) {
      case 'fade-up':
        return "opacity-0 translate-y-8";
      case 'fade-down':
        return "opacity-0 -translate-y-8";
      case 'slide-left':
        return "opacity-0 -translate-x-12";
      case 'slide-right':
        return "opacity-0 translate-x-12";
      case 'zoom-in':
        return "opacity-0 scale-95";
      case 'fade-in':
      default:
        return "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
      className={`transition-all ease-out transform will-change-transform ${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
};