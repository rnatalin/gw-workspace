import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from '../Categories/categories.entity';

@Entity()
export class SubCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Category, ({ subCategories }) => subCategories, {cascade: true})
  
  category: Category;
}
