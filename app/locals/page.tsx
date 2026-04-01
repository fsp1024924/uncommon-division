import type { Metadata } from "next";
import LocalsContent from "@/components/pages/LocalsContent";

export const metadata: Metadata = {
  title: "Local Solar Sales Rep | Year-Round In-Market Selling | Uncommon Division",
  description: "Build a solar sales career in your own market. Year-round, full-time. Clear path from setter to closer to manager. Earn $100K+ annually.",
};

export default function LocalsPage() {
  return <LocalsContent />;
}
