import { Injectable, Inject, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategoryService } from '../Categories/categories.service';
import { SubCategory } from './subCategories.entity';
import { CreateSubCategoryDto } from './dto/createSubCategory.dto';


@Injectable()
export class SubCategoryService {
  constructor(
    @Inject('SUBCATEGORY_REPOSITORY')
    private subCategoryRepository: Repository<SubCategory>,
    private categoryService: CategoryService,
  ) {}

  async getSubCategories(): Promise<SubCategory[]> {
    return this.subCategoryRepository.find({
      relations:["category"],
    });
  }

  async createSubCategory(data: CreateSubCategoryDto): Promise<SubCategory> {
    const category = await this.categoryService.findById(data.category);
    const create = this.subCategoryRepository.create({
      ...data,
      category,
    });
    return this.subCategoryRepository.save(create);
  }

  async findById(id: number): Promise<SubCategory> {
    return this.subCategoryRepository.findOne(id);
  }
  async updateSubCategory(id: number, data: any): Promise<SubCategory> {
    const category = await this.categoryService.findById(data.categoryID);
    const subCategory = await this.findById(id);
    if (!subCategory) throw new Error('Ta na disney patrao?');
    subCategory.name = data.name;
    (subCategory.description = data.description), category;

    return this.subCategoryRepository.save(subCategory);
  }
}
