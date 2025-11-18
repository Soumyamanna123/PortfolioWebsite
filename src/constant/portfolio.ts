export interface SearchableItem {
  id: string;
  type:
    | "project"
    | "skill"
    | "experience"
    | "education"
    | "social"
    | "about"
    | "achievement"
    | "page"
    | "resource";
  title: string;
  description: string;
  tags: string[];
  url?: string;
  icon?: string;
  badge?: string;
  metadata?: {
    company?: string;
    position?: string;
    duration?: string;
    platform?: string;
    category?: string;
    [key: string]: any;
  };
}

export const portfolioData: SearchableItem[] = [
  // Pages/Navigation
  {
    id: "page-1",
    type: "page",
    title: "Home",
    description: "Welcome to my forever work-in-progress!",
    tags: ["home", "main", "landing"],
    url: "/",
    icon: "🏠",
    // badge: "Current",
  },
  {
    id: "page-2",
    type: "page",
    title: "Projects",
    description: "Showcase of my projects",
    tags: ["projects", "portfolio", "work"],
    url: "/projects",
    icon: "🎨",
  },

  //   {
  //     id: 'page-4',
  //     type: 'page',
  //     title: 'Guestbook',
  //     description: 'Leave a message for me',
  //     tags: ['guestbook', 'messages', 'contact'],
  //     url: '/guestbook',
  //     icon: '📖'
  //   },
  {
    id: "page-5",
    type: "page",
    title: "Links",
    description: "All my links are here",
    tags: ["links", "social", "connect"],
    url: "/links",
    icon: "🔗",
  },
  {
    id: "page-6",
    type: "page",
    title: "About",
    description: "Learn more about me!",
    tags: ["about", "bio", "me"],
    url: "/about",
    icon: "👤",
  },
  //   {
  //     id: 'page-7',
  //     type: 'page',
  //     title: 'Bucket List',
  //     description: 'Things to do at least once in my life',
  //     tags: ['bucket list', 'goals', 'dreams'],
  //     url: '/bucket-list',
  //     icon: '📋'
  //   },

  // Social Handles
  {
    id: "social-1",
    type: "social",
    title: "GitHub",
    description: "Open-source projects and contributions",
    tags: ["github", "code", "open-source"],
    url: "https://github.com/yourusername",
    icon: "💻",
    metadata: { platform: "GitHub", handle: "@yourusername" },
  },
  {
    id: "social-2",
    type: "social",
    title: "LinkedIn",
    description: "Professional network and career",
    tags: ["linkedin", "professional", "career"],
    url: "https://linkedin.com/in/yourusername",
    icon: "💼",
    metadata: { platform: "LinkedIn" },
  },
  {
    id: "social-3",
    type: "social",
    title: "Twitter",
    description: "Tech insights and daily updates",
    tags: ["twitter", "social", "tech"],
    url: "https://twitter.com/yourusername",
    icon: "🐦",
    metadata: { platform: "Twitter", handle: "@yourusername" },
  },

  // Projects
  {
    id: "project-1",
    type: "project",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce with payment integration",
    tags: ["ecommerce", "react", "nodejs", "stripe"],
    url: "/projects/ecommerce",
    icon: "🛒",
  },
  {
    id: "project-2",
    type: "project",
    title: "AI Content Generator",
    description: "AI-powered content generation tool",
    tags: ["ai", "openai", "nextjs", "machine learning"],
    url: "/projects/ai-content",
    icon: "🤖",
  },

  // Skills
  {
    id: "skill-1",
    type: "skill",
    title: "React & Next.js",
    description: "Expert in modern web development",
    tags: ["react", "nextjs", "javascript", "frontend"],
    url: "/skills#frontend",
    icon: "⚡",
  },
  {
    id: "skill-2",
    type: "skill",
    title: "UI/UX Design",
    description: "User interface and experience design",
    tags: ["ui", "ux", "design", "figma"],
    url: "/skills#design",
    icon: "🎨",
  },

  {
    id: "resume",
    type: "resource",
    title: "Resume",
    description: "View My Resume",
    tags: ["cv", "resume", "portfolio", "biodata"],
    url: "/skills#design",
    icon: "🎨",
  },
];
