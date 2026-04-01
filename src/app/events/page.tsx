"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlowCard } from "@/components/ui/GlowCard";
import { events } from "@/data/events";
import { Calendar, MapPin } from "lucide-react";

const typeColors: Record<string, string> = {
  workshop: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  hackathon: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  meetup: "bg-green-500/10 text-green-400 border-green-500/20",
  talk: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  orientation: "bg-accent/10 text-accent border-accent/20",
};

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/[0.06] blur-[120px]" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent uppercase tracking-wide">
              Events
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Learn, Build,{" "}
              <span className="gradient-text">Repeat</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted leading-relaxed">
              Workshops, meetups, hackathons, and more — always building, always
              learning.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcoming.length > 0 && (
        <Section>
          <FadeIn>
            <SectionHeader
              badge="Upcoming"
              title="What&apos;s Next"
              description="Don't miss out on these upcoming events."
            />
          </FadeIn>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event, i) => (
              <FadeIn key={event.title} delay={i * 0.1}>
                <GlowCard className="flex h-full flex-col relative overflow-hidden">
                  {/* Accent top bar */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent-light to-accent" />
                  <span
                    className={`mb-4 inline-block self-start rounded-full border px-3 py-1 text-xs font-medium capitalize ${typeColors[event.type] || typeColors.workshop}`}
                  >
                    {event.type}
                  </span>
                  <h3 className="text-base font-semibold leading-snug">
                    {event.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                    {event.description}
                  </p>
                  <div className="mt-4 flex flex-col gap-2 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    {event.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {event.location}
                      </span>
                    )}
                  </div>
                </GlowCard>
              </FadeIn>
            ))}
          </div>
        </Section>
      )}

      {/* Past Events */}
      <Section>
        <FadeIn>
          <SectionHeader
            badge="Archive"
            title="Past Events"
            description="A look back at what we've accomplished together."
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {past.map((event, i) => (
            <FadeIn key={event.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/[0.04] bg-card/50 p-6 transition-all duration-300 hover:border-white/[0.08]">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${typeColors[event.type] || typeColors.workshop}`}
                  >
                    {event.type}
                  </span>
                  <span className="text-xs text-muted/60">Completed</span>
                </div>
                <h3 className="text-sm font-semibold leading-snug">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {event.description}
                </p>
                <div className="mt-3 flex flex-col gap-1.5 text-xs text-muted/70">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  {event.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} />
                      {event.location}
                    </span>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
