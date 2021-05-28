import { Injectable, Inject } from '@nestjs/common';
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
      relations: ['category'],
    });
  }

  async createSubCategory(data: CreateSubCategoryDto): Promise<SubCategory> {
    // vc busca no banco uma categoria
    const category = await this.categoryService.findById(data.category); // SELECT * FROM category WHERE id
    // armazenou ela na const category

    const create = this.subCategoryRepository.create({
      ...data,
      category, // passou ela pra dentro da sua sub categoria
    });
    return this.subCategoryRepository.save(create);
  }

  async findById(id: number): Promise<SubCategory> {
    return this.subCategoryRepository.findOne(id, {relations: ['category']});
  }
  async updateSubCategory(id: number, data: any): Promise<SubCategory> {
    const category = await this.categoryService.findById(data.categoryID);
    const subCategory = await this.findById(id);
    if (!subCategory) throw new Error('Ta na disney patrao?');
    (subCategory.name = data.name),
      (subCategory.description = data.description),
      (subCategory.category = category);

    return this.subCategoryRepository.save(subCategory);
  }
}
