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
import { NovelService } from "../novel.service";
import { NovelCreateInput } from "./NovelCreateInput";
import { Novel } from "./Novel";
import { NovelFindManyArgs } from "./NovelFindManyArgs";
import { NovelWhereUniqueInput } from "./NovelWhereUniqueInput";
import { NovelUpdateInput } from "./NovelUpdateInput";
import { CharacterFindManyArgs } from "../../character/base/CharacterFindManyArgs";
import { Character } from "../../character/base/Character";
import { CharacterWhereUniqueInput } from "../../character/base/CharacterWhereUniqueInput";

export class NovelControllerBase {
  constructor(protected readonly service: NovelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Novel })
  async createNovel(@common.Body() data: NovelCreateInput): Promise<Novel> {
    return await this.service.createNovel({
      data: data,
      select: {
        authorId: true,
        chapters: true,
        createdAt: true,
        genre: true,
        id: true,
        outlines: true,
        plots: true,
        summary: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Novel] })
  @ApiNestedQuery(NovelFindManyArgs)
  async novels(@common.Req() request: Request): Promise<Novel[]> {
    const args = plainToClass(NovelFindManyArgs, request.query);
    return this.service.novels({
      ...args,
      select: {
        authorId: true,
        chapters: true,
        createdAt: true,
        genre: true,
        id: true,
        outlines: true,
        plots: true,
        summary: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Novel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async novel(
    @common.Param() params: NovelWhereUniqueInput
  ): Promise<Novel | null> {
    const result = await this.service.novel({
      where: params,
      select: {
        authorId: true,
        chapters: true,
        createdAt: true,
        genre: true,
        id: true,
        outlines: true,
        plots: true,
        summary: true,
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
  @swagger.ApiOkResponse({ type: Novel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateNovel(
    @common.Param() params: NovelWhereUniqueInput,
    @common.Body() data: NovelUpdateInput
  ): Promise<Novel | null> {
    try {
      return await this.service.updateNovel({
        where: params,
        data: data,
        select: {
          authorId: true,
          chapters: true,
          createdAt: true,
          genre: true,
          id: true,
          outlines: true,
          plots: true,
          summary: true,
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
  @swagger.ApiOkResponse({ type: Novel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteNovel(
    @common.Param() params: NovelWhereUniqueInput
  ): Promise<Novel | null> {
    try {
      return await this.service.deleteNovel({
        where: params,
        select: {
          authorId: true,
          chapters: true,
          createdAt: true,
          genre: true,
          id: true,
          outlines: true,
          plots: true,
          summary: true,
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

  @common.Get("/:id/characters")
  @ApiNestedQuery(CharacterFindManyArgs)
  async findCharacters(
    @common.Req() request: Request,
    @common.Param() params: NovelWhereUniqueInput
  ): Promise<Character[]> {
    const query = plainToClass(CharacterFindManyArgs, request.query);
    const results = await this.service.findCharacters(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        novel: {
          select: {
            id: true,
          },
        },

        role: true,
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

  @common.Post("/:id/characters")
  async connectCharacters(
    @common.Param() params: NovelWhereUniqueInput,
    @common.Body() body: CharacterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      characters: {
        connect: body,
      },
    };
    await this.service.updateNovel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/characters")
  async updateCharacters(
    @common.Param() params: NovelWhereUniqueInput,
    @common.Body() body: CharacterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      characters: {
        set: body,
      },
    };
    await this.service.updateNovel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/characters")
  async disconnectCharacters(
    @common.Param() params: NovelWhereUniqueInput,
    @common.Body() body: CharacterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      characters: {
        disconnect: body,
      },
    };
    await this.service.updateNovel({
      where: params,
      data,
      select: { id: true },
    });
  }
}
