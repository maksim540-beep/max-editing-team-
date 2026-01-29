
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Play, X } from 'lucide-react';

const getKinescopeId = (url?: string) => {
  if (!url || !url.includes('kinescope.io')) return null;
  try {
    const cleanUrl = url.split('?')[0].replace(/\/$/, "");
    const parts = cleanUrl.split('/');
    return parts.pop() || null;
  } catch (e) {
    return null;
  }
};

const getEmbedUrl = (url?: string) => {
  const id = getKinescopeId(url);
  if (id) return `https://kinescope.io/embed/${id}?autoplay=1&dnt=1`;
  return url;
};

const Portfolio: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedId]);

  return (
    <section id="portfolio" className="py-24 bg-neutral-950 relative">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши работы</h2>
          <p className="text-neutral-400 max-w-lg">
            Выберите проект для просмотра в плеере высокого качества. Оцените динамику, звук и визуальные эффекты.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <VideoCard 
              key={project.id}
              project={project} 
              onClick={() => setSelectedId(project.id)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <VideoModal 
            project={selectedProject} 
            onClose={() => setSelectedId(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const VideoModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const embedUrl = getEmbedUrl(project.videoUrl);
  const isVertical = project.format === 'vertical';

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className={`relative z-10 w-full overflow-hidden rounded-2xl border border-neutral-800 bg-black shadow-2xl ${
          isVertical ? 'max-w-[400px] aspect-[9/16]' : 'max-w-5xl aspect-video'
        }`}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-all shadow-lg active:scale-95"
        >
          <X size={20} />
        </button>

        <div className="w-full h-full bg-neutral-900">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-neutral-500">Видео недоступно</div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const VideoCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  const isVertical = project.format === 'vertical';
  const displayThumbnail = project.thumbnailUrl || `https://kinescope.io/${getKinescopeId(project.videoUrl)}/poster`;

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -5 }}
      className="group relative cursor-pointer"
    >
      <div className={`relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 transition-all duration-500 group-hover:border-red-600/50 ${
        isVertical ? 'aspect-[9/16]' : 'aspect-video'
      }`}>
        <img 
          src={displayThumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent flex flex-col justify-end p-6">
          <span className="text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">{project.category}</span>
          <h3 className="text-white font-bold text-lg md:text-xl">{project.title}</h3>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl scale-75 group-hover:scale-100 transition-transform">
            <Play size={32} className="fill-white ml-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
