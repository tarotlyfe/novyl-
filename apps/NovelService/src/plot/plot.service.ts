import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlotServiceBase } from "./base/plot.service.base";

@Injectable()
export class PlotService extends PlotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
