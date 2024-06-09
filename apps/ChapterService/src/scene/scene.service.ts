import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SceneServiceBase } from "./base/scene.service.base";

@Injectable()
export class SceneService extends SceneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
