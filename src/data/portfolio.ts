// Portfolio Configuration - Edit this file to customize your portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'self-projects' | 'hackathon' | 'weekend-vibes' | 'certificates';
  year: number;
  certificateUrl?: string; // Added for hackathon projects
  status: 'completed' | 'in-progress' | 'coming-soon'; // Project status indicator
}

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  publishDate: string;
  link: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'other';
  icon: string; // Lucide icon name
  color: string; // Color for the glass box
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  available: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  grade?: string;
  description?: string;
}

export interface CodingPlatform {
  name: string;
  username: string;
  url: string;
  icon: string;
  color: string;
  stats: {
    problemsSolved?: number;
    rating?: number;
    rank?: string;
    streak?: number;
    contests?: number;
  };
  achievements?: string[];
  languages?: string[];
}

// Personal Information
export const personalInfo = {
  name: "Yuvraj Zende",
  title: "AI/ML Engineer in the Making",
  subtitle: "Passionate about the intersection of technology, intelligence, and innovation",
  location: "India",
  email: "yuvraj.zende@example.com",
  bio: `Hi, I’m Yuvraj Zende, a passionate and self-driven AI/ML engineer in the making, currently pursuing my undergraduate degree. I’m deeply fascinated by the intersection of technology, intelligence, and innovation — and I love building ideas that combine them all.

My learning journey spans across machine learning, computer vision, web development, and data structures, with a strong focus on turning skills into real-world applications. Whether it’s building models, designing web apps, or solving logic-heavy problems, I enjoy diving deep and creating things that matter.

I believe in continuous learning, rapid experimentation, and aiming high — both in tech and life. My current goal is to become a machine learning engineer specializing in quantitative finance within the next year, while also building a solid portfolio of skills, tools, and projects.

"I'm not just learning how to build things — I'm preparing to build the future."`,
  avatar: "/profile-photo.jpg",
  available: true,
};

// Skills
export const skills: Skill[] = [
  // Programming & Scripting
  { name: "Python (ML, OOP, DSA)", level: 90, category: "backend", icon: "Code", color: "blue" },
  { name: "Java (DSA practice)", level: 70, category: "backend", icon: "Cpu", color: "purple" },
  { name: "SQL (MySQL)", level: 75, category: "database", icon: "Database", color: "green" },
  { name: "HTML, CSS, JavaScript", level: 65, category: "frontend", icon: "Globe", color: "orange" },
  // AI & Machine Learning
  { name: "Machine Learning Fundamentals", level: 80, category: "backend", icon: "Brain", color: "indigo" },
  { name: "Model Building & Evaluation", level: 75, category: "backend", icon: "BarChart3", color: "teal" },
  { name: "OpenCV (Computer Vision)", level: 70, category: "backend", icon: "Eye", color: "pink" },
  { name: "TensorFlow (Deep Learning)", level: 65, category: "backend", icon: "Network", color: "red" },
  { name: "OCR (pytesseract, CNN)", level: 60, category: "backend", icon: "FileText", color: "yellow" },
];

