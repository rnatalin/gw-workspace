import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './Modules/Categories/categories.module';
import { GameModule } from './Modules/Game/game.module';
import { UserModule } from './Modules/Users/user.module';
import { SubCategoryModule } from './Modules/SubCategory/subCategories.module';
import { PlatformModule } from './Modules/Platforms/platforms.module'
import { PhotoModule } from './Modules/Photos/photo.module';
@Module({
  imports: [GameModule, CategoryModule, UserModule, SubCategoryModule, PlatformModule, PhotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
