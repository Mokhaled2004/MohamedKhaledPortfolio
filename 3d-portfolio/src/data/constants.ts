export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  PYTHON = "python",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  JENKINS = "jenkins",
  LANGCHAIN = "langchain",
  FLASK = "flask",
  FIREBASE = "firebase",
  SPRINGBOOT = "springboot",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  KUBERNETES = "kubernetes",
  MCP = "mcp",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript's overachieving cousin who's always flexing 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad, still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Hooks, state, and virtual DOMs—it's a lifestyle! ⚛️✨",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 6,
    name: "python",
    label: "Python",
    shortDescription: "indentation is my passion, ssssss! 🐍🔥",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "utility classes hitting different fr fr 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "middlewares go dummy hard, no cap! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL but make it fashion, purr 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.JENKINS]: {
    id: 14,
    name: "jenkins",
    label: "Jenkins",
    shortDescription: "the butler who handles the heavy lifting of CI/CD! 🤖🏗️",
    color: "#D24939",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  },
  [SkillNames.LANGCHAIN]: {
    id: 15,
    name: "langchain",
    label: "LangChain",
    shortDescription: "chaining prompts like a pro, AI go brrr! 🦜🔗",
    color: "#1C3C3C",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-QRqqtRi8EEyMCDcBawEio86I7MpmwMBTw&s",
  },
  [SkillNames.FLASK]: {
    id: 16,
    name: "flask",
    label: "Flask",
    shortDescription: "Python's micro-framework, lightweight and chill! 🌶️🧪",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription: "your app's ultimate wingman, Google style! 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.SPRINGBOOT]: {
    id: 18,
    name: "springboot",
    label: "Spring Boot",
    shortDescription: "Java but make it actually fast and snappy! 🍃⚡",
    color: "#6db33f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "where 'chmod 777' is the ultimate flex 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "It works on my machine... and yours too! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "reverse proxy go zoom zoom, sheesh! 🚗💨",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription: "always extra, making everything more complicated! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription: "cloud computing with those Google vibes! ☁️🔥",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.KUBERNETES]: {
    id: 23,
    name: "kubernetes",
    label: "Kubernetes",
    shortDescription: "orchestrating containers like a maestro! ☸️🚢",
    color: "#326ce5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  [SkillNames.MCP]: {
    id: 24,
    name: "mcp",
    label: "MCP",
    shortDescription: "Model Context Protocol—connecting AI to the world! 🤖🔌",
    color: "#6cc24a",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Model_Context_Protocol_logo.svg", // Using Anthropic as a placeholder for MCP
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Feb 2026",
    endDate: "Present",
    title: "Advanced Generative AI Trainee (RAG and AI Agents)",
    company: "ITI X NVIDIA GenAI Bootcamp",
    description: [
      "Engineered Retrieval-Augmented Generation (RAG) systems using LLMs with vector databases for context-aware responses.",
      "Built multi-step AI agents using LangChain and LangGraph with tool-calling, memory, and reasoning workflows.",
      "Designed end-to-end LLM pipelines including document ingestion, embedding generation, retrieval, and response synthesis.",
      "Optimized prompt strategies and agent flows to reduce hallucinations and improve answer relevance.",
    ],
    skills: [
      SkillNames.LANGCHAIN,
      SkillNames.PYTHON,
      SkillNames.TS,
      SkillNames.MCP,
    ],
  },
  {
    id: 2,
    startDate: "Aug 2025",
    endDate: "Sep 2025",
    title: "Generative AI Intern",
    company: "ITI X NVIDIA",
    description: [
      "Explored Generative AI fundamentals, focusing on prompt engineering and LLM-based development.",
      "Built intelligent conversational agents and chatbots using LangChain and LangGraph frameworks.",
      "Integrated retrieval-augmented generation (RAG) workflows to enhance chatbot contextual accuracy.",
    ],
    skills: [
      SkillNames.LANGCHAIN,
      SkillNames.PYTHON,
      SkillNames.FIREBASE,
    ],
  },
  {
    id: 3,
    startDate: "Aug 2025",
    endDate: "Sep 2025",
    title: "MEAN Stack Development Intern",
    company: "National Telecommunication Institute (NTI)",
    description: [
      "Gained hands-on experience with the complete MEAN stack (MongoDB, Express.js, Angular, Node.js).",
      "Designed and deployed dynamic full-stack web applications with REST APIs and modular architecture.",
      "Collaborated in team-based projects emphasizing clean design, scalability, and responsive UI/UX.",
    ],
    skills: [
      SkillNames.MONGODB,
      SkillNames.EXPRESS,
      SkillNames.NODEJS,
      SkillNames.JS,
      SkillNames.HTML,
      SkillNames.CSS,
    ],
  },
  {
    id: 4,
    startDate: "Jun 2024",
    endDate: "Oct 2024",
    title: "Backend Intern",
    company: "ALX Africa",
    description: [
      "Engineered high-performance APIs with Flask and FastAPI; reduced latency by 35% on critical endpoints.",
      "Boosted database efficiency via optimized indexing in MySQL and MongoDB.",
      "Implemented CI/CD workflows using GitHub Actions and Docker, delivering updates in under 2 minutes.",
      "Worked hands-on with server provisioning, logging, and automated deployments.",
    ],
    skills: [
      SkillNames.FLASK,
      SkillNames.PYTHON,
      SkillNames.MONGODB,
      SkillNames.DOCKER,
      SkillNames.LINUX,
    ],
  },
  {
    id: 5,
    startDate: "Aug 2024",
    endDate: "Oct 2024",
    title: "Backend Engineering Intern",
    company: "In3",
    description: [
      "Built and deployed RESTful APIs using Node.js, Express.js, and MongoDB; reduced average response time by 120ms.",
      "Applied SOLID principles across microservices for cleaner architecture and easier feature rollouts.",
      "Containerized services using Docker to standardize development and cut setup time by 66%.",
    ],
    skills: [
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.DOCKER,
    ],
  },
  {
    id: 6,
    startDate: "Jun 2023",
    endDate: "Jun 2024",
    title: "Full-Stack Software Engineering Intern",
    company: "ALX Africa",
    description: [
      "Built a full-stack Airbnb clone using Flask, SQL, and JavaScript; project ranked top 5 out of 100+.",
      "Practiced TDD with unit and integration tests reaching 90%+ coverage.",
      "Led multiple GitHub group projects, managing branching, PRs, and team reviews.",
    ],
    skills: [
      SkillNames.FLASK,
      SkillNames.PYTHON,
      SkillNames.JS,
      SkillNames.HTML,
      SkillNames.CSS,
    ],
  },
]

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};