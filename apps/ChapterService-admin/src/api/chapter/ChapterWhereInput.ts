import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OutlineItemListRelationFilter } from "../outlineItem/OutlineItemListRelationFilter";
import { SceneListRelationFilter } from "../scene/SceneListRelationFilter";

export type ChapterWhereInput = {
  chapterNumber?: IntNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  novelId?: StringNullableFilter;
  outlineItems?: OutlineItemListRelationFilter;
  scenes?: SceneListRelationFilter;
  title?: StringNullableFilter;
};
