import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class MenuService {
  constructor(private readonly db: DatabaseService) {}

  async create(createMenuDto: Prisma.MenuCreateInput) {
    return await this.db.menu.create({
      data: createMenuDto,
    });
  }

  async findAll() {
    return await this.db.menu.findMany({
      include: {
        items: {
          include: {
            children: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return await this.db.menu.findUnique({
      where: {
        id,
      },
    });
  }
}
