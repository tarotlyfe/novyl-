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
import { SceneWhereUniqueInput } from "./SceneWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SceneUpdateInput } from "./SceneUpdateInput";

@ArgsType()
class UpdateSceneArgs {
  @ApiProperty({
    required: true,
    type: () => SceneWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SceneWhereUniqueInput)
  @Field(() => SceneWhereUniqueInput, { nullable: false })
  where!: SceneWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SceneUpdateInput,
  })
  @ValidateNested()
  @Type(() => SceneUpdateInput)
  @Field(() => SceneUpdateInput, { nullable: false })
  data!: SceneUpdateInput;
}

export { UpdateSceneArgs as UpdateSceneArgs };