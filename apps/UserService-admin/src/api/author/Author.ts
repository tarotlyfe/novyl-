import { JsonValue } from "type-fest";

export type Author = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  novels: JsonValue;
  password: string | null;
  roles?: "Option1" | null;
  updatedAt: Date;
  username: string | null;
  usersId: string | null;
};
