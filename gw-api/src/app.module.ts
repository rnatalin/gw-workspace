import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './Modules/Categories/categories.module';
import { GameModule } from './Modules/Game/game.module';
import { UserModule } from './Modules/Users/user.module';

@Module({
  imports: [GameModule,CategoryModule, UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
