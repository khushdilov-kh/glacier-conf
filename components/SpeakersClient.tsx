"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SpeakerBioDialog from "@/components/SpeakerBioDialog";
import SpeakerCard from "@/components/SpeakerCard";
import { MOTION } from "@/lib/motion";
import type { Speaker } from "@/lib/types";

interface SpeakersClientProps {
  speakers: Speaker[];
}

export default function SpeakersClient({ speakers }: SpeakersClientProps) {
  const reduceMotion = useReducedMotion();
  const [activeSpeakerId, setActiveSpeakerId] = useState<string | null>(null);

  const activeSpeaker = speakers.find((speaker) => speaker.id === activeSpeakerId) ?? null;

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: reduceMotion ? 0 : MOTION.stagger }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : MOTION.distance
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : MOTION.duration.base,
        ease: MOTION.ease
      }
    }
  };

  return (
    <>
      <motion.div
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {speakers.map((speaker) => (
          <motion.div key={speaker.id} variants={itemVariants} className="h-full">
            <SpeakerCard speaker={speaker} onOpenBio={() => setActiveSpeakerId(speaker.id)} />
          </motion.div>
        ))}
      </motion.div>

      <SpeakerBioDialog speaker={activeSpeaker} onClose={() => setActiveSpeakerId(null)} />
    </>
  );
}
