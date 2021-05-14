import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './categories.entity';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>,
  ) {}
  
  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find({relations:[]});
  }
  async createCategory(data: any): Promise<Category> {
    const create = this.categoryRepository.create({
      "name": data.name,
      "description": data.description,
      "games": data.games,
      "popularity": data.popularity
    });
    return this.categoryRepository.save(create);
  }
  async findById(id: number): Promise<Category>{
    
    return this.categoryRepository.findOne(id)
  }
  async updateCategory(id: number, data: any): Promise<Category> { 
      const category = await this.findById(id);
      if(!category) throw new Error("Ta na disney patrao?");
      // console.log(data)
      category.name = data.name
      category.description = data.description
      category.games = data.games
      category.popularity = data.popularity

    
      return this.categoryRepository.save(category)
    }
  }
  