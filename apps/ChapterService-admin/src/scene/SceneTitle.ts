import { Scene as TScene } from "../api/scene/Scene";

export const SCENE_TITLE_FIELD = "title";

export const SceneTitle = (record: TScene): string => {
  return record.title?.toString() || String(record.id);
};
