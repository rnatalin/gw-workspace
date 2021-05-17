import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { SubCategoryController } from './subCategories.controller';
import { SubCategoryProviders } from './subCategories.provider';
import { SubCategoryService } from './subCategories.service';

@Module({
  controllers: [SubCategoryController],
  imports: [DatabaseModule],
  providers: [...SubCategoryProviders, SubCategoryService],
})
export class SubCategoryModule {}
