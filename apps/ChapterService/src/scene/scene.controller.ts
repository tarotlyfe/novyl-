import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SceneService } from "./scene.service";
import { SceneControllerBase } from "./base/scene.controller.base";

@swagger.ApiTags("scenes")
@common.Controller("scenes")
export class SceneController extends SceneControllerBase {
  constructor(protected readonly service: SceneService) {
    super(service);
  }
}
