"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameProviders = void 0;
const game_entity_1 = require("./game.entity");
exports.GameProviders = [
    {
        provide: 'GAME_REPOSITORY',
        useFactory: (connection) => connection.getRepository(game_entity_1.Game),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=game.providers.js.map