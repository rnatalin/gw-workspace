import { Injectable, Inject, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import {SubCategory} from './subCategories.entity'

@Injectable()
export class SubCategoryService {
  constructor(
    @Inject('SUBCATEGORY_REPOSITORY')
    private subCategoryRepository: Repository<SubCategory>,
  ) {}

  async findAll(): Promise<SubCategory[]>{
    return this.subCategoryRepository.find({relations:[]});
  }

  async createSubCategory(data: any): Promise<SubCategory>{
    const create = this.subCategoryRepository.create({
      "name": data.name,
      "description": data.description,
      "Categories": data.categories
    });
    return this.subCategoryRepository.save(create);
  }

  async findById(id: number): Promise<SubCategory>{
    
    return this.subCategoryRepository.findOne(id)
  }
  async updateSubCategory(id: number, data: any): Promise<SubCategory> { 
      const subCategory = await this.findById(id);
      if(!subCategory) throw new Error("Ta na disney patrao?");
      // console.log(data)
      subCategory.name = data.name
      subCategory.description = data.description

    
      return this.subCategoryRepository.save(subCategory);
  }
}