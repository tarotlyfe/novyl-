import { NovelWhereUniqueInput } from "../novel/NovelWhereUniqueInput";

export type CharacterCreateInput = {
  description?: string | null;
  name?: string | null;
  novel?: NovelWhereUniqueInput | null;
  role?: string | null;
};
