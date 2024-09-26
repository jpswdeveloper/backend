import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { MenuItemService } from './menu-item.service';
import { Prisma } from '@prisma/client';

@Controller('menu-item')
export class MenuItemController {
  constructor(private readonly menuItemService: MenuItemService) {}

  @Post()
  create(@Body() createMenuItemDto: Prisma.MenuItemCreateInput) {
    return this.menuItemService.create(createMenuItemDto);
  }

  @Get()
  findAll() {
    return this.menuItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuItemService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateMenuItemDto: Prisma.MenuItemUpdateInput,
  ) {
    return this.menuItemService.update(id, updateMenuItemDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.menuItemService.remove(id);
  }
}
