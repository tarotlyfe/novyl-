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
import { Type } from "class-transformer";

@ArgsType()
class OutlineCountArgs {
  @ApiProperty({
    required: false,
    type: () => OutlineWhereInput,
  })
  @Field(() => OutlineWhereInput, { nullable: true })
  @Type(() => OutlineWhereInput)
  where?: OutlineWhereInput;
}

export { OutlineCountArgs as OutlineCountArgs };