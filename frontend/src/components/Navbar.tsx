import { Shield, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-black">
            <Shield size={22} fill="currentColor" />
          </div>

          <div>
            <h1 className="text-lg font-extrabold tracking-tight">
              Clash<span className="text-gold">Stats</span>
            </h1>

            <p className="hidden text-[10px] uppercase tracking-widest text-gray-500 sm:block">
              Player Analytics
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#search"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Search
          </a>

          <a
            href="#stats"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Analytics
          </a>

          <a
            href="#clan"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Clan
          </a>
        </div>

        {/* Mobile menu */}
        <button className="rounded-lg border border-border p-2 text-gray-400 transition hover:text-white md:hidden">
          <Menu size={20} />
        </button>

      </div>
    </nav>
  );
}