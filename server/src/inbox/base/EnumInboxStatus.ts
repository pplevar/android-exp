/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { registerEnumType } from "@nestjs/graphql";

export enum EnumInboxStatus {
  Open = "Open",
  Processed = "Processed",
}

registerEnumType(EnumInboxStatus, {
  name: "EnumInboxStatus",
});
