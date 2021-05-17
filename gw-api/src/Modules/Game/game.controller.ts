import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Game } from './game.entity';
import { GameService } from './game.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateGameDto } from './dto/CreateGame.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}
  @Get()
  async findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }
  @Post()
  async createGame(@Body() CreateGameDto: CreateGameDto): Promise<Game> {
    return this.gameService.createGame(CreateGameDto);
  }
  @Patch(':id')
  async updateGame(
    @Body() request: CreateGameDto,
    @Param('id') id: number,
  ): Promise<Game> {
    return this.gameService.updateGame(id, request);
  }
  @Get(':id')
  async findById(@Param('id') id: number): Promise<Game> {
    return this.gameService.findById(id);
  }
}
