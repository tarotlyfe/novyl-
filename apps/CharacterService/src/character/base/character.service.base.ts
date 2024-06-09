/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Character as PrismaCharacter,
  Novel as PrismaNovel,
} from "@prisma/client";

export class CharacterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CharacterCountArgs, "select">
  ): Promise<number> {
    return this.prisma.character.count(args);
  }

  async characters<T extends Prisma.CharacterFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CharacterFindManyArgs>
  ): Promise<PrismaCharacter[]> {
    return this.prisma.character.findMany<Prisma.CharacterFindManyArgs>(args);
  }
  async character<T extends Prisma.CharacterFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CharacterFindUniqueArgs>
  ): Promise<PrismaCharacter | null> {
    return this.prisma.character.findUnique(args);
  }
  async createCharacter<T extends Prisma.CharacterCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CharacterCreateArgs>
  ): Promise<PrismaCharacter> {
    return this.prisma.character.create<T>(args);
  }
  async updateCharacter<T extends Prisma.CharacterUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CharacterUpdateArgs>
  ): Promise<PrismaCharacter> {
    return this.prisma.character.update<T>(args);
  }
  async deleteCharacter<T extends Prisma.CharacterDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CharacterDeleteArgs>
  ): Promise<PrismaCharacter> {
    return this.prisma.character.delete(args);
  }

  async getNovel(parentId: string): Promise<PrismaNovel | null> {
    return this.prisma.character
      .findUnique({
        where: { id: parentId },
      })
      .novel();
  }
}