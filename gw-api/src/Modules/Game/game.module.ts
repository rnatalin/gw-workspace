import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { GameController } from './game.controller';
import { GameProviders } from './game.providers';
import { GameService } from './game.service';
import { SubCategoryModule } from '../SubCategory/subCategories.module';
@Module({
  controllers: [GameController],
  imports: [DatabaseModule, SubCategoryModule],
  providers: [...GameProviders, GameService],
})
export class GameModule {}
