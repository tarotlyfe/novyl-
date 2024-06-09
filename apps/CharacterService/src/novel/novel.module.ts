import { Module } from "@nestjs/common";
import { NovelModuleBase } from "./base/novel.module.base";
import { NovelService } from "./novel.service";
import { NovelController } from "./novel.controller";
import { NovelResolver } from "./novel.resolver";

@Module({
  imports: [NovelModuleBase],
  controllers: [NovelController],
  providers: [NovelService, NovelResolver],
  exports: [NovelService],
})
export class NovelModule {}
