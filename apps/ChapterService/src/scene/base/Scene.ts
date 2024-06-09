/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";
import { IsOptional, ValidateNested, IsString, IsDate } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Chapter } from "../../chapter/base/Chapter";
import { Type } from "class-transformer";
import { OutlineItem } from "../../outlineItem/base/OutlineItem";

@ObjectType()
class Scene {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  beats!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => Chapter,
  })
  @ValidateNested()
  @Type(() => Chapter)
  @IsOptional()
  chapter?: Chapter | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [OutlineItem],
  })
  @ValidateNested()
  @Type(() => OutlineItem)
  @IsOptional()
  outlineItems?: Array<OutlineItem>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Scene as Scene };