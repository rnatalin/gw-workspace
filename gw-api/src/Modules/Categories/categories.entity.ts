import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SubCategories } from '../SubCategories/subCategories.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column('int')
  games: number;

  @Column()
  popularity: number;

  @OneToMany(() => SubCategories, ({ category }) => category)
  subCategories: SubCategories[];
}
