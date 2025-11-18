// src/components/sections/Contact/contactData.ts

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: 'email',
    label: 'email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com',
  },
  {
    icon: 'location',
    label: 'location',
    value: 'Cairo, Egypt',
  },
  {
    icon: 'phone',
    label: 'phone',
    value: '+20 123 456 7890',
    link: 'tel:+201234567890',
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: 'github',
    url: 'https://github.com/yourusername',
    color: '#333333',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://linkedin.com/in/yourusername',
    color: '#0077B5',
  },
  {
    name: 'Twitter',
    icon: 'twitter',
    url: 'https://twitter.com/yourusername',
    color: '#1DA1F2',
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    url: 'https://facebook.com/yourusername',
    color: '#1877F2',
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    url: 'https://instagram.com/yourusername',
    color: '#E4405F',
  },
];

export const getSocialLinks = (): SocialLink[] => socialLinks;
export const getContactInfo = (): ContactInfo[] => contactInfo;