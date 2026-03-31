import { ReactionOption } from "./types";

const rawReactions: Array<[number, string, string, string]> = [
  [1, "Like", "Like", "A clean approval signal for quick support."],
  [2, "Fire", "Fire", "A high-energy response for standout moments."],
  [3, "GM", "GM", "A bright good-morning ping for the timeline."],
  [4, "Wave", "Wave", "A casual hello for easy social touchpoints."],
  [5, "Spark", "Spark", "A fresh idea marker for interesting updates."],
  [6, "Bolt", "Bolt", "A fast signal for urgency or momentum."],
  [7, "Smile", "Smile", "A warm social reaction with light positivity."],
  [8, "Check", "Check", "A verified nod for completed actions."],
  [9, "Echo", "Echo", "A repeat signal for resonance across the board."],
  [10, "Mint", "Mint", "A crisp signal for fresh drops and clean wins."],
  [11, "Pulse", "Pulse", "A live heartbeat marker for active moments."],
  [12, "Shine", "Shine", "A polished appreciation signal for quality."],
  [13, "Ping", "Ping", "A lightweight call for attention."],
  [14, "Glow", "Glow", "A soft highlight for moments worth watching."],
  [15, "Boost", "Boost", "An extra push for momentum and support."],
  [16, "Star", "Star", "A favorite marker with a little shine."],
  [17, "Flip", "Flip", "A switch-up reaction for surprise moments."],
  [18, "Flow", "Flow", "A calm momentum signal for smooth updates."],
  [19, "Lock", "Lock", "A secure confirmation reaction."],
  [20, "Beam", "Beam", "A bright finish signal for strong energy."]
];

const reactions: ReactionOption[] = rawReactions.map(([id, label, shortLabel, description]) => ({
  id,
  label,
  shortLabel,
  description,
  previewRecordId: `mock-${id}`
}));

export function getAllReactions() {
  return reactions;
}

export function getFeaturedReactions() {
  return reactions.slice(0, 6);
}

export function getReactionOption(id: number) {
  return reactions.find((reaction) => reaction.id === id) ?? null;
}
