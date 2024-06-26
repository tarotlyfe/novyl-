/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NovelWhereInput } from "./NovelWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { NovelOrderByInput } from "./NovelOrderByInput";

@ArgsType()
class NovelFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => NovelWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => NovelWhereInput, { nullable: true })
  @Type(() => NovelWhereInput)
  where?: NovelWhereInput;

  @ApiProperty({
    required: false,
    type: [NovelOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [NovelOrderByInput], { nullable: true })
  @Type(() => NovelOrderByInput)
  orderBy?: Array<NovelOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { NovelFindManyArgs as NovelFindManyArgs };
