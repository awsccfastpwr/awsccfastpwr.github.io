"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { events } from "@/data/events";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const typeColors: Record<string, string> = {
  workshop: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  hackathon: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  meetup: "bg-green-500/10 text-green-400 border-green-500/20",
  talk: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  orientation: "bg-accent/10 text-accent border-accent/20",
};

export function EventsPreview() {
  const upcoming = events.filter((e) => e.status === "upcoming").slice(0, 3);

  return (
    <Section>
      <FadeIn>
        <SectionHeader
          badge="Events"
          title="Upcoming Events"
          description="From hands-on workshops to community gatherings — there's always something happening."
        />
      </FadeIn>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {upcoming.map((event, i) => (
          <FadeIn key={event.title} delay={i * 0.12}>
            <GlowCard className="flex h-full flex-col">
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

      <FadeIn className="mt-12 text-center">
        <Button href="/events" variant="secondary">
          View All Events
          <ArrowRight size={16} />
        </Button>
      </FadeIn>
    </Section>
  );
}
