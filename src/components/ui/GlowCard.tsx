"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  hover?: boolean;
}

export function GlowCard({
  children,
  className,
  glowColor = "rgba(255, 153, 0, 0.08)",
  hover = true,
}: GlowCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card p-6",
        "transition-all duration-500",
        "hover:border-accent/20 hover:shadow-[0_0_30px_-5px_rgba(255,153,0,0.12)]",
        className
      )}
      style={{
        background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 40%)`,
      }}
    >
      <div className="relative z-10">{children}</div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent" />
    </motion.div>
  );
}
