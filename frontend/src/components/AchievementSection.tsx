import { Star } from "lucide-react";

import type { Achievement } from "../types/player";

interface AchievementSectionProps {
  achievements: Achievement[];
}

export default function AchievementSection({
  achievements,
}: AchievementSectionProps) {

  if (!achievements?.length) return null;

  return (
    <section className="mt-6 rounded-2xl border border-border bg-surface p-6">

      <div className="mb-6">

        <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
          Progress
        </p>

        <h2 className="mt-1 text-2xl font-black">
          Achievements
        </h2>

      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

        {achievements.map((achievement) => {

          const percentage =
            achievement.target > 0
              ? Math.min(
                  100,
                  Math.round(
                    (achievement.value /
                      achievement.target) *
                      100
                  )
                )
              : 0;

          return (
            <div
              key={achievement.name}
              className="rounded-xl border border-border bg-background p-4"
            >

              <div className="flex gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400">
                  <Star size={18} />
                </div>

                <div className="min-w-0 flex-1">

                  <p className="font-semibold">
                    {achievement.name}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {achievement.info}
                  </p>

                  <div className="mt-3">

                    <div className="mb-1 flex justify-between text-xs">

                      <span className="text-gray-500">
                        {achievement.value.toLocaleString()}
                        {" / "}
                        {achievement.target.toLocaleString()}
                      </span>

                      <span className="text-yellow-400">
                        {achievement.stars} ★
                      </span>

                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-black/30">

                      <div
                        className="h-full rounded-full bg-yellow-400"
                        style={{
                          width: `${percentage}%`,
                        }}
                      />

                    </div>

                  </div>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}