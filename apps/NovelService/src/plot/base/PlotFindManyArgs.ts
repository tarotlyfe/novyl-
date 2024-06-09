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
import { PlotWhereInput } from "./PlotWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PlotOrderByInput } from "./PlotOrderByInput";

@ArgsType()
class PlotFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PlotWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PlotWhereInput, { nullable: true })
  @Type(() => PlotWhereInput)
  where?: PlotWhereInput;

  @ApiProperty({
    required: false,
    type: [PlotOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PlotOrderByInput], { nullable: true })
  @Type(() => PlotOrderByInput)
  orderBy?: Array<PlotOrderByInput>;

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

export { PlotFindManyArgs as PlotFindManyArgs };
