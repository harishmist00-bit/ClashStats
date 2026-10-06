import { Tag } from "lucide-react";

import type { Label } from "../types/player";

interface LabelSectionProps {
  labels: Label[];
}

export default function LabelSection({
  labels,
}: LabelSectionProps) {

  if (!labels?.length) return null;

  return (
    <section className="mt-6 rounded-2xl border border-border bg-surface p-6">

      <div className="mb-5">

        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
          Player Tags
        </p>

        <h2 className="mt-1 text-2xl font-black">
          Labels
        </h2>

      </div>

      <div className="flex flex-wrap gap-3">

        {labels.map((label) => (

          <div
            key={label.id}
            className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2"
          >

            {label.iconUrls?.small ? (
              <img
                src={label.iconUrls.small}
                alt={label.name}
                className="h-6 w-6 object-contain"
              />
            ) : (
              <Tag
                size={16}
                className="text-cyan-400"
              />
            )}

            <span className="text-sm font-semibold">
              {label.name}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}