import { Connection } from 'typeorm';
import { SubCategories } from './subCategories.entity';

export const SubCategoryProviders = [
  {
    provide: 'SUBCATEGORIES_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(SubCategories),
    inject: ['DATABASE_CONNECTION'],
  },
];
