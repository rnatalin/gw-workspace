import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SubCategory } from '../SubCategory/subCategories.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  popularity: number;

  @OneToMany(() => SubCategory, ({ category }) => category)
  subCategories: SubCategory[];
}
