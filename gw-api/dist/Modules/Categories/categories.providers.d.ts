import { Connection, Repository } from 'typeorm';
import { Category } from './categories.entity';
export declare const CategoryProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<Category>;
    inject: string[];
}[];
