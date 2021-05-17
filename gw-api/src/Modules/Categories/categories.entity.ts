import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToMany, ManyToOne } from 'typeorm';
import {Game} from '../Game/game.entity'
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

 @ManyToOne(type=> SubCategory, categories => Category)
 subCategory: SubCategory;
}
