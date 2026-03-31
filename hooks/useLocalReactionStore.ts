"use client";

import { useEffect, useState } from "react";
import { ReactionRecord } from "@/lib/types";

const STORAGE_KEY = "reaction-board.records";

export function useLocalReactionStore() {
  const [records, setRecords] = useState<ReactionRecord[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setRecords(JSON.parse(raw));
      }
    } catch {
      setRecords([]);
    }
  }, []);

  function save(nextRecords: ReactionRecord[]) {
    setRecords(nextRecords);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextRecords));
    } catch {
      // Ignore storage errors to keep the main flow available.
    }
  }

  return { records, save };
}
