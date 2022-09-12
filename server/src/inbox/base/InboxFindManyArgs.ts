/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InboxWhereInput } from "./InboxWhereInput";
import { Type } from "class-transformer";
import { InboxOrderByInput } from "./InboxOrderByInput";

@ArgsType()
class InboxFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InboxWhereInput,
  })
  @Field(() => InboxWhereInput, { nullable: true })
  @Type(() => InboxWhereInput)
  where?: InboxWhereInput;

  @ApiProperty({
    required: false,
    type: [InboxOrderByInput],
  })
  @Field(() => [InboxOrderByInput], { nullable: true })
  @Type(() => InboxOrderByInput)
  orderBy?: Array<InboxOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { InboxFindManyArgs };