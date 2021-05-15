import { Category } from '../Categories/categories.entity';
export declare class Game {
    id: number;
    name: string;
    description: string;
    filename: string;
    views: number;
    isPublished: boolean;
    mainImg: string;
    subImg: string;
    platforms: string;
    stats: boolean;
    categories: Category['id'];
}
