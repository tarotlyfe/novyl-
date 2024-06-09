import { JsonValue } from "type-fest";
import { Chapter } from "../chapter/Chapter";
import { OutlineItem } from "../outlineItem/OutlineItem";

export type Scene = {
  beats: JsonValue;
  chapter?: Chapter | null;
  content: string | null;
  createdAt: Date;
  id: string;
  outlineItems?: Array<OutlineItem>;
  title: string | null;
  updatedAt: Date;
};
