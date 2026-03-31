export const reactionBoardAddress = "0x15fee7c667a1a2953accaa18f98dfee56bce3f75" as const;

export const reactionBoardAbi = [
  {
    inputs: [{ internalType: "uint256", name: "reactionId", type: "uint256" }],
    name: "react",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "lastReaction",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "reactionCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: false, internalType: "uint256", name: "reactionId", type: "uint256" }
    ],
    name: "Reacted",
    type: "event"
  }
] as const;
