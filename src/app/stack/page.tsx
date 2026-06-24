"use client";

import { motion } from "framer-motion";
import { Code, Layers, Cpu, Cloud, Database, Settings } from "lucide-react";

export default function StackPage() {
  const categories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C++"],
      icon: <Code className="w-5 h-5 text-accent" />,
      desc: "Core computational logic and systems programming."
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS"],
      icon: <Layers className="w-5 h-5 text-accent" />,
      desc: "Responsive UI layouts, user interaction structures, and state management."
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "Node.js"],
      icon: <Settings className="w-5 h-5 text-accent" />,
      desc: "High-performance API servers, server-side frameworks, and microservices."
    },
    {
      title: "AI/ML",
      skills: ["Machine Learning", "GenAI", "Dialogflow"],
      icon: <Cpu className="w-5 h-5 text-accent" />,
      desc: "Predictive model generation, generative AI prompts, and automated conversational agents."
    },
    {
      title: "Cloud",
      skills: ["AWS", "Google Cloud", "Firebase"],
      icon: <Cloud className="w-5 h-5 text-accent" />,
      desc: "Scalable hosting architectures, serverless routines, and cloud functions."
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL"],
      icon: <Database className="w-5 h-5 text-accent" />,
      desc: "Structured query systems, relational schemas, and data persistence layers."
    }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-[120px] pb-24 bg-background select-none min-h-screen subtle-grid-bg"
    >
      <section className="py-[120px] px-8 md:px-20 lg:px-24 max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="mb-16 border-b border-accent/10 pb-10">
          <span className="text-[10px] font-sans font-semibold tracking-[3px] text-accent uppercase block mb-3">
            05 - TECHNICALS
          </span>
          <h1 className="text-[clamp(44px,6vw,64px)] font-serif text-foreground font-medium leading-tight">
            Cognitive <span className="italic font-normal">Stack</span>
          </h1>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              className="luxury-card luxury-card-hover p-8 relative group flex flex-col justify-between"
            >
              <div>
                {/* Card Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 border border-accent/10 bg-accent/5 rounded-xl group-hover:border-accent/40 transition-colors duration-300">
                      {cat.icon}
                    </div>
                    <h3 className="text-[16px] font-sans font-bold uppercase tracking-[1.5px] text-foreground">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-foreground-muted/40 group-hover:text-accent/60 transition-colors duration-300">
                    LOG_{idx + 1}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[14px] md:text-[15px] font-sans text-foreground-muted leading-relaxed mb-6 font-light">
                  {cat.desc}
                </p>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-accent/10 mt-auto">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-[11px] font-sans uppercase tracking-wider border border-foreground/10 px-3.5 py-1.5 rounded-lg text-foreground-muted hover:border-accent hover:text-foreground transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Top corner luxury decoration */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/10 group-hover:border-accent/40 transition-colors duration-300 rounded-tr-[24px]" />
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  );
}
