import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NovelService } from "./novel.service";
import { NovelControllerBase } from "./base/novel.controller.base";

@swagger.ApiTags("novels")
@common.Controller("novels")
export class NovelController extends NovelControllerBase {
  constructor(protected readonly service: NovelService) {
    super(service);
  }
}
