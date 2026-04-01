"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export function ProjectsShowcase() {
  const featured = projects.slice(0, 3);

  return (
    <Section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.015] to-transparent pointer-events-none" />

      <FadeIn>
        <SectionHeader
          badge="Projects"
          title="Built by Our Community"
          description="Real projects built by club members — from serverless APIs to full-stack cloud applications."
        />
      </FadeIn>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <FadeIn key={project.title} delay={i * 0.12}>
            <GlowCard className="flex h-full flex-col">
              <h3 className="text-base font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-4 flex gap-3 pt-4 border-t border-white/5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                )}
              </div>
            </GlowCard>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-12 text-center">
        <Button href="/projects" variant="secondary">
          View All Projects
          <ArrowRight size={16} />
        </Button>
      </FadeIn>
    </Section>
  );
}
