import { SceneWhereInput } from "./SceneWhereInput";
import { SceneOrderByInput } from "./SceneOrderByInput";

export type SceneFindManyArgs = {
  where?: SceneWhereInput;
  orderBy?: Array<SceneOrderByInput>;
  skip?: number;
  take?: number;
};
