import { Get, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SubCategories } from './subCategories.entity';
import { CreateSubCategoryDto } from './dto/createSubCategory.dto';
import { CategoryService } from '../Categories/categories.service';

@Injectable()
export class SubCategoriesService {
  constructor(
    @Inject('SUBCATEGORIES_REPOSITORY')
    private subCategoryRepo: Repository<SubCategories>,
    private categoryService: CategoryService,
  ) {}

  async getSubCategories(): Promise<SubCategories[]> {
    return this.subCategoryRepo.find();
  }

  async getSubCategoryById(id: number): Promise<SubCategories> {
    return this.subCategoryRepo.findOne(id);
  }

  async createSubcategory(data: CreateSubCategoryDto): Promise<SubCategories> {
    const category = await this.categoryService.findById(data.categoryId);
    if (!category) {
      throw new Error('Sem categoria pai ');
    }
    const create = this.subCategoryRepo.create({
      name: data.name,
      description: data.description,
      category,
    });
    return this.subCategoryRepo.save(create);
  }
}
