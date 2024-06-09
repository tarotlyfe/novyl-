import { Beat as TBeat } from "../api/beat/Beat";

export const BEAT_TITLE_FIELD = "title";

export const BeatTitle = (record: TBeat): string => {
  return record.title?.toString() || String(record.id);
};
