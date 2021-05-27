import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { GameController } from './game.controller';
import { GameProviders } from './game.providers';
import { GameService } from './game.service';
import { SubCategoryModule } from '../SubCategory/subCategories.module';
import { PlatformModule } from '../Platforms/platforms.module'
@Module({
  controllers: [GameController],
  imports: [DatabaseModule, SubCategoryModule, PlatformModule],
  providers: [...GameProviders, GameService],
  exports: [GameService, GameModule],
})
export class GameModule {}
