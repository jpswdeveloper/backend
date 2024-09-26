import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { MenuItemModule } from './menu-item/menu-item.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [MenuModule, MenuItemModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
