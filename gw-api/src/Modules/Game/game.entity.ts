import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import {Category} from '../Categories/categories.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;

  @Column({nullable: true})
  mainImg: string;

  @Column({nullable: true})
  subImg: string;

 // @Column({nullable: true})
  //cat: number;

  @Column({nullable: true})
  platforms: string;

  @Column({nullable: true})
  stats: boolean;

  @ManyToMany(category => Category, game => Game,{
    eager: true
  })
  @JoinTable()
  categories: Category['id'];
}