import { Repository } from 'typeorm';
import { Game } from './game.entity';
export declare class GameService {
    private gameRepository;
    constructor(gameRepository: Repository<Game>);
    findAll(): Promise<Game[]>;
    createGame(data: any): Promise<Game>;
    findById(id: number): Promise<Game>;
    updateGame(id: number, data: any): Promise<Game>;
}
