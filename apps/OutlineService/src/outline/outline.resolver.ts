import * as graphql from "@nestjs/graphql";
import { OutlineResolverBase } from "./base/outline.resolver.base";
import { Outline } from "./base/Outline";
import { OutlineService } from "./outline.service";

@graphql.Resolver(() => Outline)
export class OutlineResolver extends OutlineResolverBase {
  constructor(protected readonly service: OutlineService) {
    super(service);
  }
}
