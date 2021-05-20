import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from '../Categories/categories.entity';
import { Game } from './game.entity';

@Injectable()
export class GameService {
  constructor(
    @Inject('GAME_REPOSITORY')
    private gameRepository: Repository<Game>,
  ) {}

  async findAll(): Promise<Game[]> {
    return this.gameRepository.find({relations:[]});
  }
  async createGame(data: any): Promise<Game> {
    const create = this.gameRepository.create({
      "name": data.name,
      "description": data.description,
      "filename": data.filename,
      "views": data.views,
      "isPublished": data.isPublished,
      "mainImg": data.main_img,
      "subImg": data.sub_img,
      "platforms": data.platforms,
      "stats": data.stats,

    });
    return this.gameRepository.save(create);
  }
  async findById(id: number): Promise<Game>{
    
    return this.gameRepository.findOne(id)
  }
  async updateGame(id: number, data: any): Promise<Game>{
    const game = await this.findById(id);
    if(!game) throw new Error("Ta na disney patrao?");
   // console.log(data)
    game.name = data.name
    game.description = data.description
    game.filename = data.filename
    game.views = data.views
    game.isPublished = data.isPublished 
    
  
    return this.gameRepository.save(game)
    //const update = this.gameRepository.update()
  }
}