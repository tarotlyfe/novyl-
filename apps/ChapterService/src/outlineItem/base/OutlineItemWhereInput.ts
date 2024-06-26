/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChapterWhereUniqueInput } from "../../chapter/base/ChapterWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SceneWhereUniqueInput } from "../../scene/base/SceneWhereUniqueInput";

@InputType()
class OutlineItemWhereInput {
  @ApiProperty({
    required: false,
    type: () => ChapterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChapterWhereUniqueInput)
  @IsOptional()
  @Field(() => ChapterWhereUniqueInput, {
    nullable: true,
  })
  chapter?: ChapterWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  content?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  outlineId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SceneWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SceneWhereUniqueInput)
  @IsOptional()
  @Field(() => SceneWhereUniqueInput, {
    nullable: true,
  })
  scene?: SceneWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;
}

export { OutlineItemWhereInput as OutlineItemWhereInput };
