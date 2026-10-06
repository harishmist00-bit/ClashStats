export interface PlayerClan {
  tag: string;
  name: string;
  clanLevel: number;
  badgeUrls?: {
    small: string;
    medium: string;
    large: string;
  };
}

export interface LeagueTier {
  id: number;
  name: string;
  iconUrls?: {
    small: string;
    large: string;
  };
}

export interface BuilderBaseLeague {
  id: number;
  name: string;
}

export interface Troop {
  name: string;
  level: number;
  maxLevel: number;
  village: "home" | "builderBase";
  superTroopIsActive?: boolean;
}

export interface HeroEquipment {
  name: string;
  level: number;
  maxLevel: number;
  village: "home" | "builderBase";
}

export interface Hero {
  name: string;
  level: number;
  maxLevel: number;
  village: "home" | "builderBase";
}

export interface Spell {
  name: string;
  level: number;
  maxLevel: number;
  village: "home" | "builderBase";
}

export interface Achievement {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo: string | null;
  village: string;
}

export interface Label {
  id: number;
  name: string;
  iconUrls?: {
    small: string;
    medium: string;
  };
}

export interface Player {
  tag: string;
  name: string;

  townHallLevel: number;
  expLevel: number;

  trophies: number;
  bestTrophies: number;

  warStars: number;

  attackWins: number;
  defenseWins: number;

  builderHallLevel: number;
  builderBaseTrophies: number;
  bestBuilderBaseTrophies: number;

  role: string;
  warPreference: string;

  donations: number;
  donationsReceived: number;

  clanCapitalContributions: number;

  clan?: PlayerClan;

  leagueTier?: LeagueTier;

  builderBaseLeague?: BuilderBaseLeague;

  achievements: Achievement[];

  labels: Label[];

  troops: Troop[];

  heroes: Hero[];

  heroEquipment: HeroEquipment[];

  spells: Spell[];
}