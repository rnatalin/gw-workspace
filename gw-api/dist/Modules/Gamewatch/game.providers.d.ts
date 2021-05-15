import { Connection, Repository } from 'typeorm';
import { Game } from './game.entity';
export declare const gameProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<Game>;
    inject: string[];
}[];