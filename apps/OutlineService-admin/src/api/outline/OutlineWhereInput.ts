import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type OutlineWhereInput = {
  id?: StringFilter;
  novelId?: StringNullableFilter;
  outlineItems?: JsonFilter;
  title?: StringNullableFilter;
};
