import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OutlineItemServiceBase } from "./base/outlineItem.service.base";

@Injectable()
export class OutlineItemService extends OutlineItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
