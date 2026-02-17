"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import { SiGithub } from "react-icons/si"; // Added Github Icon
import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto py-20">
      <SectionHeader id="projects" title="Featured Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id || `project-${index}`} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  // Helper to check if a string is a GitHub URL
  const isGithubLink = (url?: string) => url?.includes("github.com");

  return (
    <div className="group/card flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center w-full">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 transition-all duration-500 group-hover/card:shadow-2xl group-hover/card:shadow-emerald-500/[0.1]">
            <Image
              className="object-cover transition-transform duration-700 group-hover/card:scale-110 group-hover/card:blur-[2px]"
              src={project.src || "/fallback-image.jpg"}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/60 transition-all duration-500 flex flex-col items-center justify-center opacity-0 group-hover/card:opacity-100">
               <p className="text-white font-bold text-xl transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                 View Details
               </p>
            </div>
            <div className="absolute bottom-0 w-full p-5 bg-gradient-to-t from-black/90 to-transparent">
              <span className="text-xs font-medium uppercase tracking-widest text-emerald-400 mb-1">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>
            </div>
          </div>
        </ModalTrigger>

        <ModalBody>
          <ModalContent>
            <ProjectDetails project={project} />
          </ModalContent>
          
          <ModalFooter>
            <button className="text-xs font-bold text-neutral-400 mr-auto uppercase tracking-widest">
              Case Study
            </button>

            {/* LIVE DEMO BUTTON: Only shows if 'live' exists and is NOT a GitHub link */}
            {project.live && !isGithubLink(project.live) && (
              <Link href={project.live} target="_blank" rel="noopener noreferrer">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-6 py-2 rounded-full transition-colors">
                  Live Demo
                </button>
              </Link>
            )}

            {/* GITHUB BUTTON: Shows if 'github' exists OR if 'live' is actually a GitHub link */}
            {(project.github || isGithubLink(project.live)) ? (
              <Link 
                href={project.github || project.live || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-bold px-6 py-2 rounded-full transition-colors border border-zinc-700">
                  <SiGithub className="w-4 h-4" />
                  Visit Github
                </button>
              </Link>
            ) : (
              /* If neither live link nor github link exists */
              !project.live && (
                <button disabled className="bg-zinc-300 dark:bg-zinc-800 text-neutral-500 text-sm font-bold px-6 py-2 rounded-full">
                  Private
                </button>
              )
            )}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

const ProjectDetails = ({ project }: { project: Project }) => {
  const frontendItems = (project.skills?.frontend || []).map(item => ({
    title: item.title,
    icon: item.icon
  }));
  
  const backendItems = (project.skills?.backend || []).map(item => ({
    title: item.title,
    icon: item.icon
  }));

  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-black text-neutral-800 dark:text-neutral-100 tracking-tighter">
          {project.title}
        </h2>
        <div className="h-1.5 w-16 bg-emerald-500 mx-auto mt-4 rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase font-black tracking-widest text-neutral-400">Tech Stack: Frontend</span>
            {frontendItems.length > 0 && <FloatingDock items={frontendItems} />}
          </div>
          {backendItems.length > 0 && (
            <div className="flex flex-col gap-4 pt-6 border-t border-zinc-100 dark:border-zinc-800">
              <span className="text-xs uppercase font-black tracking-widest text-neutral-400">Tech Stack: Backend</span>
              <FloatingDock items={backendItems} />
            </div>
          )}
        </div>
        <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg font-medium">
          {project.content}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;