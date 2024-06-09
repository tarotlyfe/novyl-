import { OutlineItemWhereInput } from "./OutlineItemWhereInput";
import { OutlineItemOrderByInput } from "./OutlineItemOrderByInput";

export type OutlineItemFindManyArgs = {
  where?: OutlineItemWhereInput;
  orderBy?: Array<OutlineItemOrderByInput>;
  skip?: number;
  take?: number;
};
