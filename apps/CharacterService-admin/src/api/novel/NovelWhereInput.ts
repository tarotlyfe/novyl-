import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { CharacterListRelationFilter } from "../character/CharacterListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type NovelWhereInput = {
  authorId?: StringNullableFilter;
  chapters?: JsonFilter;
  characters?: CharacterListRelationFilter;
  genre?: StringNullableFilter;
  id?: StringFilter;
  outlines?: JsonFilter;
  plots?: JsonFilter;
  summary?: StringNullableFilter;
  title?: StringNullableFilter;
};
