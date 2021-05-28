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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const typeorm_1 = require("typeorm");
const photo_entity_1 = require("../Photos/photo.entity");
const platforms_entity_1 = require("../Platforms/platforms.entity");
const subCategories_entity_1 = require("../SubCategory/subCategories.entity");
let Game = class Game {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Game.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], Game.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Game.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Game.prototype, "filename", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Game.prototype, "views", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Game.prototype, "isPublished", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Boolean)
], Game.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToMany(() => subCategories_entity_1.SubCategory),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Game.prototype, "subCategory", void 0);
__decorate([
    typeorm_1.ManyToMany(() => platforms_entity_1.Platform, ({ game }) => game),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Game.prototype, "platform", void 0);
__decorate([
    typeorm_1.OneToMany(() => photo_entity_1.Photo, ({ gamesPhotos }) => gamesPhotos),
    __metadata("design:type", Array)
], Game.prototype, "photos", void 0);
Game = __decorate([
    typeorm_1.Entity()
], Game);
exports.Game = Game;
//# sourceMappingURL=game.entity.js.map