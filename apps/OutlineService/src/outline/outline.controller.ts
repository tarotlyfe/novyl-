import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OutlineService } from "./outline.service";
import { OutlineControllerBase } from "./base/outline.controller.base";

@swagger.ApiTags("outlines")
@common.Controller("outlines")
export class OutlineController extends OutlineControllerBase {
  constructor(protected readonly service: OutlineService) {
    super(service);
  }
}
