/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Inbox, User } from "@prisma/client";

export class InboxServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.InboxFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InboxFindManyArgs>
  ): Promise<number> {
    return this.prisma.inbox.count(args);
  }

  async findMany<T extends Prisma.InboxFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InboxFindManyArgs>
  ): Promise<Inbox[]> {
    return this.prisma.inbox.findMany(args);
  }
  async findOne<T extends Prisma.InboxFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InboxFindUniqueArgs>
  ): Promise<Inbox | null> {
    return this.prisma.inbox.findUnique(args);
  }
  async create<T extends Prisma.InboxCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InboxCreateArgs>
  ): Promise<Inbox> {
    return this.prisma.inbox.create<T>(args);
  }
  async update<T extends Prisma.InboxUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InboxUpdateArgs>
  ): Promise<Inbox> {
    return this.prisma.inbox.update<T>(args);
  }
  async delete<T extends Prisma.InboxDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InboxDeleteArgs>
  ): Promise<Inbox> {
    return this.prisma.inbox.delete(args);
  }

  async getUserId(parentId: string): Promise<User | null> {
    return this.prisma.inbox
      .findUnique({
        where: { id: parentId },
      })
      .userId();
  }
}