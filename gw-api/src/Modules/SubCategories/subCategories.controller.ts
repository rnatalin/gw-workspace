import { Controller, Get, Param } from '@nestjs/common';
import { SubCategoriesService } from './subCategories.service';
import { SubCategories } from './subCategories.entity';

@Controller('SubCategories')
export class SubCategoriesController {
  constructor(private readonly subCategoriesService: SubCategoriesService) {}
  @Get()
  async getSubCategories(): Promise<SubCategories[]> {
    return this.subCategoriesService.getSubCategories();
  }
  @Get(':id')
  async getSubCategory(@Param('id') id: number): Promise<SubCategories> {
    return this.subCategoriesService.getSubCategoryById(id);
  }
}