// Projects - Add, edit, or delete projects here
export const projects: Project[] = [
  // Self Projects
  {
    "id": "self-1",
    "title": "Visual Math Solver",
    "description": "An AI-powered web app where users can draw math problems, which are then solved using OCR, Computer Vision, and Symbolic Math engines. Combines TrOCR, OpenCV, and SymPy for end-to-end handwritten expression solving.",
    "image": "/project-images/visual-math.jpg",
    "technologies": ["Flask", "TrOCR", "OpenCV", "SymPy", "HTML", "CSS", "JavaScript"],
    "githubUrl": "https://github.com/YuvrajZende",
    "liveUrl": "",
    "featured": true,
    "category": "self-projects",
    "year": 2025,
    "status": "in-progress"
  },
  {
    id: "self-3",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with dark mode, smooth animations, and SEO optimization.",
    image: "/project-images/portfolio.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.com",
    featured: false,
    category: "self-projects",
    year: 2024,
    status: "completed"
  },

  // Hackathon Projects
  {
    "id": "weekend-4",
    "title": "Maternal Health Predictor",
    "description": "A Flask-based web app that predicts maternal health risk levels using clinical data and AI via Gemini, with a clean and user-friendly interface.",
    "image": "/project-images/maternal-health.jpg",
    "technologies": ["Flask", "Gemini", "HTML", "CSS", "JavaScript"],
    "githubUrl": "https://github.com/YuvrajZende/Maternal_health_system",
    "liveUrl": "",
    "featured": true,
    "category": "hackathon",
    "year": 2025,
    status: "completed"
  },  
  
  // Weekend Vibes Projects
  {
    id: "sanskrit-1",
    title: "Sanskrit Syntax Sorcery",
    description: "A Sanskrit interpreter that parses and evaluates input based on grammar rules, blending classical language with modern logic.",
    image: "/project-images/sanskrit.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Custom Parser"],
    githubUrl: "https://github.com/YuvrajZende/sanskrit-syntax-sorcery",
    liveUrl: "https://sanskrit-syntax-sorcery.vercel.app/", 
    featured: true,
    category: "weekend-vibes",
    year: 2024,
    status: "completed"
  },
  {
    "id": "weekend-2",
    "title": "Dowry & Alimony Analyzer",
    "description": "An AI-powered legal analysis tool that classifies and interprets dowry and alimony case data using NLP and modern web technologies.",
    "image": "/project-images/dowry-alimony.jpg",
    "technologies": ["Vite", "TypeScript", "React", "Tailwind CSS", "shadcn/ui"],
    "githubUrl": "https://github.com/YuvrajZende/dowry-alimony-shenanigans",
    "liveUrl": "https://dowry-alimony-shenanigans-git-main-yuvrajzendes-projects.vercel.app/",
    "featured": true,
    category: "weekend-vibes",
    year: 2025,
    status: "completed"
  },

  // Certificates
  {
    id: "cert-1",
    title: "Prompt Engineering Mastery",
    description: "Completed the Prompt Engineering course on Udemy, gaining hands-on experience in crafting effective prompts for large language models like GPT. Explored techniques for improving output quality, fine-tuning, and applying prompts in real-world scenarios.",
    image: "/images/certificates/prompt-engineering.png", // Update the image path if needed
    technologies: ["Prompt Engineering", "AI", "GPT", "LLMs"],
    githubUrl: "https://github.com/YuvrajZende", // Optional: link to any relevant project or repo
    liveUrl: "https://www.udemy.com/course/complete-ai-guide", // The actual course URL
    featured: true,
    category: "certificates",
    year: 2024,
    status: "completed"
  },
  {
    id: "cert-2",
    title: "Machine Learning A-Z™",
    description: "Completed the Machine Learning A-Z course on Udemy, covering end-to-end concepts including regression, classification, clustering, NLP, deep learning, and reinforcement learning. Gained hands-on experience with real-world case studies using Python and R, and built practical ML models with libraries like scikit-learn, TensorFlow, and Keras.",
    image: "/images/certificates/machine-learning-az.png", // Updated image path
    technologies: [
      "Python", 
      "R", 
      "Machine Learning", 
      "Deep Learning", 
      "NLP", 
      "Reinforcement Learning", 
      "scikit-learn", 
      "TensorFlow", 
      "Keras", 
      "XGBoost"
    ],
    githubUrl: "https://github.com/YuvrajZende", // Optional: link to your project repo
    liveUrl: "https://www.udemy.com/course/machinelearning/", // Updated course URL
    featured: true,
    category: "certificates",
    year: 2024,
    status: "in-progress"
  },  
  {
    id: "cert-2",
    title: "The Complete Web Development Bootcamp",
    description: "Completed Angela Yu’s Web Development Bootcamp on Udemy, gaining full-stack development skills using HTML, CSS, JavaScript, Node.js, Express, EJS, MongoDB, Mongoose, APIs, Git, and more. Built real-world projects including a blog, authentication systems, and RESTful applications.",
    image: "/images/certificates/web-dev-bootcamp.png", // Replace with your certificate image if available
    technologies: [
      "HTML", 
      "CSS", 
      "JavaScript", 
      "Node.js", 
      "Express", 
      "MongoDB", 
      "EJS", 
      "REST APIs", 
      "Git", 
      "Bootstrap"
    ],
    githubUrl: "https://github.com/YuvrajZende", // Optional: link to your project or coursework
    liveUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    featured: true,
    category: "certificates",
    year: 2024,
    status: "in-progress"
  }  
];

