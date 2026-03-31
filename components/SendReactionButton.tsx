type SendReactionButtonProps = {
  selectedReaction: number;
  isPending: boolean;
  isConfirming: boolean;
  onSend: () => void;
};

export function SendReactionButton({
  selectedReaction,
  isPending,
  isConfirming,
  onSend
}: SendReactionButtonProps) {
  const label = isPending ? "Confirm in Wallet" : isConfirming ? "Syncing Reaction..." : `Send Reaction ${selectedReaction}`;

  return (
    <button className="send-button" onClick={onSend} disabled={isPending || isConfirming} type="button">
      {label}
    </button>
  );
}
