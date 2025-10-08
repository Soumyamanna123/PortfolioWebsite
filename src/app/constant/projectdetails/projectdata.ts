export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  domain: string;
  video?: string; // Optional video URL
  stack: string[]; // Tech stack
  github?: string; // GitHub link
  liveUrl?: string; // Live demo URL
  duration: string; // e.g., "3 months (2023)"
  challenges: {
    title: string; // e.g., "Authentication Issues"
    solution: string; // How you solved it
  }[];
  features?: {
    title: string;
    description: string;
  }[];
  gallery?: string[]; // Screenshot URLs
}

  export interface ProjectsSectionProps {
    maxItems?: number; // Optional limit for homepage preview
  }

  export const projects: Project[] = [
    {
      id: "1",
      slug: "ecommerce-app",
      title: "E-Commerce App",
      shortDescription: "A full-featured e-commerce platform built with Next.js and Stripe.",
      fullDescription: "This app includes product listings, cart functionality, user authentication, and payment processing with Stripe. Admins can manage inventory and orders.",
      image: "/images/assets/ai-startup-landing-page.png",
      domain: "Frontend",
      video: "https://www.youtube.com/watch?v=example1",
      stack: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/yourname/ecommerce-app",
      liveUrl: "https://ecommerce.yoursite.com",
      duration: "3 months (2023)",
      challenges: [
        {
          title: "Secure Payment Integration",
          solution: "Used Stripe’s SDK and Webhooks for secure checkout and payment verification."
        }
      ],
      features: [
        { title: "Product Search", description: "Implemented full-text search and filters." },
        { title: "Admin Dashboard", description: "Role-based access to manage products and orders." }
      ],
      gallery: ["/images/projects/ecommerce1.png", "/images/projects/ecommerce2.png"]
    },
    {
      id: "2",
      slug: "social-media-app",
      title: "Social Media App",
      shortDescription: "A real-time social media platform using Firebase and React.",
      fullDescription: "This app allows users to post updates, follow others, and chat in real time. Built for scalability using Firebase Firestore and authentication.",
      image: "/images/assets/ai-startup-landing-page.png",
      domain: "Frontend",
      stack: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/yourname/social-media-app",
      liveUrl: "https://social.yoursite.com",
      duration: "2.5 months (2022)",
      challenges: [
        {
          title: "Real-Time Updates",
          solution: "Used Firestore listeners to sync updates across users instantly."
        }
      ],
      features: [
        { title: "Live Feed", description: "Real-time feed updates as users post." },
        { title: "Direct Messaging", description: "One-to-one chat with Firebase Realtime Database." }
      ],
      gallery: ["/images/projects/social1.png", "/images/projects/social2.png"]
    },
    {
      id: "3",
      slug: "portfolio-site",
      title: "Personal Portfolio",
      shortDescription: "A modern developer portfolio built with Next.js and markdown.",
      fullDescription: "Showcases projects, blogs, and contact form. Built for performance and easy content updates using markdown and static generation.",
      image: "/images/assets/ai-startup-landing-page.png",
      domain: "Frontend",
      stack: ["Next.js", "Markdown", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/yourname/portfolio",
      liveUrl: "https://yourname.dev",
      duration: "1 month (2023)",
      challenges: [
        {
          title: "SEO Optimization",
          solution: "Implemented proper meta tags, sitemap, and Open Graph protocol."
        }
      ],
      features: [
        { title: "Blog System", description: "Markdown-based blog with code highlighting." },
        { title: "Animations", description: "Page transitions with Framer Motion." }
      ],
      gallery: ["/images/projects/portfolio1.png", "/images/projects/portfolio2.png"]
    },
    {
      id: "4",
      slug: "chat-app",
      title: "Real-Time Chat App",
      shortDescription: "Socket.IO powered chat app with rooms and typing indicators.",
      fullDescription: "Users can join public or private rooms and chat in real-time. Includes typing indicators and notifications.",
      image: "/images/assets/ai-startup-landing-page.png",
      domain: "Frontend",
      stack: ["React", "Node.js", "Socket.IO", "Express", "MongoDB"],
      github: "https://github.com/yourname/chat-app",
      liveUrl: "https://chat.yoursite.com",
      duration: "2 months (2023)",
      challenges: [
        {
          title: "Managing Socket Connections",
          solution: "Used Socket.IO namespaces and rooms to manage channels effectively."
        }
      ],
      features: [
        { title: "Typing Indicators", description: "See when someone is typing in real-time." },
        { title: "Private Rooms", description: "Password-protected chat rooms." }
      ],
      gallery: ["/images/projects/chat1.png", "/images/projects/chat2.png"]
    },
    {
      id: "5",
      slug: "task-manager",
      title: "Task Manager",
      shortDescription: "A full-stack productivity app for managing tasks and deadlines.",
      fullDescription: "Users can create, update, and delete tasks. Built with MERN stack and JWT auth.",
      image: "/images/assets/ai-startup-landing-page.png",
      domain: "Frontend",
      stack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      github: "https://github.com/yourname/task-manager",
      liveUrl: "https://tasks.yoursite.com",
      duration: "1.5 months (2022)",
      challenges: [
        {
          title: "User Authentication",
          solution: "Implemented JWT-based auth with refresh tokens and role-based access."
        }
      ],
      features: [
        { title: "Task Scheduling", description: "Set due dates, reminders, and priorities." },
        { title: "Responsive UI", description: "Optimized for both desktop and mobile devices." }
      ],
      gallery: ["/images/projects/task1.png", "/images/projects/task2.png"]
    }
  ];
  