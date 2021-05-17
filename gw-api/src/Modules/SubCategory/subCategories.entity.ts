import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToMany, ManyToOne } from 'typeorm';
import {Game} from '../Game/game.entity'
import {Category} from '../Categories/categories.entity'

@Entity()
export class SubCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
  
  @OneToMany(type => Category, subCategory => SubCategory)
  Categories: Category[];
 
}