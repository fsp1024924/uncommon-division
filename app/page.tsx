import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import StatBanner from "@/components/home/StatBanner";
import ModelShowcase from "@/components/home/ModelShowcase";
import Testimonials from "@/components/home/Testimonials";
import Culture from "@/components/home/Culture";
import BottomCTA from "@/components/home/BottomCTA";

export const metadata: Metadata = {
  title: "Uncommon Division | Solar Sales Careers — Locals, X Team & Retail",
  description:
    "Three paths to six figures in solar sales. $169M paid in 2024. Locals, X Team, and Retail. Freedom Forever's #1 sales organization across 38 states.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatBanner />
      <ModelShowcase />
      <Testimonials />
      <Culture />
      <BottomCTA />
    </main>
  );
}
