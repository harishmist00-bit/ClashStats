import { Crown } from "lucide-react";

import type { Hero } from "../types/player";

interface HeroSectionProps {
  heroes: Hero[];
}

export default function HeroSection({ heroes }: HeroSectionProps) {
  const homeHeroes = heroes.filter(
    (hero) => hero.village === "home"
  );

  if (!homeHeroes.length) return null;

  return (
    <section className="mt-6 rounded-2xl border border-border bg-surface p-6">

      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          Home Village
        </p>

        <h2 className="mt-1 text-2xl font-black">
          Heroes
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {homeHeroes.map((hero) => {

          const percentage =
            hero.maxLevel > 0
              ? Math.round(
                  (hero.level / hero.maxLevel) * 100
                )
              : 0;

          return (
            <div
              key={hero.name}
              className="rounded-xl border border-border bg-background p-5"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Crown size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      {hero.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      Hero
                    </p>
                  </div>

                </div>

                <div className="text-right">
                  <p className="text-lg font-black text-gold">
                    {hero.level}
                  </p>

                  <p className="text-xs text-gray-500">
                    / {hero.maxLevel}
                  </p>
                </div>

              </div>

              <div className="mt-5">

                <div className="mb-2 flex justify-between text-xs">
                  <span className="text-gray-500">
                    Level Progress
                  </span>

                  <span className="text-gray-400">
                    {percentage}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-black/30">

                  <div
                    className="h-full rounded-full bg-gold transition-all"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}