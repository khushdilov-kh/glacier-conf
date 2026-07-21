import LocalizedText from "@/components/LocalizedText";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import type { Track } from "@/lib/types";

export default function TrackGrid({ tracks }: { tracks: Track[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {tracks.map((track, index) => (
        <Reveal key={track.id} delay={index * 0.04}>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-ink-900">
              <LocalizedText value={track.title} />
            </h3>
            <p className="mt-3 text-sm text-ink-600">
              <LocalizedText value={track.description} />
            </p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}