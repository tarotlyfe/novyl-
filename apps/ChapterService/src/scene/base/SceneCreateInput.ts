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
import { IsJSONValue } from "../../validators";
import { IsOptional, ValidateNested, IsString } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ChapterWhereUniqueInput } from "../../chapter/base/ChapterWhereUniqueInput";
import { Type } from "class-transformer";
import { OutlineItemCreateNestedManyWithoutScenesInput } from "./OutlineItemCreateNestedManyWithoutScenesInput";

@InputType()
class SceneCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  beats?: InputJsonValue;

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
  chapter?: ChapterWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => OutlineItemCreateNestedManyWithoutScenesInput,
  })
  @ValidateNested()
  @Type(() => OutlineItemCreateNestedManyWithoutScenesInput)
  @IsOptional()
  @Field(() => OutlineItemCreateNestedManyWithoutScenesInput, {
    nullable: true,
  })
  outlineItems?: OutlineItemCreateNestedManyWithoutScenesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { SceneCreateInput as SceneCreateInput };
