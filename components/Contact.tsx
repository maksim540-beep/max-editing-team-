import React from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';
import { TELEGRAM_LINK } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-red-600 to-red-900 rounded-3xl p-8 md:p-16 text-center shadow-2xl shadow-red-900/20 max-w-5xl mx-auto border border-red-500/30">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 flex items-center justify-center gap-4"
          >
            Напишите мне в Telegram <Send className="w-8 h-8 md:w-10 md:h-10" />
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-red-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            Мы обсудим вашу идею, предложим концепцию и рассчитаем стоимость проекта.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-red-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-neutral-100 transition-colors shadow-lg"
            >
              <Send className="w-5 h-5" /> Написать лично @Max_editingg
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
