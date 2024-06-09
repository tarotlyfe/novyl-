import { NovelWhereInput } from "./NovelWhereInput";
import { NovelOrderByInput } from "./NovelOrderByInput";

export type NovelFindManyArgs = {
  where?: NovelWhereInput;
  orderBy?: Array<NovelOrderByInput>;
  skip?: number;
  take?: number;
};
