import { Outline as TOutline } from "../api/outline/Outline";

export const OUTLINE_TITLE_FIELD = "title";

export const OutlineTitle = (record: TOutline): string => {
  return record.title?.toString() || String(record.id);
};
