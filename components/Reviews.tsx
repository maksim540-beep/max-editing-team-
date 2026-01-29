
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: "Алексей Соколов",
    role: "Бизнес-коуч",
    text: "Ребята — просто звери! Конверсия в подписки с рилсов выросла на 40% после первого же пака. Монтаж очень плотный, зритель не успевает заскучать.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    name: "Мария Вишневская",
    role: "Lifestyle Блогер",
    text: "Для меня важна эстетика и чувство ритма. Макс чувствует музыку и кадр как никто другой. Передаю исходники и вообще не переживаю за результат.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
  },
  {
    name: "Дмитрий Волков",
    role: "Основатель IT-стартапа",
    text: "Делали серию Shorts для продукта. Скорость работы поразила — через 2 дня уже всё было готово. Правки минимальные, понимание задачи с полуслова.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry"
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] -mr-48 -mt-48" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Что говорят клиенты</h2>
          <p className="text-neutral-400">Результаты, которые говорят сами за себя</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-red-600/30 transition-all group"
            >
              <Quote className="text-red-600 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-neutral-300 mb-8 italic leading-relaxed">
                «{review.text}»
              </p>
              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700" />
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-xs text-red-500 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
