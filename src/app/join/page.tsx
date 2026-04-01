"use client";

import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/data/site";
import {
  MessageCircle,
  Instagram,
  Linkedin,
  Github,
  Mail,
  ArrowRight,
  Users,
  Cloud,
  BookOpen,
} from "lucide-react";

const communityLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp Community",
    description: "Join our active WhatsApp group for updates and discussions.",
    href: siteConfig.links.whatsapp,
    color: "bg-green-500/10 text-green-400 hover:bg-green-500/20",
  },
  {
    icon: Instagram,
    label: "Instagram",
    description: "Follow us for event highlights, announcements, and BTS.",
    href: siteConfig.links.instagram,
    color: "bg-pink-500/10 text-pink-400 hover:bg-pink-500/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    description: "Connect with us professionally and stay updated.",
    href: siteConfig.links.linkedin,
    color: "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20",
  },
  {
    icon: Github,
    label: "GitHub",
    description: "Explore our open-source projects and contribute.",
    href: siteConfig.links.github,
    color: "bg-gray-500/10 text-gray-400 hover:bg-gray-500/20",
  },
];

export default function JoinPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-accent/[0.08] blur-[140px]" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent uppercase tracking-wide">
              Join Us
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Become a{" "}
              <span className="gradient-text">Cloud Wizard</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted leading-relaxed">
              AWS Cloud Club FAST Peshawar is free and open to all students. Jump
              in through any of our community channels.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What you get */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What You Get
            </h2>
            <p className="mt-3 text-muted">
              Joining is free — here&apos;s what&apos;s included.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: Cloud,
              title: "AWS Workshops",
              description:
                "Hands-on sessions covering EC2, S3, Lambda, IAM, Docker, and more — led by experienced members.",
            },
            {
              icon: Users,
              title: "Community Access",
              description:
                "Join our WhatsApp group, attend meetups, and connect with like-minded builders at FAST.",
            },
            {
              icon: BookOpen,
              title: "Resources & Support",
              description:
                "Workshop materials, project repos, AWS certification guides, and peer mentorship.",
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.12}>
              <div className="rounded-2xl border border-white/[0.06] bg-card p-6 text-center transition-all duration-300 hover:border-accent/20">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <item.icon size={24} />
                </div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Community Links */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Connect With Us
            </h2>
            <p className="mt-3 text-muted">
              Pick your platform and start your cloud journey today.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {communityLinks.map((link, i) => (
            <FadeIn key={link.label} delay={i * 0.1}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-card p-5 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(255,153,0,0.06)]"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${link.color}`}
                >
                  <link.icon size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold">{link.label}</h3>
                  <p className="mt-0.5 text-xs text-muted">
                    {link.description}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all"
                />
              </a>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Email CTA */}
      <Section>
        <FadeIn>
          <div className="rounded-2xl border border-accent/10 bg-gradient-to-br from-accent/[0.04] to-transparent p-8 md:p-12 text-center">
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Mail size={28} />
            </div>
            <h3 className="text-2xl font-bold sm:text-3xl">
              Have Questions?
            </h3>
            <p className="mt-3 text-muted max-w-md mx-auto">
              Drop us an email and we&apos;ll get back to you as soon as
              possible.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background hover:bg-accent-light transition-all shadow-lg shadow-accent/20"
            >
              <Mail size={16} />
              {siteConfig.email}
            </a>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
