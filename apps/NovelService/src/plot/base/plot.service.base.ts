/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Plot as PrismaPlot } from "@prisma/client";

export class PlotServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PlotCountArgs, "select">): Promise<number> {
    return this.prisma.plot.count(args);
  }

  async plots<T extends Prisma.PlotFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlotFindManyArgs>
  ): Promise<PrismaPlot[]> {
    return this.prisma.plot.findMany<Prisma.PlotFindManyArgs>(args);
  }
  async plot<T extends Prisma.PlotFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlotFindUniqueArgs>
  ): Promise<PrismaPlot | null> {
    return this.prisma.plot.findUnique(args);
  }
  async createPlot<T extends Prisma.PlotCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlotCreateArgs>
  ): Promise<PrismaPlot> {
    return this.prisma.plot.create<T>(args);
  }
  async updatePlot<T extends Prisma.PlotUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlotUpdateArgs>
  ): Promise<PrismaPlot> {
    return this.prisma.plot.update<T>(args);
  }
  async deletePlot<T extends Prisma.PlotDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlotDeleteArgs>
  ): Promise<PrismaPlot> {
    return this.prisma.plot.delete(args);
  }
}
