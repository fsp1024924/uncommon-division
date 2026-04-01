import type { Metadata } from "next";
import XTeamContent from "@/components/pages/XTeamContent";

export const metadata: Metadata = {
  title: "X Team Solar Sales | 10 Days On, 20 Days Off | Travel Sales Rep | Uncommon",
  description: "Live anywhere. Sell everywhere. The X Team model deploys you into top solar markets for 10 days with 20 days off. High six-figure earning potential.",
};

export default function XTeamPage() {
  return <XTeamContent />;
}
