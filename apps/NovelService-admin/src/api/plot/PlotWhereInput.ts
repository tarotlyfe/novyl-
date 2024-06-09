import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PlotWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  novelId?: StringNullableFilter;
};
