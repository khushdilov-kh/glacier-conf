import type { Metadata } from "next";
import ConferenceConceptNote from "@/components/about/ConferenceConceptNote";

export const metadata: Metadata = {
  title: "About the Conference",
  description: "Background, rationale, objectives and expected outcomes of the International Scientific and Practical Conference."
};

export default function AboutPage() {
  return <ConferenceConceptNote />;
}
