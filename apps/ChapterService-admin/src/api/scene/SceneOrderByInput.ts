import { SortOrder } from "../../util/SortOrder";

export type SceneOrderByInput = {
  beats?: SortOrder;
  chapterId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
