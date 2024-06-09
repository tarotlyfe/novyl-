import { SortOrder } from "../../util/SortOrder";

export type NovelOrderByInput = {
  authorId?: SortOrder;
  chapters?: SortOrder;
  createdAt?: SortOrder;
  genre?: SortOrder;
  id?: SortOrder;
  outlines?: SortOrder;
  plots?: SortOrder;
  summary?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
