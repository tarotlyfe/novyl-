import { OutlineItem } from "../outlineItem/OutlineItem";
import { Scene } from "../scene/Scene";

export type Chapter = {
  chapterNumber: number | null;
  content: string | null;
  createdAt: Date;
  id: string;
  novelId: string | null;
  outlineItems?: Array<OutlineItem>;
  scenes?: Array<Scene>;
  title: string | null;
  updatedAt: Date;
};
