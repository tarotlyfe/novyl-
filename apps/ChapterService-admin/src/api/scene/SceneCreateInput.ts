import { InputJsonValue } from "../../types";
import { ChapterWhereUniqueInput } from "../chapter/ChapterWhereUniqueInput";
import { OutlineItemCreateNestedManyWithoutScenesInput } from "./OutlineItemCreateNestedManyWithoutScenesInput";

export type SceneCreateInput = {
  beats?: InputJsonValue;
  chapter?: ChapterWhereUniqueInput | null;
  content?: string | null;
  outlineItems?: OutlineItemCreateNestedManyWithoutScenesInput;
  title?: string | null;
};
