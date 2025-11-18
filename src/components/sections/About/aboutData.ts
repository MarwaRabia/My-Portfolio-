// src/components/sections/About/aboutData.ts

export interface Stat {
  value: string;
  labelKey: string;
  icon: string;
}

export interface Interest {
  titleKey: string;
  descriptionKey: string;
  icon: string;
  color: string;
}

export interface AboutConfig {
  stats: Stat[];
  interests: Interest[];
  // Placeholder image from public APIs (coding illustration)
  imageUrl: string;
}

export const stats: Stat[] = [
  {
    value: '2+',
    labelKey: 'experience',
    icon: 'calendar',
  },
  {
    value: '20+',
    labelKey: 'projects',
    icon: 'code',
  },
  {
    value: '10+',
    labelKey: 'clients',
    icon: 'users',
  },
  {
    value: '∞',
    labelKey: 'coffee',
    icon: 'coffee',
  },
];

export const interests: Interest[] = [
  {
    titleKey: 'webDev.title',
    descriptionKey: 'webDev.description',
    icon: 'monitor',
    color: '#667eea', // Primary color
  },
  {
    titleKey: 'uiDesign.title',
    descriptionKey: 'uiDesign.description',
    icon: 'palette',
    color: '#764ba2', // Secondary color
  },
  {
    titleKey: 'problemSolving.title',
    descriptionKey: 'problemSolving.description',
    icon: 'lightbulb',
    color: '#f093fb', // Accent color
  },
  {
    titleKey: 'learning.title',
    descriptionKey: 'learning.description',
    icon: 'book',
    color: '#4facfe', // Accent secondary
  },
];

export const aboutConfig: AboutConfig = {
  stats,
  interests,
  imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop',
};