import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { GameController } from './game.controller';
import { GameProviders } from './game.providers';
import { GameService } from './game.service';
import { SubCategoriesModule } from '../SubCategories/subCategories.module';

@Module({
  controllers: [GameController],
  imports: [DatabaseModule, SubCategoriesModule],
  providers: [...GameProviders, GameService],
})
export class GameModule {}
