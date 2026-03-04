"use client";
import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { 
  ArrowUpRight, 
  ChevronRight, 
  Cpu, 
  Layout, 
  Lock, 
  Pin, 
  Target, 
  Terminal, 
  Zap 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiFastapi, 
  SiOpenai
} from "react-icons/si";
import { Database, Brain, Link2 } from "lucide-react";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"outline"} size={"sm"}>
            Visit Github
            <SiGithub className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  chakra: { title: "Chakra UI", bg: "black", fg: "white", icon: <SiChakraui /> },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  prisma: { title: "prisma", bg: "black", fg: "white", icon: <SiPrisma /> },
  postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
  mongo: { title: "MongoDB", bg: "black", fg: "white", icon: <SiMongodb /> },
  express: { title: "Express", bg: "black", fg: "white", icon: <SiExpress /> },
  reactQuery: { title: "React Query", bg: "black", fg: "white", icon: <SiReactquery /> },
  shadcn: { title: "ShanCN UI", bg: "black", fg: "white", icon: <SiShadcnui /> },
  aceternity: { title: "Aceternity", bg: "black", fg: "white", icon: <AceTernityLogo /> },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
  yjs: { title: "Y.js", bg: "black", fg: "white", icon: <span><strong>Y</strong>js</span> },
  firebase: { title: "Firebase", bg: "black", fg: "white", icon: <SiFirebase /> },
  sockerio: { title: "Socket.io", bg: "black", fg: "white", icon: <SiSocketdotio /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  vue: { title: "Vue.js", bg: "black", fg: "white", icon: <SiVuedotjs /> },
  react: { title: "React.js", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  sanity: { title: "Sanity", bg: "black", fg: "white", icon: <SiSanity /> },
  spline: { title: "Spline", bg: "black", fg: "white", icon: <SiThreedotjs /> },
  gsap: { title: "GSAP", bg: "black", fg: "white", icon: "" },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
  supabase: { title: "Supabase", bg: "black", fg: "white", icon: <SiSupabase /> },
  fastapi: { title: "FastAPI", bg: "black", fg: "white", icon: <SiFastapi /> },
  chroma: { 
      title: "Chroma DB", 
      bg: "black", 
      fg: "white", 
      icon: <Database className="w-4 h-4" /> 
    },
  ollama: { title: "Ollama", bg: "black", fg: "white", icon: <Brain className="w-4 h-4" /> },
  gpt: { title: "GPT-4", bg: "black", fg: "white", icon: <SiOpenai /> },
  langchain: { title: "LangChain", bg: "black", fg: "white", icon: <Link2 className="w-4 h-4" /> },

};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
{
    id: "fitpulse",
    category: "Health & Fitness",
    title: "Fit Pulse",
    src: "/assets/projects-screenshots/fitpulse/landing.png", // Ensure this folder exists
    screenshots: ["1.png", "2.png", "3.png"],
    github: "https://github.com/rodynaamrfathy/FitPulse", 
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind], // Using JS/Tailwind based on your description
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.postgres], // Flask (Python) + MySQL
    },
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-neutral-600 dark:text-neutral-400">
            Fit Pulse is a comprehensive fitness ecosystem designed to bridge the gap between 
            workout tracking and nutritional management. It serves as a 360-degree platform 
            for both enthusiasts and professional trainers.
          </TypographyP>

          {/* This correctly pulls from the github property above */}
          <ProjectsLinks live={this.live} repo={this.github} />

          <div className="my-8">
            <SlideShow
              images={[
                `${BASE_PATH}/fitpulse/1.png`,
                `${BASE_PATH}/fitpulse/2.png`,
                `${BASE_PATH}/fitpulse/3.png`,
              ]}
            />
          </div>

          <div className="flex items-center gap-3 mt-8">
            <Target className="w-6 h-6 text-emerald-500" />
            <TypographyH3 className="text-emerald-500">Key Features</TypographyH3>
          </div>
          
          <ul className="space-y-4 font-mono text-sm text-neutral-600 dark:text-neutral-400">
            <li className="flex items-start gap-3">
              <Zap className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Trainer Hub:</strong> Direct access to custom-tailored workout and diet plans uploaded by pros.</span>
            </li>
            <li className="flex items-start gap-3">
              <Layout className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Progress Dashboard:</strong> Real-time tracking of body metrics, weight, and workout volume.</span>
            </li>
            <li className="flex items-start gap-3">
              <Cpu className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Nutrition Logic:</strong> Built-in calculators for personalized calorie and macronutrient targets.</span>
            </li>
            <li className="flex items-start gap-3">
              <Lock className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Secure Commerce:</strong> Fully integrated Stripe payments for the supplement marketplace.</span>
            </li>
          </ul>

          <div className="flex items-center gap-3 mt-8">
            <Terminal className="w-6 h-6 text-emerald-500" />
            <TypographyH3 className="text-emerald-500">Technical Stack</TypographyH3>
          </div>
          
          <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Built with a high-performance <strong>Flask</strong> backend and a relational <strong>MySQL</strong> database to 
            manage complex user data and order histories. Security is prioritized via <strong>Google OAuth</strong> 
            for seamless, safe authentication.
          </p>

          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 mt-6 flex gap-4 items-start">
             <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
             <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400 italic">
               "Fit Pulse isn&apos;t just a tracker; it&apos;s a digital personal trainer that keeps your 
               supplements, data, and nutrition in one unified pulse."
             </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "brainboost",
    category: "AI Interview Platform",
    title: "Brain Boost",
    src: "/assets/projects-screenshots/brainboost/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    github: "https://github.com/Mokhaled2004/brainboost-ai", 
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo, PROJECT_SKILLS.ts],
    },
    get content(): JSX.Element {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-neutral-600 dark:text-neutral-400">
            BrainBoost AI is an intelligent interview prep platform designed to bridge the gap between 
            learning and landing a job. By leveraging the Gemini API, it generates personalized 
            technical questions tailored specifically to your role and years of experience.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <div className="my-8">
            <SlideShow
              images={[
                `${BASE_PATH}/brainboost/1.png`,
                `${BASE_PATH}/brainboost/2.png`,
                `${BASE_PATH}/brainboost/3.png`,
                `${BASE_PATH}/brainboost/4.png`,
              ]}
            />
          </div>

          <div className="flex items-center gap-3 mt-8">
            <Target className="w-6 h-6 text-emerald-500" />
            <TypographyH3 className="text-emerald-500">Key Features</TypographyH3>
          </div>
          
          <ul className="space-y-4 font-mono text-sm text-neutral-600 dark:text-neutral-400">
            <li className="flex items-start gap-3">
              <Cpu className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>AI-Powered Q&A:</strong> High-quality technical questions generated via Gemini API.</span>
            </li>
            <li className="flex items-start gap-3">
              <Terminal className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Role-Based Sessions:</strong> Content tailored to specific job titles and seniority levels.</span>
            </li>
            <li className="flex items-start gap-3">
              <Layout className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Accordion Learning UI:</strong> A clean, distraction-free interface for focused study sessions.</span>
            </li>
            <li className="flex items-start gap-3">
              <Pin className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Smart Pinning:</strong> Save critical questions and AI explanations for future review.</span>
            </li>
            <li className="flex items-start gap-3">
              <Lock className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Secure Auth:</strong> Full user registration and login flow powered by JWT.</span>
            </li>
          </ul>

          <div className="flex items-center gap-3 mt-8">
            <Zap className="w-6 h-6 text-emerald-500" />
            <TypographyH3 className="text-emerald-500">Technical Excellence</TypographyH3>
          </div>
          
          <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Built on the MERN stack with a focus on type safety using TypeScript. 
            The backend handles complex prompt engineering to ensure AI responses are accurate 
            and educational, while the frontend utilizes Framer Motion for a fluid, 
            premium user experience.
          </p>

          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 mt-6 flex gap-4 items-start">
             <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
             <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400 italic">
               "BrainBoost AI isn&apos;t just a question bank; it&apos;s your personal AI mentor 
               preparing you for the high-pressure environment of technical interviews."
             </p>
          </div>
        </div>
      );
    },
  },
{
    id: "soupshop",
    category: "E-commerce",
    title: "Soup Shop",
    src: "/assets/projects-screenshots/soupshop/landing.png",
    screenshots: ["landing.png", "cart.png", "menu.png"],
    github: "https://github.com/Mokhaled2004/SoupShop",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts, 
        PROJECT_SKILLS.react, 
        PROJECT_SKILLS.reactQuery, 
        PROJECT_SKILLS.js // Styled Components / Vite fall under core JS/React skills
      ],
      backend: [], // Frontend only
    },
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-neutral-600 dark:text-neutral-400">
            Soup Shop is a modern, high-performance frontend application built for a 
            seamless soup ordering experience. It focuses on fluid state management and 
            a highly responsive UI to ensure users can go from browsing to checkout in seconds.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <div className="my-8">
            <SlideShow
              images={[
                `${BASE_PATH}/soupshop/1.png`,
                `${BASE_PATH}/soupshop/2.png`,
                `${BASE_PATH}/soupshop/3.png`,
                `${BASE_PATH}/soupshop/4.png`,
              ]}
            />
          </div>

          <div className="flex items-center gap-3 mt-8">
            <Layout className="w-6 h-6 text-emerald-500" />
            <TypographyH3 className="text-emerald-500">Core Features</TypographyH3>
          </div>
          
          <ul className="space-y-4 font-mono text-sm text-neutral-600 dark:text-neutral-400">
            <li className="flex items-start gap-3">
              <Zap className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Dynamic Cart:</strong> Real-time cart management with instant quantity updates and removals.</span>
            </li>
            <li className="flex items-start gap-3">
              <Target className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Smart Filtering:</strong> Browse through various soup categories with zero-latency UI updates.</span>
            </li>
            <li className="flex items-start gap-3">
              <Lock className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Auth Flow:</strong> Complete user registration and login interface designed for secure session handling.</span>
            </li>
            <li className="flex items-start gap-3">
              <Terminal className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Order Tracking:</strong> Clean views for order history and detailed breakdowns of past purchases.</span>
            </li>
          </ul>

          <div className="flex items-center gap-3 mt-8">
            <Cpu className="w-6 h-6 text-emerald-500" />
            <TypographyH3 className="text-emerald-500">Technical Excellence</TypographyH3>
          </div>
          
          <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Leveraging <strong>React Query</strong> for efficient server-state management and <strong>Axios</strong> for robust 
            API communication. The project utilizes <strong>Styled Components</strong> for a truly modular CSS-in-JS 
            approach, all bundled with <strong>Vite</strong> for a lightning-fast development experience.
          </p>

          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 mt-6 flex gap-4 items-start">
             <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
             <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400 italic">
               "Built with type-safety in mind using TypeScript, Soup Shop delivers a 
               premium feel to the everyday task of ordering comfort food."
             </p>
          </div>
        </div>
      );
    },
  },
{
    id: "mozen",
    category: "Creative Frontend",
    title: "Zentry Clone (MoZen)",
    src: "/assets/projects-screenshots/mozen/landing.png",
    screenshots: ["landing.png", "animations.png", "responsive.png"],
    live: "https://mozen.netlify.app/",
    github: "https://github.com/Mokhaled2004/zen-clone",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.gsap,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [], // Frontend only
    },
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-neutral-600 dark:text-neutral-400">
            A high-fidelity recreation of the award-winning Zentry website. This project 
            is a deep dive into the world of creative development, pushing the boundaries 
            of what is possible with web-based animations and interactive storytelling.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <div className="my-8">
            <SlideShow
              images={[
                `${BASE_PATH}/mozen/landing.png`,
                `${BASE_PATH}/mozen/1.png`,
                `${BASE_PATH}/mozen/2.png`,
                `${BASE_PATH}/mozen/3.png`,
                `${BASE_PATH}/mozen/4.png`,
              ]}
            />
          </div>

          <div className="flex items-center gap-3 mt-8">
            <Zap className="w-6 h-6 text-emerald-500" />
            <TypographyH3 className="text-emerald-500">Visual Mechanics</TypographyH3>
          </div>
          
          <ul className="space-y-4 font-mono text-sm text-neutral-600 dark:text-neutral-400">
            <li className="flex items-start gap-3">
              <Target className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>GSAP ScrollTrigger:</strong> Complex scroll-bound animations that sync timeline progress with the user&apos;s viewport.</span>
            </li>
            <li className="flex items-start gap-3">
              <Cpu className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Clip-Path Magic:</strong> Advanced geometric transitions using CSS clip-paths for non-rectangular, cinematic scene changes.</span>
            </li>
            <li className="flex items-start gap-3">
              <Layout className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>3D Interaction:</strong> Perspective-based hover effects that bring depth to flat UI elements.</span>
            </li>
            <li className="flex items-start gap-3">
              <Terminal className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Video Sequencing:</strong> High-performance video transitions ensuring zero frame-drop during rapid site navigation.</span>
            </li>
          </ul>

          <div className="flex items-center gap-3 mt-8">
            <ArrowUpRight className="w-6 h-6 text-emerald-500" />
            <TypographyH3 className="text-emerald-500">The "Vibe" Factor</TypographyH3>
          </div>
          
          <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            More than just a clone, this project showcases master-level control over <strong>GSAP</strong>. 
            By combining buttery-smooth UI/UX with a completely responsive architecture, 
            MoZen replicates a premium, AAA-gaming-site experience directly in the browser.
          </p>

          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 mt-6 flex gap-4 items-start">
             <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
             <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400 italic">
               "MoZen proves that with the right combination of math and motion, the 
               web can feel as immersive as a modern cinema experience."
             </p>
          </div>
        </div>
      );
    },
  },
{
    id: "ambiadmin",
    category: "Admin Dashboard / IPS",
    title: "AmbiAdmin",
    src: "/assets/projects-screenshots/ambiadmin/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    github: "https://github.com/Mokhaled2004/AmbientAdmin",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres, // Neon DB
        PROJECT_SKILLS.supabase,
      ],
    },
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-neutral-600 dark:text-neutral-400">
            AmbiAdmin is a sophisticated command center designed for managing an Indoor Positioning System (IPS). 
            It provides administrators with full CRUD control over buildings, floors, and beacon placement, 
            alongside a comprehensive educational management suite for schedules and students.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <div className="my-8">
            <SlideShow
              images={[
                `${BASE_PATH}/ambiadmin/1.png`,
                `${BASE_PATH}/ambiadmin/2.png`,
                `${BASE_PATH}/ambiadmin/3.png`,
                `${BASE_PATH}/ambiadmin/4.png`,
                `${BASE_PATH}/ambiadmin/5.png`,
                `${BASE_PATH}/ambiadmin/6.png`,
                `${BASE_PATH}/ambiadmin/7.png`,
                `${BASE_PATH}/ambiadmin/8.png`,
                `${BASE_PATH}/ambiadmin/10.png`,
              ]}
            />
          </div>

          <div className="flex items-center gap-3 mt-8">
            <Layout className="w-6 h-6 text-emerald-500" />
            <TypographyH3 className="text-emerald-500">Spatial & Admin Control</TypographyH3>
          </div>
          
          <ul className="space-y-4 font-mono text-sm text-neutral-600 dark:text-neutral-400">
            <li className="flex items-start gap-3">
              <Pin className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Indoor Mapping:</strong> Interactive management of floor plans and beacon deployments within a building layout.</span>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Educational Suite:</strong> Full-featured system for managing courses, professors, students, and complex class schedules.</span>
            </li>
            <li className="flex items-start gap-3">
              <Cpu className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Report Automation:</strong> Advanced logic for generating automated analytical reports on system usage and spatial data.</span>
            </li>
            <li className="flex items-start gap-3">
              <Terminal className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Multi-Tenant Data:</strong> Optimized backend flow handling relational data across Neon (PostgreSQL) and Supabase.</span>
            </li>
          </ul>

          <div className="flex items-center gap-3 mt-8">
            <Target className="w-6 h-6 text-emerald-500" />
            <TypographyH3 className="text-emerald-500">System Capability</TypographyH3>
          </div>
          
          <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            This project showcases my ability to architect dashboards for any complex management system. 
            By utilizing <strong>Node.js</strong> and <strong>Express</strong> on the backend with 
            <strong>Framer Motion</strong> on the frontend, AmbiAdmin balances heavy-duty data 
            processing with a smooth, premium user interface.
          </p>

          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 mt-6 flex gap-4 items-start">
             <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
             <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400 italic">
               "From beacon deployments to student attendance, AmbiAdmin turns complex 
               architectural and educational data into a manageable, interactive experience."
             </p>
          </div>
        </div>
      );
    },
  },
{
    id: "ambieditor",
    category: "Geospatial Engineering",
    title: "AmbiEditor",
    src: "/assets/projects-screenshots/ambieditor/landing.png",
    // Mapping images 1 through 13 as requested
    screenshots: ["landing.png", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png"],
    github: "https://github.com/Mokhaled2004/Map-Editor", // Ensure this repo name is correct
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-neutral-600 dark:text-neutral-400">
            AmbiEditor is a specialized CAD-style geospatial tool built for the design and 
            management of indoor environments. It allows for the precise creation of digital 
            twins, translating real-world architectural dimensions into interactive 2D and 3D maps.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <div className="my-8">
            <SlideShow
              images={[
                `${BASE_PATH}/ambieditor/landing.png`,
                ...Array.from({ length: 13 }, (_, i) => `${BASE_PATH}/ambieditor/${i + 1}.png`)
              ]}
            />
          </div>

          <div className="flex items-center gap-3 mt-8">
            <Layout className="w-6 h-6 text-emerald-500" />
            <TypographyH3 className="text-emerald-500">Cartography Features</TypographyH3>
          </div>
          
          <ul className="space-y-4 font-mono text-sm text-neutral-600 dark:text-neutral-400">
            <li className="flex items-start gap-3">
              <Target className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Geofencing:</strong> Draw and custom-shape rooms, offices, and zones with real-time coordinate validation.</span>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>POI Management:</strong> Full CRUD capabilities for Points of Interest (POIs) with custom metadata tagging.</span>
            </li>
            <li className="flex items-start gap-3">
              <Terminal className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Navigation Logic:</strong> Specialized path-drawing tools to define routes for indoor navigation systems.</span>
            </li>
            <li className="flex items-start gap-3">
              <Cpu className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>GeoJSON Engine:</strong> Native support for importing and exporting complex geospatial data structures for cross-platform compatibility.</span>
            </li>
          </ul>

          <div className="flex items-center gap-3 mt-8">
            <ArrowUpRight className="w-6 h-6 text-emerald-500" />
            <TypographyH3 className="text-emerald-500">Architecture</TypographyH3>
          </div>
          
          <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Unlike traditional systems relying on rigid databases, AmbiEditor uses a flexible 
            <strong> GeoJSON-first</strong> approach. This allows for rapid iteration and 
            lightweight file-based storage. The editor is currently being augmented with 
            <strong> AI-powered</strong> mapping assistance to automate room detection and path optimization.
          </p>

          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 mt-6 flex gap-4 items-start">
             <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
             <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400 italic">
               "AmbiEditor bridges the gap between static floor plans and dynamic, 
               navigable digital worlds, giving admins the power to 'draw' the future of indoor positioning."
             </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "evently",
    category: "Full Stack / DevOps",
    title: "Evently",
    src: "/assets/projects-screenshots/evently/landing.png",
    screenshots: ["landing.png", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"],
    github: "https://github.com/Mokhaled2004/EventPlanner", // Update if different
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker, // Highlighted Docker skill
      ],
    },
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-neutral-600 dark:text-neutral-400">
            Evently is a robust event management platform that facilitates seamless social coordination. 
            While the app handles complex invitation flows and booking logic, its true strength lies in its 
            enterprise-grade deployment architecture.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <div className="my-8">
            <SlideShow
              images={[
                `${BASE_PATH}/evently/landing.png`,
                ...Array.from({ length: 7 }, (_, i) => `${BASE_PATH}/evently/${i + 1}.png`)
              ]}
            />
          </div>

          <div className="flex items-center gap-3 mt-8">
            <Cpu className="w-6 h-6 text-emerald-500" />
            <TypographyH3 className="text-emerald-500">Cloud & DevOps Mastery</TypographyH3>
          </div>
          
          <ul className="space-y-4 font-mono text-sm text-neutral-600 dark:text-neutral-400">
            <li className="flex items-start gap-3">
              <Zap className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Dockerization:</strong> Containerized the entire MERN stack to ensure environment consistency across development and production.</span>
            </li>
            <li className="flex items-start gap-3">
              <Target className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>OpenShift Deployment:</strong> Deployed and managed the application on Red Hat OpenShift, leveraging enterprise Kubernetes features.</span>
            </li>
            <li className="flex items-start gap-3">
              <Layout className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Pod Management:</strong> Monitored and scaled system pods to maintain high availability and performance under load.</span>
            </li>
            <li className="flex items-start gap-3">
              <Lock className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
              <span><strong>Social Logic:</strong> Integrated complex user interactions including real-time invitation RSVPs and event booking states.</span>
            </li>
          </ul>

          <div className="flex items-center gap-3 mt-8">
            <Terminal className="w-6 h-6 text-emerald-500" />
            <TypographyH3 className="text-emerald-500">Technical Takeaway</TypographyH3>
          </div>
          
          <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            The core focus of Evently was mastering the <strong>containerization pipeline</strong>. 
            By moving beyond simple hosting to <strong>Red Hat OpenShift</strong>, I gained hands-on 
            experience in managing orchestration layers, configuring routes, and ensuring that 
            backend services and frontend assets scale harmoniously within a cluster.
          </p>

          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 mt-6 flex gap-4 items-start">
             <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
             <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400 italic">
               "Evently marks a transition from building apps to architecting scalable systems, 
               where the infrastructure is just as important as the code."
             </p>
          </div>
        </div>
      );
    },
  },
{
    id: "askmeapolicy",
    category: "Full Stack / Agents / RAG",
    title: "AskMeAPolicy",
    src: "/assets/projects-screenshots/askmeapolicy/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    github: "https://github.com/Mokhaled2004/Employee-Policy-Manual-Assistant/tree/main/hr-policy-assistant",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.chroma,
        PROJECT_SKILLS.langchain,
      ],
    },
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-neutral-600 dark:text-neutral-400">
            AskMeAPolicy is an intelligent HR compliance assistant that transforms static employee handbooks 
            into interactive knowledge bases. Using RAG (Retrieval-Augmented Generation), it allows users to 
            query complex policy documents and receive accurate, context-aware answers instantly.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <div className="my-8">
            <SlideShow
              images={[
                `${BASE_PATH}/askmeapolicy/1.png`,
                ...Array.from({ length: 5 }, (_, i) => `${BASE_PATH}/askmeapolicy/${i + 1}.png`)
              ]}
            />
          </div>

          <div className="flex items-center gap-3 mt-8">
            <Cpu className="w-6 h-6 text-indigo-500" />
            <TypographyH3 className="text-indigo-500">AI & RAG Architecture</TypographyH3>
          </div>
          
          <ul className="space-y-4 font-mono text-sm text-neutral-600 dark:text-neutral-400">
            <li className="flex items-start gap-3">
              <Zap className="w-4 h-4 mt-1 text-indigo-500 shrink-0" />
              <span><strong>Semantic Search:</strong> Leveraged ChromaDB and Sentence Transformers to perform vector-based retrieval, ensuring the AI finds the exact policy section needed.</span>
            </li>
            <li className="flex items-start gap-3">
              <Target className="w-4 h-4 mt-1 text-indigo-500 shrink-0" />
              <span><strong>Contextual Chunking:</strong> Implemented RecursiveCharacterTextSplitter via LangChain to maintain document hierarchy and heading context during ingestion.</span>
            </li>
            <li className="flex items-start gap-3">
              <Layout className="w-4 h-4 mt-1 text-indigo-500 shrink-0" />
              <span><strong>Streamlined UI:</strong> Built a custom Markdown-capable chat interface with Tailwind v4, supporting tables and nested lists for complex policy rendering.</span>
            </li>
            <li className="flex items-start gap-3">
              <Lock className="w-4 h-4 mt-1 text-indigo-500 shrink-0" />
              <span><strong>Hallucination Guardrails:</strong> Configured strict system prompting to ensure the assistant only answers based on provided documents, maintaining high factuality.</span>
            </li>
          </ul>

          <div className="flex items-center gap-3 mt-8">
            <Terminal className="w-6 h-6 text-indigo-500" />
            <TypographyH3 className="text-indigo-500">Technical Takeaway</TypographyH3>
          </div>
          
          <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            The core challenge of AskMeAPolicy was managing the <strong>retrieval pipeline</strong>. 
            By integrating <strong>FastAPI</strong> with <strong>LangChain</strong>, I moved beyond 
            basic LLM prompting to building a system that understands specific organizational context. 
            This project deepened my expertise in handling unstructured data and optimizing vector 
            embeddings for real-world document auditing.
          </p>

          <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 mt-6 flex gap-4 items-start">
             <ChevronRight className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
             <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400 italic">
               "AskMeAPolicy demonstrates the power of RAG in solving the information bottleneck, 
               turning dry HR manuals into a dynamic, conversational resource."
             </p>
          </div>
        </div>
      );
    },
  },
];

export default projects;