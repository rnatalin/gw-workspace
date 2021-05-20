import { Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { SubCategory } from './subCategories.entity';
import { SubCategoryService } from './subCategories.service';
import { Request } from 'express'

@Controller('subCategory')
export class SubCategoryController {
  constructor(private readonly subCategoryService: SubCategoryService) {}
  @Get()
  async getSubCategories(): Promise<SubCategory[]> {
    return this.subCategoryService.getSubCategories();
  }
  @Post('create')
  async createSubCategory(@Req() request: Request): Promise<SubCategory> {
    return this.subCategoryService.createSubCategory(request.body);
  }
  @Patch(':id')
  async updateSubCategory(@Req() request: Request, @Param('id') id: number): Promise<SubCategory>{
    return this.subCategoryService.updateSubCategory(id, request.body)
  }
}