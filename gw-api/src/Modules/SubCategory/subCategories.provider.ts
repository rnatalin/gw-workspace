import { Connection } from 'typeorm';
import { SubCategory } from './subCategories.entity';

export const SubCategoryProviders = [
  {
    provide: 'SUBCATEGORY_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(SubCategory),
    inject: ['DATABASE_CONNECTION'],
  },
];
