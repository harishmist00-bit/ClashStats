import { WandSparkles } from "lucide-react";

import type { Spell } from "../types/player";

interface SpellSectionProps {
  spells: Spell[];
}

export default function SpellSection({
  spells,
}: SpellSectionProps) {

  const homeSpells = spells.filter(
    (spell) => spell.village === "home"
  );

  if (!homeSpells.length) return null;

  return (
    <section className="mt-6 rounded-2xl border border-border bg-surface p-6">

      <div className="mb-6">

        <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
          Magic
        </p>

        <h2 className="mt-1 text-2xl font-black">
          Spells
        </h2>

      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {homeSpells.map((spell) => {

          const percentage =
            spell.maxLevel > 0
              ? Math.round(
                  (spell.level / spell.maxLevel) * 100
                )
              : 0;

          return (
            <div
              key={spell.name}
              className="rounded-xl border border-border bg-background p-4"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <WandSparkles size={18} />
                </div>

                <div className="flex-1">

                  <p className="font-semibold">
                    {spell.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    Level {spell.level} / {spell.maxLevel}
                  </p>

                </div>

              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/30">

                <div
                  className="h-full rounded-full bg-blue-400"
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