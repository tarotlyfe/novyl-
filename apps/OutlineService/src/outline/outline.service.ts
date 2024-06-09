import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OutlineServiceBase } from "./base/outline.service.base";

@Injectable()
export class OutlineService extends OutlineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
