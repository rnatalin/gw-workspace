import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './Modules/Categories/categories.module';
import { GameModule } from './Modules/Game/game.module';
import { UserModule } from './Modules/Users/user.module';
import { SubCategoryModule } from './Modules/SubCategory/subCategories.module'

@Module({
  imports: [GameModule,CategoryModule, UserModule, SubCategoryModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
