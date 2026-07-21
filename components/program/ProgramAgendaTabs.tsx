"use client";

import { Children, useId, useRef, useState, type KeyboardEvent } from "react";
import ProgramAgendaTimelineTabs from "@/components/program/ProgramAgendaTimelineTabs";
import { getDayOptionLabel } from "@/components/program/programAgendaTabUtils";
import { useLanguage } from "@/lib/i18n";
import type { ProgramAgendaDay } from "@/lib/programAgenda";

export default function ProgramAgendaTabs({
  days,
  children
}: {
  days: ProgramAgendaDay[];
  children: React.ReactNode;
}) {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const panelId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeDay = days[activeIndex];
  const panels = Children.toArray(children);

  if (!days.length || !activeDay) {
    return null;
  }

  const lastIndex = days.length - 1;
  const panelLabelId = `${panelId}-panel-label`;

  const moveToDay = (nextIndex: number, shouldFocus = false) => {
    const clampedIndex = Math.max(0, Math.min(lastIndex, nextIndex));
    setActiveIndex(clampedIndex);

    if (shouldFocus) {
      tabRefs.current[clampedIndex]?.focus();
    }
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        moveToDay(index === lastIndex ? 0 : index + 1, true);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        moveToDay(index === 0 ? lastIndex : index - 1, true);
        break;
      case "Home":
        event.preventDefault();
        moveToDay(0, true);
        break;
      case "End":
        event.preventDefault();
        moveToDay(lastIndex, true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="space-y-5 sm:space-y-6">
      <ProgramAgendaTimelineTabs
        activeIndex={activeIndex}
        days={days}
        panelId={panelId}
        setTabRef={(index, node) => {
          tabRefs.current[index] = node;
        }}
        onSelect={(index) => moveToDay(index)}
        onTabKeyDown={handleTabKeyDown}
      />

      <span id={panelLabelId} className="sr-only">
        {getDayOptionLabel(activeDay, t)}
      </span>

      <div
        id={`${panelId}-panel`}
        role="tabpanel"
        aria-labelledby={panelLabelId}
        className="min-w-0"
      >
        {panels[activeIndex]}
      </div>
    </div>
  );
}
