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
    icon: "email",
    label: "email",
    value: "marwarabia369@gmail.com",
    link: "mailto:marwarabia369@gmail.com",
  },
  {
    icon: "location",
    label: "location",
    value: "Cairo, Egypt",
  },
  {
    icon: "phone",
    label: "phone",
    value: "+20 112 103 5855",
    link: "tel:+201121035855",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com/MarwaRabia",
    color: "#333333",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/marwarabia/",
    color: "#0077B5",
  },
  {
    name: "Twitter",
    icon: "twitter",
    url: "",
    color: "#1DA1F2",
  },
  // {
  //   name: 'Facebook',
  //   icon: 'facebook',
  //   url: 'https://facebook.com/yourusername',
  //   color: '#1877F2',
  // },
  // {
  //   name: 'Instagram',
  //   icon: 'instagram',
  //   url: 'https://instagram.com/yourusername',
  //   color: '#E4405F',
  // },
];

export const getSocialLinks = (): SocialLink[] => socialLinks;
export const getContactInfo = (): ContactInfo[] => contactInfo;
