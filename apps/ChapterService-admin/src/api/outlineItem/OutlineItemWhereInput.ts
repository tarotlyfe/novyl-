import { ChapterWhereUniqueInput } from "../chapter/ChapterWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SceneWhereUniqueInput } from "../scene/SceneWhereUniqueInput";

export type OutlineItemWhereInput = {
  chapter?: ChapterWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  outlineId?: StringNullableFilter;
  scene?: SceneWhereUniqueInput;
  title?: StringNullableFilter;
};
