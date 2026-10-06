import { Swords } from "lucide-react";

import type { Troop } from "../types/player";

interface TroopSectionProps {
  troops: Troop[];
}

function TroopCard({ troop }: { troop: Troop }) {

  const percentage =
    troop.maxLevel > 0
      ? Math.round(
          (troop.level / troop.maxLevel) * 100
        )
      : 0;

  return (
    <div className="rounded-xl border border-border bg-background p-4">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
          <Swords size={18} />
        </div>

        <div className="min-w-0 flex-1">

          <p className="truncate font-semibold">
            {troop.name}
          </p>

          <p className="text-xs text-gray-500">
            Level {troop.level} / {troop.maxLevel}
          </p>

        </div>

        {troop.superTroopIsActive && (
          <span className="rounded-full bg-purple-500/10 px-2 py-1 text-[10px] font-bold text-purple-400">
            SUPER
          </span>
        )}

      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/30">

        <div
          className="h-full rounded-full bg-green-400"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}

export default function TroopSection({
  troops,
}: TroopSectionProps) {

  const homeTroops = troops.filter(
    (troop) => troop.village === "home"
  );

  const builderTroops = troops.filter(
    (troop) => troop.village === "builderBase"
  );

  return (
    <section className="mt-6 rounded-2xl border border-border bg-surface p-6">

      <div className="mb-6">

        <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
          Army
        </p>

        <h2 className="mt-1 text-2xl font-black">
          Troops
        </h2>

      </div>

      {homeTroops.length > 0 && (
        <>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">
            Home Village
          </h3>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {homeTroops.map((troop) => (
              <TroopCard
                key={`${troop.name}-${troop.village}`}
                troop={troop}
              />
            ))}

          </div>
        </>
      )}

      {builderTroops.length > 0 && (
        <div className="mt-8">

          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">
            Builder Base
          </h3>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {builderTroops.map((troop) => (
              <TroopCard
                key={`${troop.name}-${troop.village}`}
                troop={troop}
              />
            ))}

          </div>

        </div>
      )}

    </section>
  );
}