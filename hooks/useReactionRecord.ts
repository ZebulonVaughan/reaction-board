"use client";

import { useMemo } from "react";
import { getReactionOption } from "@/lib/reaction-options";
import { getMockRecords } from "@/lib/reaction-records";
import { useLocalReactionStore } from "./useLocalReactionStore";

export function useReactionRecord(id: string) {
  const { records } = useLocalReactionStore();

  return useMemo(() => {
    const allRecords = [...records, ...getMockRecords()].filter(
      (record, index, list) => list.findIndex((item) => item.id === record.id) === index
    );
    const record = allRecords.find((item) => item.id === id) ?? null;
    const option = record ? getReactionOption(record.reactionId) : null;
    return { record, option };
  }, [id, records]);
}
