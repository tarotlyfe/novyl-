import { InputJsonValue } from "../../types";
import { CharacterUpdateManyWithoutNovelsInput } from "./CharacterUpdateManyWithoutNovelsInput";

export type NovelUpdateInput = {
  authorId?: string | null;
  chapters?: InputJsonValue;
  characters?: CharacterUpdateManyWithoutNovelsInput;
  genre?: string | null;
  outlines?: InputJsonValue;
  plots?: InputJsonValue;
  summary?: string | null;
  title?: string | null;
};
