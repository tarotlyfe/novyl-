import { OutlineItem as TOutlineItem } from "../api/outlineItem/OutlineItem";

export const OUTLINEITEM_TITLE_FIELD = "title";

export const OutlineItemTitle = (record: TOutlineItem): string => {
  return record.title?.toString() || String(record.id);
};
