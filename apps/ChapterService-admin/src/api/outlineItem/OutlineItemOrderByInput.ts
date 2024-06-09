import { SortOrder } from "../../util/SortOrder";

export type OutlineItemOrderByInput = {
  chapterId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  outlineId?: SortOrder;
  sceneId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
