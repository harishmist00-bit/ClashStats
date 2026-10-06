import {
  Hammer,
  Trophy,
  Crown,
} from "lucide-react";

import type { Player } from "../types/player";

interface BuilderBaseSectionProps {
  player: Player;
}

export default function BuilderBaseSection({
  player,
}: BuilderBaseSectionProps) {

  return (
    <section className="mt-6 rounded-2xl border border-border bg-surface p-6">

      <div className="mb-6">

        <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">
          Builder Base
        </p>

        <h2 className="mt-1 text-2xl font-black">
          Builder Base Statistics
        </h2>

      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <BuilderStat
          icon={<Hammer size={20} />}
          label="Builder Hall"
          value={player.builderHallLevel}
        />

        <BuilderStat
          icon={<Trophy size={20} />}
          label="Trophies"
          value={player.builderBaseTrophies}
        />

        <BuilderStat
          icon={<Trophy size={20} />}
          label="Best Trophies"
          value={player.bestBuilderBaseTrophies}
        />

        <BuilderStat
          icon={<Crown size={20} />}
          label="League"
          value={player.builderBaseLeague?.name || "Unranked"}
          text
        />

      </div>

    </section>
  );
}

function BuilderStat({
  icon,
  label,
  value,
  text = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  text?: boolean;
}) {

  return (
    <div className="rounded-xl border border-border bg-background p-4">

      <div className="mb-3 text-orange-400">
        {icon}
      </div>

      <p className="text-xs text-gray-500">
        {label}
      </p>

      <p
        className={`mt-1 font-black ${
          text ? "text-lg" : "text-2xl"
        }`}
      >
        {typeof value === "number"
          ? value.toLocaleString()
          : value}
      </p>

    </div>
  );
}