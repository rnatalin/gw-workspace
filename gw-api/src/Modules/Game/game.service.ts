import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Game } from './game.entity';
import { SubCategoryService } from '../SubCategory/subCategories.service';
@Injectable()
export class GameService {
  constructor(
    @Inject('GAME_REPOSITORY')
    private gameRepository: Repository<Game>,
    private subCategoryService: SubCategoryService,
  ) {}

  async findAll(): Promise<Game[]> {
    return this.gameRepository.find({
      relations: ['subCategory', 'subCategory.category'],
    });
  }
  async createGame(data: any, category: number[]): Promise<Game> {
    const saveSubCategories = await this.subCategoryService.getSubCategories();
    let subCategory = [];

    subCategory = category.map((s) => {
      return saveSubCategories.find((sub) => sub.id);
    });
    const create = this.gameRepository.create({
      name: data.name,
      description: data.description,
      filename: data.filename,
      views: data.views,
      isPublished: data.isPublished,
      mainImg: data.mainImg,
      subImg: data.subImg,
      platforms: data.platforms,
      status: data.stats,
      subCategory,
    });
    return this.gameRepository.save(create);
  }
  async findById(id: number): Promise<Game> {
    return this.gameRepository.findOne(id);
  }
  async updateGame(id: number, data: any): Promise<Game> {
    const game = await this.findById(id);
    if (!game) throw new Error('Ta na disney patrao?');
    game.name = data.name;
    game.description = data.description;
    game.filename = data.filename;
    game.views = data.views;
    game.isPublished = data.isPublished;
    game.mainImg = data.mainImg;
    game.subImg = data.subImg;
    game.platforms = data.platforms;
    game.status = data.stats;

    return this.gameRepository.save(game);
  }
}
