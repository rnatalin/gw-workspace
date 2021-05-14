"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await typeorm_1.createConnection({
            type: 'postgres',
            host: 'gw-postgres',
            port: 5432,
            username: 'gw-dev',
            password: 'NARCIO',
            database: 'gw-db',
            logging: true,
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map