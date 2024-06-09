import { Novel } from "../novel/Novel";

export type Character = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  novel?: Novel | null;
  role: string | null;
  updatedAt: Date;
};
