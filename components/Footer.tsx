import React from 'react';
import { TELEGRAM_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Spacer to keep layout balanced if needed, or just remove left side */}
        <div className="hidden md:block"></div>

        <div className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Все права защищены.
        </div>

        <div className="flex gap-6">
          {/* Link removed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;