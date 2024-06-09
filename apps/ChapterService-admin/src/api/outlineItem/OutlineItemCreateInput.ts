import { ChapterWhereUniqueInput } from "../chapter/ChapterWhereUniqueInput";
import { SceneWhereUniqueInput } from "../scene/SceneWhereUniqueInput";

export type OutlineItemCreateInput = {
  chapter?: ChapterWhereUniqueInput | null;
  content?: string | null;
  outlineId?: string | null;
  scene?: SceneWhereUniqueInput | null;
  title?: string | null;
};
