import { Module } from "@nestjs/common";
import { SceneModuleBase } from "./base/scene.module.base";
import { SceneService } from "./scene.service";
import { SceneController } from "./scene.controller";
import { SceneResolver } from "./scene.resolver";

@Module({
  imports: [SceneModuleBase],
  controllers: [SceneController],
  providers: [SceneService, SceneResolver],
  exports: [SceneService],
})
export class SceneModule {}
