import { EXPERIENCE, SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const ExperienceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <SectionWrapper className="flex flex-col items-center justify-center min-h-screen py-20 z-10">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="experience"
          title="Experience"
          desc="The evolution of my technical expertise."
          className="mb-16 md:mb-32 mt-0"
        />

        <div className="flex flex-col relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden md:block -translate-x-1/2" />

          {EXPERIENCE.map((exp, index) => (
            <div 
              key={exp.id} 
              className="mb-24 last:mb-0 relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ExperienceCard 
                experience={exp} 
                index={index} 
                isAnyHovered={hoveredIndex !== null}
                isThisHovered={hoveredIndex === index}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ExperienceCard = ({ 
  experience, 
  index, 
  isAnyHovered, 
  isThisHovered 
}: { 
  experience: (typeof EXPERIENCE)[0]; 
  index: number;
  isAnyHovered: boolean;
  isThisHovered: boolean;
}) => {
  const isEven = index % 2 === 0;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      animate={{ 
        opacity: isAnyHovered ? (isThisHovered ? 1 : 0.25) : 1,
        filter: isAnyHovered && !isThisHovered ? "blur(4px)" : "blur(0px)",
        scale: isThisHovered ? 1.03 : 1,
      }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20,
        opacity: { duration: 0.6 }
      }}
      style={{ perspective: 1200 }}
      className={cn(
        "flex flex-col w-full md:w-[48%]",
        isEven ? "md:mr-auto" : "md:ml-auto"
      )}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full cursor-default relative"
      >
        {/* Date Card "Behind" Effect - FIXED TEXT OVERFLOW */}
        <div className={cn(
          "absolute top-8 w-16 hidden lg:flex items-center justify-center border transition-all duration-700 z-0 overflow-hidden",
          isEven ? "-left-14 rounded-l-2xl" : "-right-14 rounded-r-2xl",
          isThisHovered 
            ? "bg-primary border-primary h-64 shadow-2xl shadow-primary/30" 
            : "bg-muted border-border h-44 shadow-none"
        )}>
          {/* Container wrapper ensures the rotation doesn't break the parent layout */}
          <div className="absolute inset-0 flex items-center justify-center">
             <span className={cn(
                "rotate-90 whitespace-nowrap font-mono text-[12px] tracking-[0.3em] uppercase transition-all duration-500 block w-max",
                isThisHovered ? "text-primary-foreground font-bold" : "text-muted-foreground"
            )}>
              {experience.startDate} — {experience.endDate}
            </span>
          </div>
        </div>

        {/* Main Content Card */}
        <Card className={cn(
            "relative w-full transition-all duration-500 shadow-2xl overflow-visible border md:border-x rounded-xl z-10",
            "bg-card text-card-foreground border-border",
            isThisHovered ? "border-primary/50 ring-1 ring-primary/20 shadow-primary/10" : "opacity-95"
        )}>
          <CardContent className="p-8 md:p-12 relative" style={{ transform: "translateZ(60px)" }}>
            <div className="flex flex-col mb-8">
              <h3 className={cn(
                "text-3xl font-black tracking-tighter uppercase transition-colors duration-300",
                isThisHovered ? "text-primary" : "text-foreground"
              )}>
                {experience.title}
              </h3>
              <div className="flex items-center gap-3 mt-2">
                <span className={cn("h-px transition-all duration-500", isThisHovered ? "w-16 bg-primary" : "w-8 bg-muted-foreground/40")} />
                <span className="text-sm font-bold text-muted-foreground tracking-widest uppercase">
                  {experience.company}
                </span>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              {experience.description.map((point, i) => (
                <div key={i} className="group/item flex gap-4">
                  <span className={cn(
                      "font-mono text-[10px] mt-1 transition-colors font-bold",
                      isThisHovered ? "text-primary" : "text-muted-foreground/40"
                  )}>
                    [{i + 1}]
                  </span>
                  <p className={cn(
                      "text-[14px] leading-relaxed font-medium tracking-wide transition-colors",
                      isThisHovered ? "text-foreground" : "text-muted-foreground"
                  )}>
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="lg:hidden mb-6 flex">
               <Badge variant="outline" className="text-[10px] font-mono border-primary/20 py-1 px-3">
                {experience.startDate} — {experience.endDate}
               </Badge>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-3 border-t border-border pt-8">
              {experience.skills.map((skillName) => {
                const skill = SKILLS[skillName as SkillNames];
                if (!skill) return null;
                return (
                  <div key={skillName} className={cn(
                      "flex items-center gap-2 transition-all duration-300",
                      isThisHovered ? "opacity-100 scale-110" : "opacity-30 grayscale"
                  )}>
                    <img src={skill.icon} alt={skill.label} className="w-4 h-4 object-contain" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                      {skill.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceSection;