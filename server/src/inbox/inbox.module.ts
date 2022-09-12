import { Module } from "@nestjs/common";
import { InboxModuleBase } from "./base/inbox.module.base";
import { InboxService } from "./inbox.service";
import { InboxController } from "./inbox.controller";

@Module({
  imports: [InboxModuleBase],
  controllers: [InboxController],
  providers: [InboxService],
  exports: [InboxService],
})
export class InboxModule {}
