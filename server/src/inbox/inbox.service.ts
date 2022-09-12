import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { InboxServiceBase } from "./base/inbox.service.base";

@Injectable()
export class InboxService extends InboxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
