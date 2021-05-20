import { SubCategory } from '../SubCategory/subCategories.entity';
export declare class Category {
    id: number;
    name: string;
    description: string;
    popularity: number;
    subCategories: SubCategory[];
}
