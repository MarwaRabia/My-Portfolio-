// src/components/sections/Skills/skillsData.ts

export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: SkillCategory;
}

export type SkillCategory = "frontend" | "backend" | "tools" | "other";

export interface SkillCategoryConfig {
  key: SkillCategory;
  labelKey: string;
  color: string;
}

// Skills Data
export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", color: "#61DAFB", category: "frontend" },
  {
    name: "TypeScript",
    icon: "typescript",
    color: "#3178C6",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    color: "#F7DF1E",
    category: "frontend",
  },
  { name: "HTML5", icon: "html", color: "#E34F26", category: "frontend" },
  { name: "CSS3", icon: "css", color: "#1572B6", category: "frontend" },
  { name: "SCSS", icon: "sass", color: "#CC6699", category: "frontend" },
  // { name: 'Tailwind CSS', icon: 'tailwind', color: '#06B6D4', category: 'frontend' },
  { name: "Redux", icon: "redux", color: "#764ABC", category: "frontend" },
  {
    name: "Bootstrap",
    icon: "bootstrap",
    color: "#6c0ee8",
    category: "frontend",
  },
  // { name: 'Next.js', icon: 'nextjs', color: '#000000', category: 'frontend' },

  // Backend
  {
    name: "ASP.NET Core",
    icon: "dotnet",
    color: "#623697",

    category: "backend",
  },
  // { name: 'Node.js', icon: 'nodejs', color: '#339933', category: 'backend' },
  {
    name: "SQL Server",
    icon: "database",
    color: "#CC2927",
    category: "backend",
  },
  { name: "Firebase", icon: "firebase", color: "#FFCA28", category: "backend" },
  { name: "REST API", icon: "api", color: "#009688", category: "backend" },

  // Tools
  { name: "Git", icon: "git", color: "#F05032", category: "tools" },
  { name: "GitHub", icon: "github", color: "#181717", category: "tools" },
  { name: "VS Code", icon: "vscode", color: "#007ACC", category: "tools" },
  // { name: 'Figma', icon: 'figma', color: '#F24E1E', category: 'tools' },
  { name: "Postman", icon: "postman", color: "#FF6C37", category: "tools" },
  { name: "Swagger", icon: "swagger", color: "#85ea2d", category: "tools" },

  // Other
  {
    name: "Responsive Design",
    icon: "responsive",
    color: "#667eea",
    category: "other",
  },
  {
    name: "Performance",
    icon: "performance",
    color: "#764ba2",
    category: "other",
  },
  {
    name: "Accessibility",
    icon: "accessibility",
    color: "#f093fb",
    category: "other",
  },
];

// Categories Configuration
export const skillCategories: SkillCategoryConfig[] = [
  { key: "frontend", labelKey: "frontend", color: "#667eea" },
  { key: "backend", labelKey: "backend", color: "#764ba2" },
  { key: "tools", labelKey: "tools", color: "#f093fb" },
  { key: "other", labelKey: "other", color: "#4facfe" },
];

// Get skills by category
export const getSkillsByCategory = (category: SkillCategory): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};

// Get all categories with their skills
export const getSkillsGroupedByCategory = () => {
  return skillCategories.map((category) => ({
    ...category,
    skills: getSkillsByCategory(category.key),
  }));
};
