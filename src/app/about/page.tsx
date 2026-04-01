"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import {
  Target,
  Eye,
  Sparkles,
  Users,
  BookOpen,
  Trophy,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 h-[400px] w-[400px] rounded-full bg-accent/[0.06] blur-[120px]" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent uppercase tracking-wide">
              About Us
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Cloud Wizards in{" "}
              <span className="gradient-text">Training</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted leading-relaxed">
              The AWS Cloud Club at FAST National University Peshawar is a
              student-driven community dedicated to making cloud computing
              accessible, hands-on, and impactful.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div className="rounded-2xl border border-white/[0.06] bg-card p-8 h-full">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Target size={24} />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="mt-4 text-muted leading-relaxed">
                To bridge the gap between academic learning and industry
                demands by providing students with hands-on experience in AWS
                cloud services, modern development practices, and real-world
                project building. We believe every student at FAST Peshawar
                should have access to the tools and knowledge needed to become
                a cloud-native engineer.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-white/[0.06] bg-card p-8 h-full">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Eye size={24} />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="mt-4 text-muted leading-relaxed">
                To establish FAST Peshawar as a hub for cloud innovation in
                Pakistan, where students graduate not just with degrees but with
                production-ready skills, real projects in their portfolio, and a
                network of fellow builders. We envision a community where
                learning is collaborative, projects are impactful, and
                everyone has the opportunity to shine.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* What makes us unique */}
      <Section>
        <FadeIn>
          <SectionHeader
            badge="Why Us"
            title="What Makes Us Different"
            description="We're not just another university club — we build real things with real impact."
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Sparkles,
              title: "Learn by Doing",
              description:
                "Every workshop ends with something you built and deployed. No slides-only sessions.",
            },
            {
              icon: Users,
              title: "Community First",
              description:
                "Events like Byte بیٹھک create spaces for genuine connections beyond just coding.",
            },
            {
              icon: BookOpen,
              title: "Zero to Production",
              description:
                "Our flagship workshop series takes you from Linux basics to deploying on EC2 in 5 weeks.",
            },
            {
              icon: Trophy,
              title: "Industry Aligned",
              description:
                "Our curriculum mirrors what companies actually use — AWS, Docker, CI/CD, and more.",
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-white/[0.06] bg-card p-6 transition-all duration-300 hover:border-accent/20">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition">
                  <item.icon size={20} />
                </div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* University info */}
      <Section>
        <div className="rounded-2xl border border-white/[0.06] bg-card p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <FadeIn>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                <Globe size={24} />
              </div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                FAST NUCES Peshawar
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                FAST National University of Computer and Emerging Sciences,
                Peshawar campus — one of Pakistan&#39;s premier institutions for
                computer science education. Our cloud club is part of the global
                AWS Cloud Club network, connecting students with AWS resources,
                community, and real-world cloud experience.
              </p>
              <div className="mt-6">
                <Button href="/join" variant="primary">
                  Join Our Community
                  <ArrowRight size={16} />
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "FAST NUCES", label: "University" },
                  { value: "Peshawar", label: "City" },
                  { value: "2024", label: "Established" },
                  { value: "Global", label: "AWS Network" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/[0.04] bg-background/50 p-4 text-center"
                  >
                    <div className="text-lg font-bold text-accent">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}
