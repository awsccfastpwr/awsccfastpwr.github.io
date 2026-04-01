"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlowCard } from "@/components/ui/GlowCard";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 h-[400px] w-[400px] rounded-full bg-accent/[0.06] blur-[120px]" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent uppercase tracking-wide">
              Projects
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Built by{" "}
              <span className="gradient-text">Builders</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted leading-relaxed">
              Real projects built by our members — from serverless architecture
              to full-stack cloud applications.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <Section>
        <FadeIn>
          <SectionHeader
            badge="Showcase"
            title="Community Projects"
            description="Each project represents real learning, real code, and real deployment."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.12}>
              <GlowCard className="flex h-full flex-col">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-accent/5 border border-accent/10 px-3 py-1 text-xs font-medium text-accent/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex gap-4 pt-5 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                    >
                      <Github size={16} />
                      View Source
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </GlowCard>
            </FadeIn>
          ))}
        </div>

        {/* Contribute CTA */}
        <FadeIn className="mt-20">
          <div className="rounded-2xl border border-accent/10 bg-accent/[0.03] p-8 text-center">
            <h3 className="text-xl font-bold">Want to Showcase Your Project?</h3>
            <p className="mt-2 text-sm text-muted max-w-md mx-auto">
              If you&apos;re a member and have built something cool with AWS, we&apos;d
              love to feature it here.
            </p>
            <a
              href="https://github.com/awsccfastpwr"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-background hover:bg-accent-light transition-all"
            >
              <Github size={16} />
              Contribute on GitHub
            </a>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
