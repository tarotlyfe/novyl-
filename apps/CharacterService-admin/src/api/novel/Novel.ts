import { JsonValue } from "type-fest";
import { Character } from "../character/Character";

export type Novel = {
  authorId: string | null;
  chapters: JsonValue;
  characters?: Array<Character>;
  createdAt: Date;
  genre: string | null;
  id: string;
  outlines: JsonValue;
  plots: JsonValue;
  summary: string | null;
  title: string | null;
  updatedAt: Date;
};
