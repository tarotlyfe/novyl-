import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NovelServiceBase } from "./base/novel.service.base";

@Injectable()
export class NovelService extends NovelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
