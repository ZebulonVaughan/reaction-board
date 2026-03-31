"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";

export function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const connector = connectors[0];

  if (isConnected && address) {
    return (
      <button className="wallet-button connected" onClick={() => disconnect()} type="button">
        {`${address.slice(0, 6)}...${address.slice(-4)}`}
      </button>
    );
  }

  return (
    <button
      className="wallet-button idle"
      onClick={() => connector && connect({ connector })}
      type="button"
      disabled={!connector || isPending}
    >
      {isPending ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}
