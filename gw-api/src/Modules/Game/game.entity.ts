import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { SubCategory } from '../SubCategory/subCategories.entity';

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

  @Column()
  mainImg: string;

  @Column()
  subImg: string;

  @Column()
  platforms: string;

  @Column()
  status: boolean;

  @ManyToMany(() => SubCategory)
  @JoinTable()
  subCategory: SubCategory[];
}
