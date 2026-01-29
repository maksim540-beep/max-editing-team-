
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, PenTool, Camera, Cpu, Rocket, Sparkles } from 'lucide-react';

const EXPERTISE_STEPS = [
  {
    icon: <PenTool size={20} />,
    question: "Помощь со сценарием и подбор тем",
    answer: (
      <div className="space-y-4">
        <p>Мы не просто монтируем, а помогаем упаковать ваш опыт в вовлекающий формат. В этот этап входит:</p>
        <ul className="space-y-2">
          {["Анализ ниши и подбор актуальных под-тем именно под ваш контент", 
            "Проработка сильных 'хуков' (зацепок), которые заставят зрителя не пролистывать ролик", 
            "Создание четкой структуры основного контента для легкого восприятия",
            "Написание призывов к действию (CTA)"].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-300">
              <span className="text-red-600 font-bold mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  },
  {
    icon: <Camera size={20} />,
    question: "Чек-лист для идеальной съёмки",
    answer: (
      <div className="space-y-4">
        <p>Мы отправляем подробный гайд, как подготовить исходник, чтобы результат выглядел максимально качественным:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Sparkles size={16} className="text-red-500" /> Фон и кадр</h4>
            <p className="text-sm text-neutral-400">Инструкция по композиции: как расположить себя в кадре, как создать глубину пространства и убрать лишний визуальный шум.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Sparkles size={16} className="text-red-500" /> Свет и Качество</h4>
            <p className="text-sm text-neutral-400">Советы по настройке камеры (4K, FPS) и схемам освещения даже при минимальном бюджете (у окна или с бытовой лампой).</p>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <Cpu size={20} />,
    question: "Технический процесс монтажа",
    answer: (
      <div className="space-y-4">
        <p>Каждое видео проходит через многослойную обработку:</p>
        <ul className="space-y-2">
          {["Динамичный монтаж (нарезка) с удалением всех лишних пауз и 'эээ'", 
            "Профессиональная цветокоррекция для придания 'киношного' вида", 
            "Акцентные анимированные субтитры, адаптированные под стиль вашего бренда", 
            "Sound Design: подбор трендовой музыки и добавление звуковых эффектов (SFX)",
            "Вставки графики, мемов и всплывающих элементов для удержания внимания"].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-300">
              <span className="text-red-600 font-bold mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  },
  {
    icon: <Rocket size={20} />,
    question: "Создание креативной упаковки",
    answer: (
      <div className="space-y-4">
        <p>Мы делаем всё, чтобы ваше видео выделялось в ленте и привлекало внимание аудитории:</p>
        <ul className="space-y-2">
          {["Создание кликабельной обложки", 
            "Написание правильного вовлекающего заголовка и описания", 
            "Подбор релевантных хештегов именно под вашу нишу"].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-300">
              <span className="text-red-600 font-bold mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Экспертный подход</h2>
        </div>

        <div className="space-y-4">
          {EXPERTISE_STEPS.map((step, idx) => (
            <div 
              key={idx} 
              className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
                openIdx === idx ? 'border-red-600/50 bg-neutral-900/40' : 'border-neutral-800 bg-neutral-900/10 hover:border-neutral-700'
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${openIdx === idx ? 'bg-red-600 text-white' : 'bg-neutral-800 text-neutral-400'}`}>
                    {step.icon}
                  </div>
                  <span className="font-bold text-lg md:text-xl">{step.question}</span>
                </div>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIdx === idx ? 'bg-red-600 text-white rotate-180' : 'bg-neutral-800 text-neutral-400'}`}>
                  {openIdx === idx ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 md:px-8 pb-8">
                      <div className="p-6 bg-neutral-950/50 rounded-2xl border-l-4 border-red-600 ml-0 md:ml-14">
                        <div className="text-neutral-300 text-base md:text-lg">
                          {step.answer}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
