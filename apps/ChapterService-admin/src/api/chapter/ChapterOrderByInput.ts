import { SortOrder } from "../../util/SortOrder";

export type ChapterOrderByInput = {
  chapterNumber?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  novelId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
