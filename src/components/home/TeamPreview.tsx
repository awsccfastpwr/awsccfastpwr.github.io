"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { teamMembers } from "@/data/team";
import { ArrowRight, Linkedin, Github } from "lucide-react";

export function TeamPreview() {
  const featured = teamMembers.slice(0, 4);

  return (
    <Section>
      <FadeIn>
        <SectionHeader
          badge="Leadership"
          title="Meet the Team"
          description="The passionate minds driving AWS Cloud Club FAST Peshawar forward."
        />
      </FadeIn>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((member, i) => (
          <FadeIn key={member.name} delay={i * 0.1}>
            <div className="group relative rounded-2xl border border-white/[0.06] bg-card p-6 text-center transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(255,153,0,0.08)]">
              {/* Avatar placeholder */}
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent/5 text-2xl font-bold text-accent ring-2 ring-accent/10 group-hover:ring-accent/30 transition-all">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="text-sm font-semibold">{member.name}</h3>
              <p className="mt-0.5 text-xs font-medium text-accent">
                {member.role}
              </p>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                {member.bio}
              </p>

              {/* Social links */}
              {member.links && (
                <div className="mt-3 flex justify-center gap-2">
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-1.5 text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin size={14} />
                    </a>
                  )}
                  {member.links.github && (
                    <a
                      href={member.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-1.5 text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-12 text-center">
        <Button href="/team" variant="secondary">
          View Full Team
          <ArrowRight size={16} />
        </Button>
      </FadeIn>
    </Section>
  );
}
