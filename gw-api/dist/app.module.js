"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const categories_module_1 = require("./Modules/Categories/categories.module");
const game_module_1 = require("./Modules/Game/game.module");
const user_module_1 = require("./Modules/Users/user.module");
const subCategories_module_1 = require("./Modules/SubCategory/subCategories.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [game_module_1.GameModule, categories_module_1.CategoryModule, user_module_1.UserModule, subCategories_module_1.SubCategoryModule,],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map