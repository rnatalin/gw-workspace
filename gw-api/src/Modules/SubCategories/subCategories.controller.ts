import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SubCategoriesService } from './subCategories.service';
import { SubCategories } from './subCategories.entity';
import { CreateSubCategoryDto } from './dto/createSubCategory.dto';

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

  @Post()
  async createSubCategory(
    @Body() subCategoryDto: CreateSubCategoryDto,
  ): Promise<SubCategories> {
    return this.subCategoriesService.createSubcategory(subCategoryDto);
  }
}
