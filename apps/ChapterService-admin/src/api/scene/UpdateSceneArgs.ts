import { SceneWhereUniqueInput } from "./SceneWhereUniqueInput";
import { SceneUpdateInput } from "./SceneUpdateInput";

export type UpdateSceneArgs = {
  where: SceneWhereUniqueInput;
  data: SceneUpdateInput;
};
