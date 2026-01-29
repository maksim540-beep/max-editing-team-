
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, TELEGRAM_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Следим за состоянием скролла тела документа, чтобы понимать, открыто ли модальное окно
    const observer = new MutationObserver(() => {
      setIsModalOpen(document.body.style.overflow === 'hidden');
    });

    window.addEventListener('scroll', handleScroll);
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ backgroundColor: 'rgba(10,10,10,0)' }}
        animate={{ 
          backgroundColor: isScrolled ? 'rgba(10,10,10,0.8)' : 'rgba(10,10,10,0)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(255,255,255,0)',
          y: isModalOpen ? -100 : 0, // Уводим вверх при открытом видео
          opacity: isModalOpen ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 py-4"
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          
          {/* Logo Area - Text Only */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div>
                <span className="font-bold tracking-tight text-2xl text-white leading-none">
                    MAX<span className="text-red-600">.EDITING</span>
                </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            {NAV_ITEMS.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-6 py-2 rounded-full border border-red-600 text-white font-bold text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.6)] hover:bg-red-600/10 hover:scale-105"
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white ml-auto"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-neutral-950 flex flex-col items-center justify-center space-y-8"
          >
            <button
              className="absolute top-6 right-6 text-neutral-400 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-2xl font-bold transition-colors ${
                  item.id === 'contact' 
                    ? 'text-red-500 hover:text-red-400' 
                    : 'text-white hover:text-red-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-red-600 text-white px-8 py-3 rounded-full text-lg font-bold"
            >
              Написать в Telegram
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
