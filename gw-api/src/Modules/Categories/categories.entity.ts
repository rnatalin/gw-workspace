import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToMany, ManyToOne } from 'typeorm';
import {Game} from '../Game/game.entity'
import { SubCategory } from '../SubCategory/subCategories.entity';
import { SubCategoryProviders } from '../SubCategory/subCategories.provider';

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

  @OneToMany(() => SubCategory, ({category}) => category)
  subCategories: SubCategory[];
}
