import { OutlineItemUpdateManyWithoutChaptersInput } from "./OutlineItemUpdateManyWithoutChaptersInput";
import { SceneUpdateManyWithoutChaptersInput } from "./SceneUpdateManyWithoutChaptersInput";

export type ChapterUpdateInput = {
  chapterNumber?: number | null;
  content?: string | null;
  novelId?: string | null;
  outlineItems?: OutlineItemUpdateManyWithoutChaptersInput;
  scenes?: SceneUpdateManyWithoutChaptersInput;
  title?: string | null;
};
