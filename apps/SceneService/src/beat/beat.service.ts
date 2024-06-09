import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BeatServiceBase } from "./base/beat.service.base";

@Injectable()
export class BeatService extends BeatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
