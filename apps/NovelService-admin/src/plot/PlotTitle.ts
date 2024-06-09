import { Plot as TPlot } from "../api/plot/Plot";

export const PLOT_TITLE_FIELD = "novelId";

export const PlotTitle = (record: TPlot): string => {
  return record.novelId?.toString() || String(record.id);
};
