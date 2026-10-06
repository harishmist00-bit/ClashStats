import type { Player } from "../types/player";

const API_URL = "http://127.0.0.1:8000/api";

export async function getPlayer(playerTag: string): Promise<Player> {
  const cleanTag = playerTag.trim();

  const response = await fetch(
    `${API_URL}/player/${encodeURIComponent(cleanTag)}/`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.details?.reason ||
      data?.error ||
      "Failed to fetch player"
    );
  }

  return data;
}