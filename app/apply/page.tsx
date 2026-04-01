import type { Metadata } from "next";
import ApplyContent from "@/components/pages/ApplyContent";

export const metadata: Metadata = {
  title: "Apply Now | Solar Sales Jobs | Uncommon Division",
  description: "Apply to Uncommon Division. Locals, X Team, and Retail roles across 38 states. Commission-based, high earning potential. Apply in 2 minutes.",
};

export default function ApplyPage() {
  return <ApplyContent />;
}
