"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlowCard } from "@/components/ui/GlowCard";
import {
  Server,
  Code2,
  Shield,
  Container,
  Globe,
  Database,
} from "lucide-react";

const items = [
  {
    icon: Server,
    title: "Cloud Workshops",
    description:
      "Hands-on sessions exploring AWS services — EC2, S3, Lambda, IAM, and more. Build real infrastructure from day one.",
  },
  {
    icon: Code2,
    title: "Dev Bootcamps",
    description:
      "Full-stack development series covering Python, FastAPI, frontend frameworks, and API design patterns.",
  },
  {
    icon: Shield,
    title: "Security & IAM",
    description:
      "Learn cloud security best practices, identity management, and how to secure your applications at scale.",
  },
  {
    icon: Container,
    title: "DevOps & CI/CD",
    description:
      "Docker, containerization, CI/CD pipelines, and automated deployment workflows for production-ready apps.",
  },
  {
    icon: Globe,
    title: "Community Events",
    description:
      "Meetups, tech talks, hackathons, and social events like Byte بیٹھک that bring the cloud community together.",
  },
  {
    icon: Database,
    title: "Project Building",
    description:
      "Collaborative projects where members build, deploy, and showcase real cloud-native applications.",
  },
];

export function WhatWeDo() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader
          badge="What We Do"
          title="From Zero to Cloud"
          description="We run workshops, build projects, and create opportunities for students to gain real-world cloud experience."
        />
      </FadeIn>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.1}>
            <GlowCard className="h-full">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <item.icon size={22} />
              </div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </GlowCard>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
