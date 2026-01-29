
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import { TELEGRAM_LINK } from '../constants';

const Pricing: React.FC = () => {
  // Функция для создания ссылки с текстом
  const getTgContactLink = (message: string) => {
    return `${TELEGRAM_LINK}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="pricing" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Декоративное свечение */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Стоимость услуг</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Посмотрите наш подход и результат в деле без больших вложений
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          
          {/* Пробный пакет услуг */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative p-8 md:p-10 rounded-3xl border border-red-600/30 bg-neutral-900/50 backdrop-blur-sm shadow-[0_0_40px_rgba(220,38,38,0.1)]"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Пробный пакет услуг</h3>
                <p className="text-neutral-400">Оцените качество и скорость нашей работы</p>
              </div>
              
              <div className="flex flex-col items-end shrink-0">
                <div className="flex flex-col items-end">
                  <div className="flex items-baseline">
                    <span className="text-7xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">3500₽</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 border-t border-white/5 pt-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-1" size={18} />
                  <span className="text-neutral-200">Сценарий под нишу и ваши предпочтения</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-1" size={18} />
                  <span className="text-neutral-200">Советы по съемке (фон, свет, кадр)</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-1" size={18} />
                  <span className="text-neutral-200">Профессиональный монтаж</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-red-500 shrink-0 mt-1" size={18} />
                  <span className="text-neutral-200">Оптимизация (обложка, CTA, хук, описание и хештеги)</span>
                </li>
              </ul>
            </div>

            <a 
              href={getTgContactLink("Привет, хочу заказать пробный пакет услуг")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-5 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold text-lg transition-all hover:scale-[1.01] active:scale-95 shadow-xl shadow-red-900/30"
            >
              Заказать пробный пакет <Send size={20} />
            </a>
          </motion.div>

          {/* Пакеты */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/30 hover:border-red-600/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 blur-2xl rounded-full -mr-12 -mt-12" />
              <div className="text-red-500 font-bold mb-2 tracking-widest uppercase text-xs">Пакет 4 ролика</div>
              <div className="text-4xl font-bold mb-6">15 000 ₽</div>
              <a 
                href={getTgContactLink("Привет, хочу заказать пакет из четырёх рилс")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold flex items-center gap-2 group-hover:text-red-500 transition-colors"
              >
                Выбрать пакет <Send size={14} />
              </a>
            </div>

            <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/30 hover:border-red-600/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 blur-2xl rounded-full -mr-12 -mt-12" />
              <div className="text-red-500 font-bold mb-2 tracking-widest uppercase text-xs">Пакет 8 роликов</div>
              <div className="text-4xl font-bold mb-6">30 000 ₽</div>
              <a 
                href={getTgContactLink("Привет, хочу заказать пакет из восьми рилс")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold flex items-center gap-2 group-hover:text-red-500 transition-colors"
              >
                Выбрать пакет <Send size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Акцентная надпись с рыночным сравнением */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-4"
        >
          <div className="text-neutral-500 text-xl md:text-2xl font-medium flex flex-wrap justify-center gap-x-2">
            <span>Средняя рыночная цена за аналогичные услуги:</span>
            <span className="line-through decoration-neutral-600 decoration-2 italic">3000₽ - 6000₽</span>
          </div>
          
          <div className="text-4xl md:text-6xl font-black text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.6)] tracking-tight">
            Наша цена: 4000 рублей в среднем
          </div>
          
          <p className="text-neutral-700 text-[10px] md:text-xs mt-6 uppercase tracking-[0.4em] font-black opacity-40">
            цены указаны за один ролик
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
