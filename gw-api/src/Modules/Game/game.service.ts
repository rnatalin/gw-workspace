import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Game } from './game.entity';
import { SubCategoryService } from '../SubCategory/subCategories.service';
import { PlatformService } from '../Platforms/platforms.service';
import { Platform } from '../Platforms/platforms.entity'

@Injectable()
export class GameService {
  constructor(
    @Inject('PLATFORM_REPOSITORY')
    private platformRepository: Repository<Platform>,
    @Inject('GAME_REPOSITORY')
    private gameRepository: Repository<Game>,
    private subCategoryService: SubCategoryService,
    private platformService: PlatformService,
  ) {}
  
  async findAll(): Promise<Game[]> {
    return this.gameRepository.find({
      relations: ['subCategory', 'subCategory.category', 'platform'],
    });
  }
  async createGame(
    data: any,
    category: number[],
    platform: number[],
  ): Promise<Game> {
    const saveSubCategories = await this.subCategoryService.getSubCategories();
    const subCategory = data.subCategory.map((i) => {
      return saveSubCategories.find((n) => n.id == i);
    });
    
    const savePlatforms = await this.platformRepository.find();
    const Platforms = data.platform.map((i) => {
      return savePlatforms.find((n) => n.id == i);
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
      subCategory: subCategory,
      platform: Platforms
    });
    console.log(create);
    return this.gameRepository.save(create);
  }
  async findById(id: number): Promise<Game> {
    return this.gameRepository.findOne(id, {
      relations: ['subCategory', 'subCategory.category'],
    });
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
