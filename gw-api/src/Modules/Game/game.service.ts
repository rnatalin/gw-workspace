import { Injectable, Inject } from '@nestjs/common';
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
    return this.gameRepository.find({ relations: [] });
  }

  async createGame(data: CreateGameDto): Promise<Game> {
    const allSubCategories = await this.subCategoryService.getSubCategories();
    let subCategories = [];

    subCategories = data.categories.map((s) => {
      return allSubCategories.find((sub) => sub.id === s);
    });

    const create = this.gameRepository.create({
      name: data.name,
      description: data.description,
      filename: data.filename,
      views: data.views,
      isPublished: data.isPublished,
      subCategories,
    });

    return this.gameRepository.save(create);
  }

  async findById(id: number): Promise<Game> {
    return this.gameRepository.findOne(id);
  }
  async updateGame(id: number, data: any): Promise<Game> {
    const game = await this.findById(id);
    if (!game) throw new Error('Ta na disney patrao?');

    const newGame = { ...game, ...data };

    return this.gameRepository.save(newGame);
    //const update = this.gameRepository.update()
  }
}
