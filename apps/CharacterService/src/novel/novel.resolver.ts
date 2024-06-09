import * as graphql from "@nestjs/graphql";
import { NovelResolverBase } from "./base/novel.resolver.base";
import { Novel } from "./base/Novel";
import { NovelService } from "./novel.service";

@graphql.Resolver(() => Novel)
export class NovelResolver extends NovelResolverBase {
  constructor(protected readonly service: NovelService) {
    super(service);
  }
}
