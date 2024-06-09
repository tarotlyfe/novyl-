import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BeatService } from "./beat.service";
import { BeatControllerBase } from "./base/beat.controller.base";

@swagger.ApiTags("beats")
@common.Controller("beats")
export class BeatController extends BeatControllerBase {
  constructor(protected readonly service: BeatService) {
    super(service);
  }
}
