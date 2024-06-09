import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlotService } from "./plot.service";
import { PlotControllerBase } from "./base/plot.controller.base";

@swagger.ApiTags("plots")
@common.Controller("plots")
export class PlotController extends PlotControllerBase {
  constructor(protected readonly service: PlotService) {
    super(service);
  }
}
