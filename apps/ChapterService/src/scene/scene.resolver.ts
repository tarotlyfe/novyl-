import * as graphql from "@nestjs/graphql";
import { SceneResolverBase } from "./base/scene.resolver.base";
import { Scene } from "./base/Scene";
import { SceneService } from "./scene.service";

@graphql.Resolver(() => Scene)
export class SceneResolver extends SceneResolverBase {
  constructor(protected readonly service: SceneService) {
    super(service);
  }
}
