import {
  Trophy,
  Shield,
  Swords,
  Crown,
  Star,
} from "lucide-react";

import type { Player } from "../types/player";

interface PlayerHeroProps {
  player: Player;
}

export default function PlayerHero({
  player,
}: PlayerHeroProps) {

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-surface">

      {/* TOP */}

      <div className="relative p-6 md:p-8">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* PLAYER */}

          <div className="flex items-center gap-5">

            {/* TH */}

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10">

              <div className="text-center">

                <p className="text-xs font-bold uppercase text-gray-500">
                  TH
                </p>

                <p className="text-4xl font-black text-gold">
                  {player.townHallLevel}
                </p>

              </div>

            </div>


            {/* NAME */}

            <div>

              <h2 className="text-3xl font-black tracking-tight">
                {player.name}
              </h2>

              <p className="mt-1 font-mono text-sm text-gray-500">
                {player.tag}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">

                {player.leagueTier && (
                  <span className="flex items-center gap-1 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
                    <Crown size={13} />
                    {player.leagueTier.name}
                  </span>
                )}

                <span className="rounded-full border border-border bg-background px-3 py-1 text-xs text-gray-400">
                  Level {player.expLevel}
                </span>

              </div>

            </div>

          </div>


          {/* TROPHIES */}

          <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4">

            {player.leagueTier?.iconUrls?.small && (

              <img
                src={player.leagueTier.iconUrls.small}
                alt={player.leagueTier.name}
                className="h-14 w-14 object-contain"
              />

            )}

            <div>

              <p className="text-xs uppercase tracking-wider text-gray-500">
                Trophies
              </p>

              <p className="text-2xl font-black">
                {player.trophies.toLocaleString()}
              </p>

              <p className="text-xs text-gray-500">
                Best {player.bestTrophies.toLocaleString()}
              </p>

            </div>

          </div>

        </div>


        {/* STATS */}

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">

          <MiniStat
            icon={<Trophy size={18} />}
            label="War Stars"
            value={player.warStars}
          />

          <MiniStat
            icon={<Swords size={18} />}
            label="Attack Wins"
            value={player.attackWins}
          />

          <MiniStat
            icon={<Shield size={18} />}
            label="Defense Wins"
            value={player.defenseWins}
          />

          <MiniStat
            icon={<Star size={18} />}
            label="Donations"
            value={player.donations}
          />

        </div>

      </div>


      {/* CLAN */}

      {player.clan && (

        <div className="border-t border-border bg-background/50 p-5">

          <div className="flex items-center gap-4">

            {player.clan.badgeUrls?.medium && (

              <img
                src={player.clan.badgeUrls.medium}
                alt={player.clan.name}
                className="h-14 w-14 object-contain"
              />

            )}

            <div>

              <p className="text-xs uppercase tracking-wider text-gray-500">
                Current Clan
              </p>

              <h3 className="text-lg font-bold">
                {player.clan.name}
              </h3>

              <p className="font-mono text-xs text-gray-500">
                {player.clan.tag}
              </p>

            </div>

            <div className="ml-auto text-right">

              <p className="text-xs text-gray-500">
                Clan Level
              </p>

              <p className="text-xl font-black text-gold">
                {player.clan.clanLevel}
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}


function MiniStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {

  return (
    <div className="rounded-xl border border-border bg-background p-4">

      <div className="mb-2 text-gold">
        {icon}
      </div>

      <p className="text-xs text-gray-500">
        {label}
      </p>

      <p className="mt-1 text-xl font-black">
        {value.toLocaleString()}
      </p>

    </div>
  );
}