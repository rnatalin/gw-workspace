import { Photo } from '../Photos/photo.entity';
import { Platform } from '../Platforms/platforms.entity';
import { SubCategory } from '../SubCategory/subCategories.entity';
export declare class Game {
    id: number;
    name: string;
    description: string;
    filename: string;
    views: number;
    isPublished: boolean;
    status: boolean;
    subCategory: SubCategory[];
    platform: Platform[];
    photos: Photo[];
}
