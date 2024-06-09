import { PlotWhereInput } from "./PlotWhereInput";
import { PlotOrderByInput } from "./PlotOrderByInput";

export type PlotFindManyArgs = {
  where?: PlotWhereInput;
  orderBy?: Array<PlotOrderByInput>;
  skip?: number;
  take?: number;
};
