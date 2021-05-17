import { Get, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SubCategories } from './subCategories.entity';

@Injectable()
export class SubCategoriesService {
  @Inject('SUBCATEGORIES_REPOSITORY')
  private subCategoryRepo: Repository<SubCategories>;

  @Get()
  async getSubCategories(): Promise<SubCategories[]> {
    return this.subCategoryRepo.find();
  }

  async getSubCategoryById(id: number): Promise<SubCategories> {
    return this.subCategoryRepo.findOne(id);
  }
}
