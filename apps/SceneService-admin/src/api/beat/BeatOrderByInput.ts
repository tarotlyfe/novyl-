import { SortOrder } from "../../util/SortOrder";

export type BeatOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sceneId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
