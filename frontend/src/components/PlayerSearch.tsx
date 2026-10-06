import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";

interface Props {
  onSearch: (tag: string) => void;
}

export default function PlayerSearch({ onSearch }: Props) {

  const [tag, setTag] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  console.log("SEARCH BUTTON CLICKED");
  console.log("TAG:", tag);

  const cleanTag = tag.trim();

  if (!cleanTag) {
    console.log("TAG IS EMPTY");
    return;
  }

  onSearch(cleanTag);
};

  return (
    <div id="search" className="mx-auto max-w-3xl px-5">

      <div className="mb-5 text-center">
        <div className="mb-3 inline-flex rounded-full border border-gold/20 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
          PLAYER LOOKUP
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
          Find any Clash of Clans
          <span className="block text-gold">
            player profile
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
          Enter a player tag to explore trophies, Town Hall,
          heroes, troops, clan information and more.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="group flex items-center rounded-2xl border border-border bg-surface p-2 shadow-2xl transition focus-within:border-gold/50">

          <Search
            className="ml-3 shrink-0 text-gray-500 group-focus-within:text-gold"
            size={21}
          />

          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="#PLAYER TAG"
            className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm font-medium text-white outline-none placeholder:text-gray-600"
          />

          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-bold text-black transition hover:brightness-110"
          >
            Search
            <ArrowRight size={17} />
          </button>

        </div>
      </form>

      <p className="mt-3 text-center text-xs text-gray-600">
        Example: #2ABC123XYZ
      </p>

    </div>
  );
}