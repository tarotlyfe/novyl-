import { PlotWhereUniqueInput } from "./PlotWhereUniqueInput";
import { PlotUpdateInput } from "./PlotUpdateInput";

export type UpdatePlotArgs = {
  where: PlotWhereUniqueInput;
  data: PlotUpdateInput;
};
