import type { Metadata } from "next";
import RetailContent from "@/components/pages/RetailContent";

export const metadata: Metadata = {
  title: "Solar Retail Setter | Lowe's & Home Depot | Uncommon Division",
  description: "Set solar appointments inside Lowe's and Home Depot. No door knocking, warm foot traffic, full training. The best entry point into six-figure solar sales.",
};

export default function RetailPage() {
  return <RetailContent />;
}
