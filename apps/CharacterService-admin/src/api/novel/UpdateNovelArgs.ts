import { NovelWhereUniqueInput } from "./NovelWhereUniqueInput";
import { NovelUpdateInput } from "./NovelUpdateInput";

export type UpdateNovelArgs = {
  where: NovelWhereUniqueInput;
  data: NovelUpdateInput;
};
