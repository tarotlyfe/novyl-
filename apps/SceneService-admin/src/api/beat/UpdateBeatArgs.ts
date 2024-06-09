import { BeatWhereUniqueInput } from "./BeatWhereUniqueInput";
import { BeatUpdateInput } from "./BeatUpdateInput";

export type UpdateBeatArgs = {
  where: BeatWhereUniqueInput;
  data: BeatUpdateInput;
};
