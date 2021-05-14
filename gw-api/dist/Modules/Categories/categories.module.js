"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../database/database.module");
const categories_controllers_1 = require("./categories.controllers");
const categories_providers_1 = require("./categories.providers");
const categories_service_1 = require("./categories.service");
let CategoryModule = class CategoryModule {
};
CategoryModule = __decorate([
    common_1.Module({
        controllers: [categories_controllers_1.CategoryController],
        imports: [database_module_1.DatabaseModule],
        providers: [...categories_providers_1.CategoryProviders, categories_service_1.CategoryService],
    })
], CategoryModule);
exports.CategoryModule = CategoryModule;
//# sourceMappingURL=categories.module.js.map