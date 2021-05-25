import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/CreateGame.dto';
import { Game } from './game.entity';
import { SubCategoriesService } from '../SubCategories/subCategories.service';

@Injectable()
export class GameService {
  constructor(
    @Inject('GAME_REPOSITORY')
    private gameRepository: Repository<Game>,
    private subCategoryService: SubCategoriesService,
  ) {}

  async findAll(): Promise<Game[]> {
    return this.gameRepository.find({
      relations: ['subCategories', 'subCategories.category'],
    });
  }

  async createGame(data: CreateGameDto): Promise<Game> {
    const { categories, ...rest } = data;

    const subCategories = [];

    for (const categoryId of categories) {
      const res = await this.subCategoryService.getSubCategoryById(categoryId);
      subCategories.push(res);
    }

    const create = this.gameRepository.create({
      ...rest,
      subCategories,
    });

    return this.gameRepository.save(create);
  }

  async findById(id: number): Promise<Game> {
    return this.gameRepository.findOne(id, {
      relations: ['subCategories', 'subCategories.category'],
    });
  }

  async updateGame(id: number, data: any): Promise<Game> {
    const game = await this.findById(id);
    if (!game) throw new Error('Ta na disney patrao?');

    const newGame = { ...game, ...data };

    return this.gameRepository.save(newGame);
    //const update = this.gameRepository.update()
  }
}
