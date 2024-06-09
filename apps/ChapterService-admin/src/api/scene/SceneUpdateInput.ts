import { InputJsonValue } from "../../types";
import { ChapterWhereUniqueInput } from "../chapter/ChapterWhereUniqueInput";
import { OutlineItemUpdateManyWithoutScenesInput } from "./OutlineItemUpdateManyWithoutScenesInput";

export type SceneUpdateInput = {
  beats?: InputJsonValue;
  chapter?: ChapterWhereUniqueInput | null;
  content?: string | null;
  outlineItems?: OutlineItemUpdateManyWithoutScenesInput;
  title?: string | null;
};
