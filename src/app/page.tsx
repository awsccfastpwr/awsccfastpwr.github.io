import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { Benefits } from "@/components/home/Benefits";
import { EventsPreview } from "@/components/home/EventsPreview";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { TeamPreview } from "@/components/home/TeamPreview";
import { JoinCTA } from "@/components/home/JoinCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhatWeDo />
      <Benefits />
      <EventsPreview />
      <ProjectsShowcase />
      <TeamPreview />
      <JoinCTA />
    </>
  );
}
