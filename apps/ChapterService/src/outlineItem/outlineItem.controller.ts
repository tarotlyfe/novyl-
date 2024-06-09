import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OutlineItemService } from "./outlineItem.service";
import { OutlineItemControllerBase } from "./base/outlineItem.controller.base";

@swagger.ApiTags("outlineItems")
@common.Controller("outlineItems")
export class OutlineItemController extends OutlineItemControllerBase {
  constructor(protected readonly service: OutlineItemService) {
    super(service);
  }
}
