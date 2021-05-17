import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { SubCategoriesController } from './subCategories.controller';

import { SubCategoryProviders } from './subCategories.provider';
import { SubCategoriesService } from './subCategories.service';

@Module({
  controllers: [SubCategoriesController],
  imports: [DatabaseModule],
  providers: [...SubCategoryProviders, SubCategoriesService],
  exports: [SubCategoriesService],
})
export class SubCategoriesModule {}
