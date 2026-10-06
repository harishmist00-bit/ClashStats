import { useState } from "react";

import {
  Trophy,
  Swords,
  Shield,
  Gift,
  UserRound,
} from "lucide-react";

import Navbar from "../components/Navbar";
import PlayerSearch from "../components/PlayerSearch";
import PlayerHero from "../components/PlayerHero";
import StatCard from "../components/StatCard";
import ClanCard from "../components/ClanCard";

import HeroSection from "../components/HeroSection";
import EquipmentSection from "../components/EquipmentSection";
import TroopSection from "../components/TroopSection";
import SpellSection from "../components/SpellSection";
import BuilderBaseSection from "../components/BuilderBaseSection";
import AchievementSection from "../components/AchievementSection";
import LabelSection from "../components/LabelSection";

import { getPlayer } from "../api/playerApi";

import type { Player } from "../types/player";

export default function Home() {

  const [player, setPlayer] = useState<Player | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSearch = async (tag: string) => {

    try {

      setLoading(true);
      setError("");
      setPlayer(null);

      console.log("Searching:", tag);

      const data = await getPlayer(tag);

      console.log("PLAYER DATA:", data);

      setPlayer(data);

    } catch (err) {

      console.error("SEARCH ERROR:", err);

      setPlayer(null);

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen bg-background text-white">

      <Navbar />

      <main>

        {/* ================= HERO ================= */}

        <section className="relative overflow-hidden px-5 pb-20 pt-24">

          <div className="absolute left-1/2 top-20 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]" />

          <div className="relative z-10">

            <div className="mb-8 text-center">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Clash of Clans Analytics
              </p>

              <h1 className="mt-3 text-4xl font-black md:text-6xl">

                Analyze Your{" "}

                <span className="text-gold">
                  Village
                </span>

              </h1>

              <p className="mx-auto mt-4 max-w-xl text-gray-500">

                Enter your Clash of Clans player tag
                to analyze your complete village,
                heroes, troops and achievements.

              </p>

            </div>

            <PlayerSearch
              onSearch={handleSearch}
              loading={loading}
            />

          </div>

        </section>


        {/* ================= ERROR ================= */}

        {error && (

          <div className="mx-auto mb-8 max-w-2xl px-5">

            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center text-red-400">

              {error}

            </div>

          </div>

        )}


        {/* ================= LOADING ================= */}

        {loading && (

          <div className="pb-12 text-center">

            <div className="inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-3">

              <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-700 border-t-gold" />

              <span className="text-sm text-gray-400">

                Fetching player data...

              </span>

            </div>

          </div>

        )}


        {/* ================= DASHBOARD ================= */}

        {player && !loading && (

          <section className="mx-auto max-w-7xl px-5 pb-20">


            {/* PLAYER HERO */}

            <div className="mb-6">

              <div className="mb-4 flex items-center gap-2">

                <UserRound
                  size={18}
                  className="text-gold"
                />

                <h2 className="text-xl font-bold">
                  Player Overview
                </h2>

              </div>

              <PlayerHero player={player} />

            </div>


            {/* ================= MAIN STATS ================= */}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <StatCard
                icon={<Trophy size={20} />}
                label="Trophies"
                value={player.trophies.toLocaleString()}
                description="CURRENT"
              />

              <StatCard
                icon={<Trophy size={20} />}
                label="Best Trophies"
                value={player.bestTrophies.toLocaleString()}
                description="BEST"
              />

              <StatCard
                icon={<Swords size={20} />}
                label="War Stars"
                value={player.warStars.toLocaleString()}
                description="TOTAL"
              />

              <StatCard
                icon={<Gift size={20} />}
                label="Donations"
                value={player.donations.toLocaleString()}
                description="TOTAL"
              />

            </div>


            {/* ================= BATTLE STATS ================= */}

            <div className="mt-5 rounded-2xl border border-border bg-surface p-6">

              <div className="mb-5">

                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Combat
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Battle Statistics
                </h2>

              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

                <Activity
                  icon={<Swords size={18} />}
                  label="Attack Wins"
                  value={player.attackWins}
                />

                <Activity
                  icon={<Shield size={18} />}
                  label="Defense Wins"
                  value={player.defenseWins}
                />

                <Activity
                  icon={<Gift size={18} />}
                  label="Donations"
                  value={player.donations}
                />

                <Activity
                  icon={<Gift size={18} />}
                  label="Received"
                  value={player.donationsReceived}
                />

              </div>

            </div>


            {/* ================= CLAN ================= */}

            {player.clan && (

              <section className="mt-6">

                <ClanCard clan={player.clan} />

              </section>

            )}


            {/* ================= HEROES ================= */}

            <HeroSection
              heroes={player.heroes}
            />


            {/* ================= EQUIPMENT ================= */}

            <EquipmentSection
              equipment={player.heroEquipment}
            />


            {/* ================= TROOPS ================= */}

            <TroopSection
              troops={player.troops}
            />


            {/* ================= SPELLS ================= */}

            <SpellSection
              spells={player.spells}
            />


            {/* ================= BUILDER BASE ================= */}

            <BuilderBaseSection
              player={player}
            />


            {/* ================= ACHIEVEMENTS ================= */}

            <AchievementSection
              achievements={player.achievements}
            />


            {/* ================= LABELS ================= */}

            <LabelSection
              labels={player.labels}
            />

          </section>

        )}


        {/* ================= EMPTY STATE ================= */}

        {!player && !loading && !error && (

          <section className="px-5 pb-20">

            <div className="mx-auto max-w-2xl py-16 text-center">

              <div className="text-6xl">
                🏰
              </div>

              <h2 className="mt-5 text-2xl font-bold">
                Search for a player
              </h2>

              <p className="mt-2 text-gray-500">
                Enter a Clash of Clans player tag above.
              </p>

            </div>

          </section>

        )}

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-border py-8 text-center text-xs text-gray-600">

        ClashStats · Fan-made Clash of Clans analytics platform

      </footer>

    </div>
  );
}


function Activity({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {

  return (

    <div className="rounded-xl bg-black/20 p-4">

      <div className="mb-3 text-gold">
        {icon}
      </div>

      <p className="text-xs text-gray-500">
        {label}
      </p>

      <p className="mt-1 text-xl font-bold">
        {value.toLocaleString()}
      </p>

    </div>

  );
}