
import React, { useState } from 'react';
import { Zap, Clock, Film, ShieldCheck, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Соблюдение дедлайнов",
      desc: "Мы работаем как часы. Вы получаете готовый проект точно в срок, без задержек и творческих пауз."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Полная надежность",
      desc: "Снимаем с вас ответственность за процесс. Мы работаем автономно: от идеи до финального рендера."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Высокая динамика",
      desc: "Удержание внимания с первой секунды. Используем ритмичный монтаж, который не дает зрителю смахнуть ролик."
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Любые форматы",
      desc: "От коротких вертикальных Reels до полноценных интервью. Подберем стиль, который подходит именно вам."
    }
  ];

  return (
    <section id="services" className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Почему мы?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ feature: { icon: React.ReactNode, title: string, desc: string } }> = ({ feature }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      transition={{ 
        type: "spring", 
        stiffness: 150, 
        damping: 20 
      }}
      className={`relative p-6 rounded-3xl border cursor-pointer flex flex-col items-center justify-center text-center transition-all duration-500 ${
        isOpen 
          ? 'bg-neutral-900 border-red-600/50 min-h-[300px]' 
          : 'bg-neutral-900/30 border-neutral-800 min-h-[300px]'
      }`}
      whileHover={!isOpen ? { scale: 1.02, backgroundColor: "rgba(23, 23, 23, 0.8)", borderColor: "rgba(220, 38, 38, 0.3)" } : {}}
    >
      <motion.div 
        layout
        className={`rounded-full flex items-center justify-center transition-all duration-500 ${
          isOpen 
            ? 'w-12 h-12 bg-red-600/20 text-red-500 mb-4' 
            : 'w-20 h-20 bg-red-600 text-white mb-0 shadow-lg shadow-red-900/20'
        }`}
      >
        {feature.icon}
      </motion.div>

      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="open"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full"
          >
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed px-2">
              {feature.desc}
            </p>
          </motion.div>
        ) : (
          <motion.div 
            key="closed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 flex flex-col items-center gap-2"
          >
            <h3 className="text-lg font-bold">{feature.title}</h3>
            <div className="text-xs font-bold uppercase tracking-widest text-red-500 flex items-center gap-1">
              Узнать больше <ChevronRight size={14} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Features;
