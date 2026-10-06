import { Sparkles } from "lucide-react";

import type { HeroEquipment } from "../types/player";

interface EquipmentSectionProps {
  equipment: HeroEquipment[];
}

export default function EquipmentSection({
  equipment,
}: EquipmentSectionProps) {

  const homeEquipment = equipment.filter(
    (item) => item.village === "home"
  );

  if (!homeEquipment.length) return null;

  return (
    <section className="mt-6 rounded-2xl border border-border bg-surface p-6">

      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">
          Hero Upgrades
        </p>

        <h2 className="mt-1 text-2xl font-black">
          Hero Equipment
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

        {homeEquipment.map((item) => {

          const percentage =
            item.maxLevel > 0
              ? Math.round(
                  (item.level / item.maxLevel) * 100
                )
              : 0;

          return (
            <div
              key={`${item.name}-${item.village}`}
              className="rounded-xl border border-border bg-background p-4"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                  <Sparkles size={18} />
                </div>

                <div className="flex-1">

                  <p className="font-semibold">
                    {item.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    Level {item.level} / {item.maxLevel}
                  </p>

                </div>

                <span className="text-xs font-bold text-purple-400">
                  {percentage}%
                </span>

              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/30">

                <div
                  className="h-full rounded-full bg-purple-400"
                  style={{
                    width: `${percentage}%`,
                  }}
                />

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}