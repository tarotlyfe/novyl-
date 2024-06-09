import { InputJsonValue } from "../../types";
import { CharacterCreateNestedManyWithoutNovelsInput } from "./CharacterCreateNestedManyWithoutNovelsInput";

export type NovelCreateInput = {
  authorId?: string | null;
  chapters?: InputJsonValue;
  characters?: CharacterCreateNestedManyWithoutNovelsInput;
  genre?: string | null;
  outlines?: InputJsonValue;
  plots?: InputJsonValue;
  summary?: string | null;
  title?: string | null;
};
