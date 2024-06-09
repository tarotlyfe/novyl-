import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NovelWhereUniqueInput } from "../novel/NovelWhereUniqueInput";

export type CharacterWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  novel?: NovelWhereUniqueInput;
  role?: StringNullableFilter;
};
