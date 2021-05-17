import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from '../Categories/categories.entity';

@Entity({ name: 'sub_categories' })
export class SubCategories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @ManyToOne(() => Category, ({ subCategories }) => subCategories)
  category: Category;
}
