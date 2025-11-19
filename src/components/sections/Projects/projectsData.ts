export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  technologies: string[];
  category: ProjectCategory[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  status: ProjectStatus;
}

export type ProjectCategory = "fullstack" | "react" | "early-works";

export type ProjectStatus = "completed" | "inProgress" | "archived";

// Main Projects Data
export const projects: Project[] = [
  // Featured Project 1 - Task Management System
  {
    id: "task-management",
    titleKey: "taskManagement.title",
    descriptionKey: "taskManagement.description",
    image:
      // "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      "https://raw.githubusercontent.com/MarwaRabia/Task-management-system/main/src/assets/login.png",
    technologies: [
      "React",
      "Redux",
      "ASP.NET Core",
      "SQL Server",
      "SignalR",
      "DevExtreme",
      "Swagger",
    ],
    category: ["fullstack", "react"],
    liveUrl: "https://task-management-livid-theta.vercel.app/", // Add your live URL
    githubUrl: "https://github.com/MarwaRabia/Task-management-system", // Add your GitHub URL
    featured: true,
    year: 2025,
    status: "completed",
  },

  // Featured Project 2 - TechBooks Store
  {
    id: "techbooks-store",
    titleKey: "techbooksStore.title",
    descriptionKey: "techbooksStore.description",
    image:
      "https://github.com/MarwaRabia/Tech-Book-Store/raw/main/src/assets/home.jpg",
    technologies: [
      "React",
      "Firebase",
      "SCSS",
      "Context API",
      "Google Books API",
      "Google OAuth",
    ],
    category: ["react"],
    liveUrl: "https://tech-book-store.vercel.app/", // Add your Vercel URL
    githubUrl: "https://github.com/MarwaRabia/Tech-Book-Store",
    featured: true,
    year: 2025,
    status: "completed",
  },

  // Project 3 - QuizMe
  {
    id: "quizme",
    titleKey: "quizme.title",
    descriptionKey: "quizme.description",
    image:
      // "https://raw.githubusercontent.com/MarwaRabia/QuizMe/refs/heads/main/images/image_1.png",
      "https://raw.githubusercontent.com/MarwaRabia/QuizMe/main/images/image_1.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "RTL"],
    category: ["early-works"],
    liveUrl: "https://marwarabia.github.io/QuizMe/",
    githubUrl: "https://github.com/MarwaRabia/QuizMe",
    featured: false,
    year: 2025,
    status: "completed",
  },
  // Project 4 - adviceGenerator

  {
    id: "adviceGenerator",
    titleKey: "adviceGenerator.title",
    descriptionKey: "adviceGenerator.description",
    image:
      "https://raw.githubusercontent.com/MarwaRabia/Advice-generator-app/main/preview.jpg",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "API Integration",
      "Responsive Design",
    ],
    category: ["early-works"], // أو "early-works" زي ما تحبي
    liveUrl: "https://marwarabia.github.io/Advice-generator-app/",
    githubUrl: "https://github.com/MarwaRabia/Advice-generator-app",
    featured: false,
    year: 2025,
    status: "completed",
  },
  // Project 4 - HTML CSS Template 03
  {
    id: "html-template-03",
    titleKey: "htmlTemplate03.title",
    descriptionKey: "htmlTemplate03.description",
    image:
      "https://raw.githubusercontent.com/MarwaRabia/template-3-HTML-CSS-/master/images/articles.png",
    technologies: [
      "HTML5",
      "CSS3",
      "Flexbox",
      "CSS Grid",
      "CSS Animations",
      "Responsive Design",
    ],
    category: ["early-works"],
    liveUrl: "https://template-3-html-css-flax.vercel.app/", // Add your live URL
    githubUrl: "https://github.com/MarwaRabia/template-3-HTML-CSS-",
    featured: false,
    year: 2025,
    status: "completed",
  },

  // Project 5 - Casper Template
  {
    id: "casper-template",
    titleKey: "casperTemplate.title",
    descriptionKey: "casperTemplate.description",
    image:
      "https://raw.githubusercontent.com/MarwaRabia/Kasper-Creative-PSD-Template/main/images/screenshots/landing.jpg",
    technologies: [
      "HTML5",
      "CSS3",
      "Flexbox",
      "CSS Grid",
      "Media Queries",
      "Responsive Design",
    ],
    category: ["early-works"],
    liveUrl: "https://marwarabia.github.io/Kasper-Creative-PSD-Template/", // Add your live URL
    githubUrl: "https://github.com/MarwaRabia/Kasper-Creative-PSD-Template",
    featured: false,
    year: 2025,
    status: "completed",
  },
  {
    id: "recipePage",
    titleKey: "recipePage.title",
    descriptionKey: "recipePage.description",
    image:
      "https://raw.githubusercontent.com/MarwaRabia/Recipe-page/master/preview.jpg",
    technologies: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "CSS Custom Properties",
      "Mobile-First",
    ],
    category: ["early-works"],
    liveUrl: "https://recipe-page-beta-two.vercel.app/",
    githubUrl: "https://github.com/MarwaRabia/Recipe-page",
    featured: false,
    year: 2025,
    status: "completed",
  },

  {
    id: "ageCalculator",
    titleKey: "ageCalculator.title",
    descriptionKey: "ageCalculator.description",
    image:
      "https://raw.githubusercontent.com/MarwaRabia/Age-calculator-app/master/preview.jpg",
    technologies: [
      "HTML5",
      "CSS3",
      "Vanilla JavaScript",
      "Date API",
      "Form Validation",
      "Animations",
    ],
    category: ["early-works"],
    liveUrl: "https://age-calculator-app-one-sigma.vercel.app/",
    githubUrl: "https://github.com/MarwaRabia/Age-calculator-app",
    featured: false,
    year: 2025,
    status: "completed",
  },
  {
    id: "perfumeCard",
    titleKey: "perfumeCard.title",
    descriptionKey: "perfumeCard.description",
    image:
      "https://raw.githubusercontent.com/MarwaRabia/Perfume-preview-card/main/design/desktop-preview.jpg",
    technologies: [
      "HTML5",
      "CSS3",
      "Flexbox",
      "Responsive Design",
      "Mobile-First",
    ],
    category: ["early-works"],
    liveUrl: "https://marwarabia.github.io/Perfume-preview-card/",
    githubUrl: "https://github.com/MarwaRabia/Perfume-preview-card",
    featured: false,
    year: 2025,
    status: "completed",
  },
];

// Filter categories configuration
export const projectCategories = [
  { key: "all", labelKey: "all" },
  { key: "fullstack", labelKey: "fullstack" },
  { key: "react", labelKey: "react" },
  { key: "early-works", labelKey: "early-works" },
];

// Get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

// Get projects by category
// export const getProjectsByCategory = (category: string): Project[] => {
//   if (category === "all") return projects;
//   return projects.filter((project) => project.category.includes(category));
// };
export const getProjectsByCategory = (
  category: "all" | ProjectCategory
): Project[] => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category.includes(category));
};

// Sort projects by year (newest first)
export const getSortedProjects = (): Project[] => {
  return [...projects].sort((a, b) => b.year - a.year);
};
