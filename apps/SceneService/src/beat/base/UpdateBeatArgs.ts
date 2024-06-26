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
import { BeatWhereUniqueInput } from "./BeatWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BeatUpdateInput } from "./BeatUpdateInput";

@ArgsType()
class UpdateBeatArgs {
  @ApiProperty({
    required: true,
    type: () => BeatWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BeatWhereUniqueInput)
  @Field(() => BeatWhereUniqueInput, { nullable: false })
  where!: BeatWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BeatUpdateInput,
  })
  @ValidateNested()
  @Type(() => BeatUpdateInput)
  @Field(() => BeatUpdateInput, { nullable: false })
  data!: BeatUpdateInput;
}

export { UpdateBeatArgs as UpdateBeatArgs };
