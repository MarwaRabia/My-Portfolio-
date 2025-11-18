
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface HeroConfig {
  socialLinks: SocialLink[];
  particlesCount: number;
  typingConfig: {
    typingSpeed: number;
    deletingSpeed: number;
    pauseDuration: number;
  };
}

// Social Links - Update these with your real links
export const socialLinks: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/yourusername',
    icon: 'github',
    ariaLabel: 'GitHub Profile',
  },
  {
    name: 'linkedin',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin',
    ariaLabel: 'LinkedIn Profile',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'twitter',
    ariaLabel: 'Twitter Profile',
  },
];

// Configuration
export const heroConfig: HeroConfig = {
  socialLinks,
  particlesCount: 50,
  typingConfig: {
    typingSpeed: 150,
    deletingSpeed: 50,
    pauseDuration: 2000,
  },
};

// Particles generation helper
export const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: 20 + Math.random() * 20,
    delay: Math.random() * 5,
  }));
};