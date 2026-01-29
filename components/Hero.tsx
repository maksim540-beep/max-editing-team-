
import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { TELEGRAM_LINK } from '../constants';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs md:text-sm text-neutral-300 uppercase tracking-widest font-medium">
              Заказы принимаются
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            Видео, которое <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              Смотрят до конца
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Мы — команда профессиональных монтажеров. Превращаем отснятый материал в динамичный контент, который удерживает внимание и собирает высокие охваты.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-red-900/20"
            >
              Обсудить проект <ArrowRight className="w-5 h-5" />
            </a>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-700 hover:border-white text-white rounded-full font-bold flex items-center justify-center gap-2 transition-all"
            >
              Смотреть работы <Play className="w-5 h-5" fill="currentColor" />
            </button>
          </div>

          {/* Special Offer Button */}
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            onClick={scrollToPricing}
            className="group relative bg-white text-black px-10 py-5 rounded-2xl font-black text-sm md:text-base uppercase tracking-wider shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:scale-105 transition-all flex items-center gap-3 active:scale-95"
          >
            Спецпредложение на пробный пакет услуг 🎁
            
            {/* Pulsing Border Effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-white opacity-0 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 pointer-events-none" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
