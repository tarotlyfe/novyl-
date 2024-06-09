import { Module } from "@nestjs/common";
import { OutlineModuleBase } from "./base/outline.module.base";
import { OutlineService } from "./outline.service";
import { OutlineController } from "./outline.controller";
import { OutlineResolver } from "./outline.resolver";

@Module({
  imports: [OutlineModuleBase],
  controllers: [OutlineController],
  providers: [OutlineService, OutlineResolver],
  exports: [OutlineService],
})
export class OutlineModule {}
