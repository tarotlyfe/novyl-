import { JsonValue } from "type-fest";

export type Outline = {
  createdAt: Date;
  id: string;
  novelId: string | null;
  outlineItems: JsonValue;
  title: string | null;
  updatedAt: Date;
};
