"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function JoinCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.04] to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-accent/[0.06] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent uppercase tracking-wide">
            Ready to Start?
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Become a{" "}
            <span className="gradient-text">Cloud Wizard</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-muted leading-relaxed">
            Join a community of builders at FAST Peshawar. Learn cloud
            computing, build real projects, and launch your career in tech.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/join" variant="primary" size="lg">
              Join the Club
              <ArrowRight size={16} />
            </Button>
            <Button
              href={siteConfig.links.whatsapp}
              variant="secondary"
              size="lg"
              external
            >
              <MessageCircle size={16} />
              WhatsApp Community
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
