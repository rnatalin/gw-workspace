"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let CategoryService = class CategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async findAll() {
        return this.categoryRepository.find();
    }
    async createCategory(data) {
        const create = this.categoryRepository.create({
            name: data.name,
            description: data.description,
            popularity: data.popularity,
        });
        return this.categoryRepository.save(create);
    }
    async findById(id) {
        return this.categoryRepository.findOne(id);
    }
    async updateCategory(id, data) {
        const category = await this.findById(id);
        if (!category)
            throw new Error('Ta na disney patrao?');
        category.name = data.name;
        category.description = data.description;
        category.popularity = data.popularity;
        return this.categoryRepository.save(category);
    }
};
CategoryService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('CATEGORY_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=categories.service.js.map