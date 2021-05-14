import { Category } from './categories.entity';
import { CategoryService } from './categories.service';
import { Request } from 'express';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    findAll(): Promise<Category[]>;
    updateCategory(request: Request, id: number): Promise<Category>;
    createCategory(request: Request): Promise<Category>;
    findById(id: number): Promise<Category>;
}
