import { Module } from "@nestjs/common";
import { BeatModuleBase } from "./base/beat.module.base";
import { BeatService } from "./beat.service";
import { BeatController } from "./beat.controller";
import { BeatResolver } from "./beat.resolver";

@Module({
  imports: [BeatModuleBase],
  controllers: [BeatController],
  providers: [BeatService, BeatResolver],
  exports: [BeatService],
})
export class BeatModule {}
