import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { GameController } from './game.controller';
import { GameProviders } from './game.providers';
import { GameService } from './game.service';

@Module({
  controllers: [GameController],
  imports: [DatabaseModule],
  providers: [...GameProviders, GameService],
})
export class GameModule {}
