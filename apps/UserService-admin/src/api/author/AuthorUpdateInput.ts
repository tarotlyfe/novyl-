import { InputJsonValue } from "../../types";

export type AuthorUpdateInput = {
  bio?: string | null;
  email?: string | null;
  name?: string | null;
  novels?: InputJsonValue;
  password?: string | null;
  roles?: "Option1" | null;
  username?: string | null;
  usersId?: string | null;
};
