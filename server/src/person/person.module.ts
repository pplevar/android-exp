import { Module } from "@nestjs/common";
import { PersonModuleBase } from "./base/person.module.base";
import { PersonService } from "./person.service";
import { PersonController } from "./person.controller";

@Module({
  imports: [PersonModuleBase],
  controllers: [PersonController],
  providers: [PersonService],
  exports: [PersonService],
})
export class PersonModule {}
