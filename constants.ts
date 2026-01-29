
import { NavItem, Project } from './types';

export const AVATAR_URL = "avatar.jpg"; 

export const TELEGRAM_USERNAME = "Max_editingg";
export const TELEGRAM_LINK = `https://t.me/${TELEGRAM_USERNAME}`;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Главная', id: 'home' },
  { label: 'Портфолио', id: 'portfolio' },
  { label: 'Цены', id: 'pricing' },
  { label: 'Q&A', id: 'faq' },
  { label: 'Контакты', id: 'contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 'v3',
    title: 'Динамичный монтаж',
    category: 'Reels',
    format: 'vertical',
    thumbnailUrl: 'https://i.postimg.cc/SQGcCG05/pp.png', 
    videoUrl: 'https://kinescope.io/x2rDeK5fzetQeoNUPnwaqY'
  },
  {
    id: 'v1',
    title: 'Экспертный контент',
    category: 'Reels',
    format: 'vertical',
    thumbnailUrl: 'https://i.postimg.cc/gJsrXNw3/p.png',
    videoUrl: 'https://kinescope.io/v5RaPafyoi9eQSWhKiv6Fq'
  },
  {
    id: 'v2',
    title: 'Креативный Reels',
    category: 'Reels',
    format: 'vertical',
    thumbnailUrl: 'https://i.postimg.cc/FFP7hCX5/ppp.png',
    videoUrl: 'https://kinescope.io/8VB5yReS6TdVsBRy9HwH3d'
  },
  {
    id: 'v4',
    title: 'Motion Design',
    category: 'Reels',
    format: 'vertical',
    thumbnailUrl: 'https://i.postimg.cc/LsMsxrLh/pppp.png',
    videoUrl: 'https://kinescope.io/uKzXdevqhECVa1rLiBCCzU'
  },
];
