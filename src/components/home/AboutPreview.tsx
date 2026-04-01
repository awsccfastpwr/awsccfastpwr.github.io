"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Cloud, Users, Rocket } from "lucide-react";

export function AboutPreview() {
  return (
    <Section id="about">
      <FadeIn>
        <SectionHeader
          badge="About Us"
          title="Where Cloud Meets Community"
          description="We are the official AWS Cloud Club at FAST National University Peshawar — a student-led community passionate about cloud computing, development, and building real-world solutions."
        />
      </FadeIn>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {[
          {
            icon: Cloud,
            title: "Cloud-First Learning",
            description:
              "Hands-on workshops covering AWS services, cloud architecture, and modern deployment practices. Learn by building, not just reading.",
          },
          {
            icon: Users,
            title: "Stronger Together",
            description:
              "A vibrant community of developers, designers, and cloud enthusiasts. Collaborate on projects, share knowledge, and grow together.",
          },
          {
            icon: Rocket,
            title: "Launch Ready",
            description:
              "From zero to production — we take you through the full journey of building and deploying real applications on AWS infrastructure.",
          },
        ].map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.15}>
            <div className="group relative rounded-2xl border border-white/[0.06] bg-card p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_40px_rgba(255,153,0,0.06)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
