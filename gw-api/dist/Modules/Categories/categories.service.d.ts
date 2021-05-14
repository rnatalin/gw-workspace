import { Repository } from 'typeorm';
import { Category } from './categories.entity';
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    findAll(): Promise<Category[]>;
    createCategory(data: any): Promise<Category>;
    findById(id: number): Promise<Category>;
    updateCategory(id: number, data: any): Promise<Category>;
}
