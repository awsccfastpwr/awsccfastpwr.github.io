"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { teamMembers } from "@/data/team";
import { Linkedin, Github } from "lucide-react";

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/3 h-[400px] w-[400px] rounded-full bg-accent/[0.06] blur-[120px]" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent uppercase tracking-wide">
              Our Team
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The People{" "}
              <span className="gradient-text">Behind the Cloud</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted leading-relaxed">
              A dedicated team of student leaders driving AWS Cloud Club FAST
              Peshawar forward.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team Grid */}
      <Section>
        <FadeIn>
          <SectionHeader
            badge="Leadership"
            title="Meet the Leadership"
            description="The passionate minds who plan, organize, and execute everything at the club."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.1}>
              <div className="group rounded-2xl border border-white/[0.06] bg-card p-8 text-center transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_40px_rgba(255,153,0,0.08)]">
                {/* Avatar */}
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent/5 text-3xl font-bold text-accent ring-2 ring-accent/10 group-hover:ring-accent/30 transition-all duration-300">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {member.bio}
                </p>

                {/* Links */}
                {member.links && (
                  <div className="mt-4 flex justify-center gap-2">
                    {member.links.linkedin && (
                      <a
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-2 text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.links.github && (
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-2 text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Join team CTA */}
      <Section>
        <FadeIn>
          <div className="rounded-2xl border border-accent/10 bg-accent/[0.03] p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Want to Join the Team?
            </h3>
            <p className="mt-3 text-muted max-w-lg mx-auto">
              We&apos;re always looking for passionate students to help lead the
              AWS Cloud Club. If you&apos;re interested in taking on a
              leadership role, reach out to us!
            </p>
            <a
              href="https://www.instagram.com/awsccfastpwr"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background hover:bg-accent-light transition-all shadow-lg shadow-accent/20"
            >
              DM Us on Instagram
            </a>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
