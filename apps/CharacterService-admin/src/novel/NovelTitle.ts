import { Novel as TNovel } from "../api/novel/Novel";

export const NOVEL_TITLE_FIELD = "title";

export const NovelTitle = (record: TNovel): string => {
  return record.title?.toString() || String(record.id);
};
