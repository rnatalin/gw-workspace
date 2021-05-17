import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './Modules/Categories/categories.module';
import { GameModule } from './Modules/Game/game.module';
import { SubCategoriesModule } from './Modules/SubCategories/subCategories.module';

@Module({
  imports: [GameModule, CategoryModule, SubCategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
