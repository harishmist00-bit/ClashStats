import { Users, Shield, ChevronRight } from "lucide-react";
import type { Player } from "../types/player";

interface Props {
  clan: NonNullable<Player["clan"]>;
}

export default function ClanCard({ clan }: Props) {

  return (
    <div
      id="clan"
      className="rounded-2xl border border-border bg-surface p-6"
    >

      <div className="mb-6 flex items-center justify-between">

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            Current Clan
          </p>

          <h3 className="mt-1 text-xl font-bold">
            {clan.name}
          </h3>

          <p className="mt-1 font-mono text-xs text-gray-600">
            {clan.tag}
          </p>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-black/30 text-2xl">
          🏰
        </div>

      </div>

      <div className="grid grid-cols-2 gap-3">

        <div className="rounded-xl bg-black/20 p-4">
          <Users size={17} className="mb-2 text-gold" />

          <p className="text-xs text-gray-500">
            Members
          </p>

          <p className="mt-1 font-bold">
            {clan.members}/50
          </p>
        </div>

        <div className="rounded-xl bg-black/20 p-4">
          <Shield size={17} className="mb-2 text-gold" />

          <p className="text-xs text-gray-500">
            Clan Level
          </p>

          <p className="mt-1 font-bold">
            {clan.clanLevel}
          </p>
        </div>

      </div>

      <button className="mt-4 flex w-full items-center justify-between rounded-xl border border-border px-4 py-3 text-sm font-semibold text-gray-300 transition hover:border-gray-600 hover:text-white">
        View Clan
        <ChevronRight size={17} />
      </button>

    </div>
  );
}