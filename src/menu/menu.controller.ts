import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { Prisma } from '@prisma/client';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  @Post()
  create(@Body() createMenuDto: Prisma.MenuCreateInput) {
    const menu = this.menuService.create(createMenuDto);

    return {
      success: true,
      message: 'Menu created successfully',
      data: menu,
    };
  }

  @Get()
  findAll() {
    const menus = this.menuService.findAll();
    return {
      success: true,
      message: 'All menu lists',
      data: menus,
    };
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    const menu = this.menuService.findOne(id);
    return {
      success: true,
      message: 'Menu successfully fetched',
      data: menu,
    };
  }
}
