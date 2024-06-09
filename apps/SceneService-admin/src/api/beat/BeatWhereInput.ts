import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BeatWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  sceneId?: StringNullableFilter;
  title?: StringNullableFilter;
};
