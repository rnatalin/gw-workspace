import { Game } from './game.entity';
import { GameService } from './game.service';
import { Request } from 'express';
export declare class GameController {
    private readonly gameService;
    constructor(gameService: GameService);
    findAll(): Promise<Game[]>;
    createGame(request: Request): Promise<Game>;
    updateGame(request: Request, id: number): Promise<Game>;
    findById(id: number): Promise<Game>;
}
