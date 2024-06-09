import { JsonFilter } from "../../util/JsonFilter";
import { ChapterWhereUniqueInput } from "../chapter/ChapterWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OutlineItemListRelationFilter } from "../outlineItem/OutlineItemListRelationFilter";

export type SceneWhereInput = {
  beats?: JsonFilter;
  chapter?: ChapterWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  outlineItems?: OutlineItemListRelationFilter;
  title?: StringNullableFilter;
};
