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
import { PlotWhereInput } from "./PlotWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PlotListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PlotWhereInput,
  })
  @ValidateNested()
  @Type(() => PlotWhereInput)
  @IsOptional()
  @Field(() => PlotWhereInput, {
    nullable: true,
  })
  every?: PlotWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlotWhereInput,
  })
  @ValidateNested()
  @Type(() => PlotWhereInput)
  @IsOptional()
  @Field(() => PlotWhereInput, {
    nullable: true,
  })
  some?: PlotWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlotWhereInput,
  })
  @ValidateNested()
  @Type(() => PlotWhereInput)
  @IsOptional()
  @Field(() => PlotWhereInput, {
    nullable: true,
  })
  none?: PlotWhereInput;
}
export { PlotListRelationFilter as PlotListRelationFilter };
