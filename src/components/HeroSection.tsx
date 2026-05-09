import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LeadForm } from './LeadForm';

interface HeroSectionProps {
  badge?: string;
  title: string;
  subtitle?: string;
  ctaPrimary?: {
    label: string;
    href: string;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
  height?: 'full' | 'large' | 'medium' | 'small';
  showForm?: boolean;
  bairro?: string;
  children?: React.ReactNode;
}

export function HeroSection({
  badge,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  height = 'medium',
  showForm = false,
  bairro,
  children
}: HeroSectionProps) {
  
  const heightClass = {
    full: 'min-h-[85vh] md:min-h-[90vh]',
    large: 'min-h-[60vh] md:min-h-[65vh]',
    medium: 'min-h-[55vh] md:min-h-[60vh]',
    small: 'min-h-[40vh]',
  }[height];

  return (
    <section className={`relative flex items-center pt-32 pb-16 overflow-hidden bg-[#0a0f1a] ${heightClass}`}>
      {/* CAMADA 1 - Imagem de fundo externa */}
      <img
        src="https://www.cicarelli.adv.br/assets/direito-empresarial-828x578.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading={height === 'full' ? 'eager' : 'lazy'}
      />

      {/* CAMADA 2 - Overlay duplo */}
      <div className="absolute inset-0 bg-[#0a0f1a]/80 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/90 via-[#0a0f1a]/70 to-transparent z-0"></div>

      {/* CAMADA 3 - Faixa dourada no topo */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fbbf24] to-transparent z-10" />

      {/* CAMADA 4 - Conteúdo do Hero */}
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className={`grid grid-cols-1 ${showForm ? 'lg:grid-cols-12 gap-12' : 'max-w-4xl'} items-center`}>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={showForm ? 'lg:col-span-6' : ''}
          >
            {badge && (
              <span className="inline-block py-1.5 px-4 bg-gold/20 border border-gold/40 text-gold rounded-full text-sm font-semibold tracking-wider mb-6">
                {badge}
              </span>
            )}
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                {subtitle}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {ctaPrimary && (
                <a 
                  href={ctaPrimary.href} 
                  target={ctaPrimary.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold-dk text-primary font-bold px-8 py-4 rounded-full transition-all text-center flex items-center justify-center uppercase tracking-widest text-sm shadow-lg shadow-gold/20"
                >
                  {ctaPrimary.label}
                </a>
              )}
              {ctaSecondary && (
                <Link 
                  to={ctaSecondary.href} 
                  className="border border-white/30 hover:border-gold hover:text-gold text-white font-medium px-8 py-4 rounded-full transition-all text-center flex items-center justify-center uppercase tracking-widest text-sm bg-white/5"
                >
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
            
            {children}
          </motion.div>

          {showForm && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="bg-[#0a0f1a]/80 backdrop-blur-md border border-gold/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">Relate sua situação</h3>
                  <p className="text-gray-400 mb-6 text-sm">Nossa equipe especialista analisará seu caso gratuitamente.</p>
                  <LeadForm bairro={bairro} />
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
