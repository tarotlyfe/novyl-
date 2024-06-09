import * as graphql from "@nestjs/graphql";
import { BeatResolverBase } from "./base/beat.resolver.base";
import { Beat } from "./base/Beat";
import { BeatService } from "./beat.service";

@graphql.Resolver(() => Beat)
export class BeatResolver extends BeatResolverBase {
  constructor(protected readonly service: BeatService) {
    super(service);
  }
}
