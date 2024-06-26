/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Chapter } from "./Chapter";
import { ChapterCountArgs } from "./ChapterCountArgs";
import { ChapterFindManyArgs } from "./ChapterFindManyArgs";
import { ChapterFindUniqueArgs } from "./ChapterFindUniqueArgs";
import { CreateChapterArgs } from "./CreateChapterArgs";
import { UpdateChapterArgs } from "./UpdateChapterArgs";
import { DeleteChapterArgs } from "./DeleteChapterArgs";
import { OutlineItemFindManyArgs } from "../../outlineItem/base/OutlineItemFindManyArgs";
import { OutlineItem } from "../../outlineItem/base/OutlineItem";
import { SceneFindManyArgs } from "../../scene/base/SceneFindManyArgs";
import { Scene } from "../../scene/base/Scene";
import { ChapterService } from "../chapter.service";
@graphql.Resolver(() => Chapter)
export class ChapterResolverBase {
  constructor(protected readonly service: ChapterService) {}

  async _chaptersMeta(
    @graphql.Args() args: ChapterCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Chapter])
  async chapters(
    @graphql.Args() args: ChapterFindManyArgs
  ): Promise<Chapter[]> {
    return this.service.chapters(args);
  }

  @graphql.Query(() => Chapter, { nullable: true })
  async chapter(
    @graphql.Args() args: ChapterFindUniqueArgs
  ): Promise<Chapter | null> {
    const result = await this.service.chapter(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Chapter)
  async createChapter(
    @graphql.Args() args: CreateChapterArgs
  ): Promise<Chapter> {
    return await this.service.createChapter({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Chapter)
  async updateChapter(
    @graphql.Args() args: UpdateChapterArgs
  ): Promise<Chapter | null> {
    try {
      return await this.service.updateChapter({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Chapter)
  async deleteChapter(
    @graphql.Args() args: DeleteChapterArgs
  ): Promise<Chapter | null> {
    try {
      return await this.service.deleteChapter(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [OutlineItem], { name: "outlineItems" })
  async findOutlineItems(
    @graphql.Parent() parent: Chapter,
    @graphql.Args() args: OutlineItemFindManyArgs
  ): Promise<OutlineItem[]> {
    const results = await this.service.findOutlineItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Scene], { name: "scenes" })
  async findScenes(
    @graphql.Parent() parent: Chapter,
    @graphql.Args() args: SceneFindManyArgs
  ): Promise<Scene[]> {
    const results = await this.service.findScenes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
