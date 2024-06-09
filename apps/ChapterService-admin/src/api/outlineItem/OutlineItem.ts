import { Chapter } from "../chapter/Chapter";
import { Scene } from "../scene/Scene";

export type OutlineItem = {
  chapter?: Chapter | null;
  content: string | null;
  createdAt: Date;
  id: string;
  outlineId: string | null;
  scene?: Scene | null;
  title: string | null;
  updatedAt: Date;
};