// Articles - Add, edit, or delete articles here
export const articles: Article[] = [
  {
    id: "article-1",
    title: "Building Scalable React Applications",
    description: "Learn the best practices for building large-scale React applications that are maintainable and performant.",
    image: "/assets/database-article.jpg",
    readTime: "5 min read",
    publishDate: "2024-01-15",
    link: "https://yourblog.com/react-scalability",
    featured: true
  },
  {
    id: "article-2",
    title: "The Future of Web Development",
    description: "Exploring emerging technologies and trends that will shape the future of web development.",
    image: "/assets/education-article.jpg",
    readTime: "8 min read",
    publishDate: "2024-01-10",
    link: "https://yourblog.com/future-web-dev",
    featured: true
  }
];

// Social Links
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/YuvrajZende",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yuvraj-zende-9142a82a5/",
    icon: "linkedin"
  },
  {
    name: "Twitter",
    url: "https://x.com/Yuvraj_zende28",
    icon: "twitter"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/aion.28/",
    icon: "instagram"
  },
  {
    name: "Email",
    url: "mailto:yuvrajzende01@gmail.com",
    icon: "mail"
  }
];

// Contact Information
export const contactInfo: ContactInfo = {
  email: "yuvrajzende01@gmail.com",
  location: "Belgavi, India",
  available: true
};

// Education
export const education: Education[] = [
  {
    institution: "Parul Institute of Technology",
    degree: "B-Tech in AI & ML",
    field: "Artificial Intelligence & Machine Learning",
    startYear: 2023,
    grade: "8.1 CGPA",
    description: "Pursuing undergraduate studies with a focus on AI and ML"
  },
  {
    institution: "Kendriya Vidyalaya",
    degree: "Pre-University Course (PUC)",
    field: "Science (PCMB)",
    startYear: 2021,
    endYear: 2023,
    grade: "78%",
    description: "Completed PUC with a focus on Physics, Chemistry, Mathematics, and Computer Science."
  }
];

// Coding Platforms
export const codingPlatforms: CodingPlatform[] = [
  {
    name: "LeetCode",
    username: "yuvraj_zende",
    url: "https://leetcode.com/u/yuvraj_zende/",
    icon: "Code",
    color: "orange",
    stats: {
      problemsSolved: 150,
      rating: 1438,
      rank: "Good",
      streak: 47,
      contests: 10
    },
    achievements: ["50 Days Badge", "Contest Participant", "Problem Solver"],
    languages: ["Python", "Java", "C++"]
  },
  {
    name: "CodeChef",
    username: "yuvraj_zende",
    url: "https://www.codechef.com/users/yuvrajzende287",
    icon: "Trophy",
    color: "green",
    stats: {
      problemsSolved: 85,
      rating: 1410,
      rank: "2★",
      contests: 8
    },
    achievements: ["3 Star Coder", "Long Challenge Participant", "Cook-Off Regular"],
    languages: ["Python", "Java", "C++"]
  },
];

// Navigation Configuration
export const navigation = {
  items: [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "About", href: "/about", icon: "👤" },
    { name: "Projects", href: "/projects", icon: "💼" },
    { name: "Connect", href: "/connect", icon: "📞" }
  ]
};

// Site Configuration
export const siteConfig = {
  title: "Personal Portfolio",
  description: "Personal portfolio website showcasing projects and skills",
  url: "https://your-portfolio.com",
  author: "Your Name",
  theme: {
    primaryColor: "#3b82f6",
    secondaryColor: "#1e40af"
  }
}; 