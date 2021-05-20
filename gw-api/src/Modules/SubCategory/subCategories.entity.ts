import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToMany, ManyToOne } from 'typeorm';
import {Category} from '../Categories/categories.entity'

@Entity()
export class SubCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
  
  @ManyToOne(() => Category, ({subCategories}) => subCategories)
  category: Category;
 
}