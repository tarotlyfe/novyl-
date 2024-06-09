import { OutlineItemCreateNestedManyWithoutChaptersInput } from "./OutlineItemCreateNestedManyWithoutChaptersInput";
import { SceneCreateNestedManyWithoutChaptersInput } from "./SceneCreateNestedManyWithoutChaptersInput";

export type ChapterCreateInput = {
  chapterNumber?: number | null;
  content?: string | null;
  novelId?: string | null;
  outlineItems?: OutlineItemCreateNestedManyWithoutChaptersInput;
  scenes?: SceneCreateNestedManyWithoutChaptersInput;
  title?: string | null;
};
