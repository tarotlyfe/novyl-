import { BeatWhereInput } from "./BeatWhereInput";
import { BeatOrderByInput } from "./BeatOrderByInput";

export type BeatFindManyArgs = {
  where?: BeatWhereInput;
  orderBy?: Array<BeatOrderByInput>;
  skip?: number;
  take?: number;
};
