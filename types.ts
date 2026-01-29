export type VideoFormat = 'horizontal' | 'vertical';

export interface Project {
  id: string;
  title: string;
  category: string;
  format: VideoFormat;
  thumbnailUrl: string; // Placeholder for the poster
  videoUrl?: string; // Optional: Link to VK/Kinescope/YouTube
}

export interface NavItem {
  label: string;
  id: string;
}