"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryProviders = void 0;
const categories_entity_1 = require("./categories.entity");
exports.CategoryProviders = [
    {
        provide: 'CATEGORY_REPOSITORY',
        useFactory: (connection) => connection.getRepository(categories_entity_1.Category),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=categories.providers.js.map