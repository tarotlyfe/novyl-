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
import { OutlineWhereInput } from "./OutlineWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OutlineOrderByInput } from "./OutlineOrderByInput";

@ArgsType()
class OutlineFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OutlineWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OutlineWhereInput, { nullable: true })
  @Type(() => OutlineWhereInput)
  where?: OutlineWhereInput;

  @ApiProperty({
    required: false,
    type: [OutlineOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OutlineOrderByInput], { nullable: true })
  @Type(() => OutlineOrderByInput)
  orderBy?: Array<OutlineOrderByInput>;

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

export { OutlineFindManyArgs as OutlineFindManyArgs };
