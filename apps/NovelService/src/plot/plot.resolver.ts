import * as graphql from "@nestjs/graphql";
import { PlotResolverBase } from "./base/plot.resolver.base";
import { Plot } from "./base/Plot";
import { PlotService } from "./plot.service";

@graphql.Resolver(() => Plot)
export class PlotResolver extends PlotResolverBase {
  constructor(protected readonly service: PlotService) {
    super(service);
  }
}
