// src/components/sections/Projects/projectsData.ts

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  status: ProjectStatus;
}

export type ProjectCategory = "fullstack" | "frontend" | "react" | "html-css";

export type ProjectStatus = "completed" | "inProgress" | "archived";

// Main Projects Data
export const projects: Project[] = [
  // Featured Project 1 - Task Management System
  {
    id: "task-management",
    titleKey: "taskManagement.title",
    descriptionKey: "taskManagement.description",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    technologies: [
      "React",
      "Redux",
      "ASP.NET Core",
      "SQL Server",
      "SignalR",
      "DevExtreme",
      "Swagger",
    ],
    category: "fullstack",
    liveUrl: "https://task-management-livid-theta.vercel.app/", // Add your live URL
    githubUrl: "https://github.com/MarwaRabia/Task-management-system", // Add your GitHub URL
    featured: true,
    year: 2024,
    status: "completed",
  },

  // Featured Project 2 - TechBooks Store
  {
    id: "techbooks-store",
    titleKey: "techbooksStore.title",
    descriptionKey: "techbooksStore.description",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=600&fit=crop",
    technologies: [
      "React",
      "Firebase",
      "SCSS",
      "Context API",
      "Google Books API",
      "Google OAuth",
    ],
    category: "react",
    liveUrl: "", // Add your Vercel URL
    githubUrl: "",
    featured: true,
    year: 2024,
    status: "completed",
  },

  // Project 3 - QuizMe
  {
    id: "quizme",
    titleKey: "quizme.title",
    descriptionKey: "quizme.description",
    image:
      "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?w=800&h=600&fit=crop",
    technologies: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "RTL"],
    category: "frontend",
    liveUrl: "", // Add your live URL
    githubUrl: "",
    featured: false,
    year: 2023,
    status: "completed",
  },

  // Project 4 - HTML CSS Template 03
  {
    id: "html-template-03",
    titleKey: "htmlTemplate03.title",
    descriptionKey: "htmlTemplate03.description",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    technologies: [
      "HTML5",
      "CSS3",
      "Flexbox",
      "CSS Grid",
      "CSS Animations",
      "Responsive Design",
    ],
    category: "html-css",
    liveUrl: "", // Add your live URL
    githubUrl: "",
    featured: false,
    year: 2023,
    status: "completed",
  },

  // Project 5 - Casper Template
  {
    id: "casper-template",
    titleKey: "casperTemplate.title",
    descriptionKey: "casperTemplate.description",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    technologies: [
      "HTML5",
      "CSS3",
      "Flexbox",
      "CSS Grid",
      "Media Queries",
      "Responsive Design",
    ],
    category: "html-css",
    liveUrl: "", // Add your live URL
    githubUrl: "",
    featured: false,
    year: 2023,
    status: "completed",
  },
];

// Filter categories configuration
export const projectCategories = [
  { key: "all", labelKey: "all" },
  { key: "fullstack", labelKey: "fullstack" },
  { key: "react", labelKey: "react" },
  { key: "frontend", labelKey: "frontend" },
  { key: "html-css", labelKey: "htmlCss" },
];

// Get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

// Get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};

// Sort projects by year (newest first)
export const getSortedProjects = (): Project[] => {
  return [...projects].sort((a, b) => b.year - a.year);
};
