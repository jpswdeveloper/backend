import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class MenuItemService {
  constructor(private readonly db: DatabaseService) {}
  create(createMenuItemDto: Prisma.MenuItemCreateInput) {
    return this.db.menuItem.create({ data: createMenuItemDto });
  }

  findAll() {
    return this.db.menuItem.findMany({
      where: {
        parentId: null, // fetch all root level menu informations
      },
      include: {
        children: true,
      },
    });
  }

  findOne(id: string) {
    return this.db.menuItem.findFirst({
      where: { id },
    });
  }

  update(id: string, updateMenuItemDto: Prisma.MenuItemUpdateInput) {
    return this.db.menuItem.update({
      where: { id },
      data: updateMenuItemDto,
    });
  }

  remove(id: string) {
    return this.db.menuItem.delete({
      where: { id },
    });
  }
}
