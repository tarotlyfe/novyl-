import * as graphql from "@nestjs/graphql";
import { OutlineItemResolverBase } from "./base/outlineItem.resolver.base";
import { OutlineItem } from "./base/OutlineItem";
import { OutlineItemService } from "./outlineItem.service";

@graphql.Resolver(() => OutlineItem)
export class OutlineItemResolver extends OutlineItemResolverBase {
  constructor(protected readonly service: OutlineItemService) {
    super(service);
  }
}
