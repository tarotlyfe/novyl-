import { NovelWhereUniqueInput } from "../novel/NovelWhereUniqueInput";

export type CharacterUpdateInput = {
  description?: string | null;
  name?: string | null;
  novel?: NovelWhereUniqueInput | null;
  role?: string | null;
};
