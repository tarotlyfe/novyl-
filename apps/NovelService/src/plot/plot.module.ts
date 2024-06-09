import { Module } from "@nestjs/common";
import { PlotModuleBase } from "./base/plot.module.base";
import { PlotService } from "./plot.service";
import { PlotController } from "./plot.controller";
import { PlotResolver } from "./plot.resolver";

@Module({
  imports: [PlotModuleBase],
  controllers: [PlotController],
  providers: [PlotService, PlotResolver],
  exports: [PlotService],
})
export class PlotModule {}
