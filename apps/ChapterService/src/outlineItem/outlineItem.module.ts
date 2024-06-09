import { Module } from "@nestjs/common";
import { OutlineItemModuleBase } from "./base/outlineItem.module.base";
import { OutlineItemService } from "./outlineItem.service";
import { OutlineItemController } from "./outlineItem.controller";
import { OutlineItemResolver } from "./outlineItem.resolver";

@Module({
  imports: [OutlineItemModuleBase],
  controllers: [OutlineItemController],
  providers: [OutlineItemService, OutlineItemResolver],
  exports: [OutlineItemService],
})
export class OutlineItemModule {}
