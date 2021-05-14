import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './Modules/Categories/categories.module';
import { GameModule } from './Modules/Game/game.module';

@Module({
  imports: [GameModule,CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
