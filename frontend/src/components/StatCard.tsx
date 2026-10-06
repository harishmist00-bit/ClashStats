import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
  value: string | number;
  description?: string;
}

export default function StatCard({
  icon,
  label,
  value,
  description,
}: Props) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 transition hover:-translate-y-1 hover:border-gray-600">

      <div className="mb-5 flex items-center justify-between">
        <div className="rounded-xl bg-white/5 p-2.5 text-gold">
          {icon}
        </div>

        <span className="text-xs text-gray-600">
          {description}
        </span>
      </div>

      <p className="text-sm text-gray-500">
        {label}
      </p>

      <h3 className="mt-1 text-2xl font-extrabold">
        {value}
      </h3>

    </div>
  );
}