import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { CategoryModule } from '../Categories/categories.module';
import { SubCategoryController } from './subCategories.controller';
import { SubCategoryProviders } from './subCategories.provider';
import { SubCategoryService } from './subCategories.service';

@Module({
  controllers: [SubCategoryController],
  imports: [DatabaseModule, CategoryModule],
  providers: [...SubCategoryProviders, SubCategoryService],
  exports: [SubCategoryService, SubCategoryModule],
})
export class SubCategoryModule {}
