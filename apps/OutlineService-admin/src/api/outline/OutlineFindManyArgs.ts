import { OutlineWhereInput } from "./OutlineWhereInput";
import { OutlineOrderByInput } from "./OutlineOrderByInput";

export type OutlineFindManyArgs = {
  where?: OutlineWhereInput;
  orderBy?: Array<OutlineOrderByInput>;
  skip?: number;
  take?: number;
};
