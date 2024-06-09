/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ChapterService } from "../chapter.service";
import { ChapterCreateInput } from "./ChapterCreateInput";
import { Chapter } from "./Chapter";
import { ChapterFindManyArgs } from "./ChapterFindManyArgs";
import { ChapterWhereUniqueInput } from "./ChapterWhereUniqueInput";
import { ChapterUpdateInput } from "./ChapterUpdateInput";
import { OutlineItemFindManyArgs } from "../../outlineItem/base/OutlineItemFindManyArgs";
import { OutlineItem } from "../../outlineItem/base/OutlineItem";
import { OutlineItemWhereUniqueInput } from "../../outlineItem/base/OutlineItemWhereUniqueInput";
import { SceneFindManyArgs } from "../../scene/base/SceneFindManyArgs";
import { Scene } from "../../scene/base/Scene";
import { SceneWhereUniqueInput } from "../../scene/base/SceneWhereUniqueInput";

export class ChapterControllerBase {
  constructor(protected readonly service: ChapterService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Chapter })
  async createChapter(
    @common.Body() data: ChapterCreateInput
  ): Promise<Chapter> {
    return await this.service.createChapter({
      data: data,
      select: {
        chapterNumber: true,
        content: true,
        createdAt: true,
        id: true,
        novelId: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Chapter] })
  @ApiNestedQuery(ChapterFindManyArgs)
  async chapters(@common.Req() request: Request): Promise<Chapter[]> {
    const args = plainToClass(ChapterFindManyArgs, request.query);
    return this.service.chapters({
      ...args,
      select: {
        chapterNumber: true,
        content: true,
        createdAt: true,
        id: true,
        novelId: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Chapter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async chapter(
    @common.Param() params: ChapterWhereUniqueInput
  ): Promise<Chapter | null> {
    const result = await this.service.chapter({
      where: params,
      select: {
        chapterNumber: true,
        content: true,
        createdAt: true,
        id: true,
        novelId: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Chapter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateChapter(
    @common.Param() params: ChapterWhereUniqueInput,
    @common.Body() data: ChapterUpdateInput
  ): Promise<Chapter | null> {
    try {
      return await this.service.updateChapter({
        where: params,
        data: data,
        select: {
          chapterNumber: true,
          content: true,
          createdAt: true,
          id: true,
          novelId: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Chapter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteChapter(
    @common.Param() params: ChapterWhereUniqueInput
  ): Promise<Chapter | null> {
    try {
      return await this.service.deleteChapter({
        where: params,
        select: {
          chapterNumber: true,
          content: true,
          createdAt: true,
          id: true,
          novelId: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/outlineItems")
  @ApiNestedQuery(OutlineItemFindManyArgs)
  async findOutlineItems(
    @common.Req() request: Request,
    @common.Param() params: ChapterWhereUniqueInput
  ): Promise<OutlineItem[]> {
    const query = plainToClass(OutlineItemFindManyArgs, request.query);
    const results = await this.service.findOutlineItems(params.id, {
      ...query,
      select: {
        chapter: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        outlineId: true,

        scene: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/outlineItems")
  async connectOutlineItems(
    @common.Param() params: ChapterWhereUniqueInput,
    @common.Body() body: OutlineItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      outlineItems: {
        connect: body,
      },
    };
    await this.service.updateChapter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/outlineItems")
  async updateOutlineItems(
    @common.Param() params: ChapterWhereUniqueInput,
    @common.Body() body: OutlineItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      outlineItems: {
        set: body,
      },
    };
    await this.service.updateChapter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/outlineItems")
  async disconnectOutlineItems(
    @common.Param() params: ChapterWhereUniqueInput,
    @common.Body() body: OutlineItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      outlineItems: {
        disconnect: body,
      },
    };
    await this.service.updateChapter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/scenes")
  @ApiNestedQuery(SceneFindManyArgs)
  async findScenes(
    @common.Req() request: Request,
    @common.Param() params: ChapterWhereUniqueInput
  ): Promise<Scene[]> {
    const query = plainToClass(SceneFindManyArgs, request.query);
    const results = await this.service.findScenes(params.id, {
      ...query,
      select: {
        beats: true,

        chapter: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/scenes")
  async connectScenes(
    @common.Param() params: ChapterWhereUniqueInput,
    @common.Body() body: SceneWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scenes: {
        connect: body,
      },
    };
    await this.service.updateChapter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/scenes")
  async updateScenes(
    @common.Param() params: ChapterWhereUniqueInput,
    @common.Body() body: SceneWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scenes: {
        set: body,
      },
    };
    await this.service.updateChapter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/scenes")
  async disconnectScenes(
    @common.Param() params: ChapterWhereUniqueInput,
    @common.Body() body: SceneWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scenes: {
        disconnect: body,
      },
    };
    await this.service.updateChapter({
      where: params,
      data,
      select: { id: true },
    });
  }
}
