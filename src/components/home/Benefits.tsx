"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  GraduationCap,
  Handshake,
  Award,
  Laptop,
  Zap,
  BookOpen,
} from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Industry-Ready Skills",
    description: "Learn in-demand cloud skills that employers actively seek.",
  },
  {
    icon: Handshake,
    title: "Networking",
    description: "Connect with professionals, mentors, and fellow builders.",
  },
  {
    icon: Award,
    title: "AWS Certifications",
    description:
      "Get guidance and resources for AWS certification preparation.",
  },
  {
    icon: Laptop,
    title: "Real Projects",
    description: "Build production-grade applications for your portfolio.",
  },
  {
    icon: Zap,
    title: "Hackathons",
    description: "Compete in hackathons and build under pressure with a team.",
  },
  {
    icon: BookOpen,
    title: "Free Resources",
    description: "Access workshops, toolkits, and learning materials at no cost.",
  },
];

export function Benefits() {
  return (
    <Section className="relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <FadeIn>
        <SectionHeader
          badge="Benefits"
          title="Why Join AWS Cloud Club?"
          description="More than just a club — it's your launchpad into cloud computing and the tech industry."
        />
      </FadeIn>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.08}>
            <div className="group flex gap-4 rounded-xl border border-white/[0.04] bg-card/50 p-5 transition-all duration-300 hover:border-accent/15 hover:bg-card">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-accent/20">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
