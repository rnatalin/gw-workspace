import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { Platform } from '../Platforms/platforms.entity';
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

  @Column({nullable: true})
  mainImg: string;

  @Column({nullable: true})
  subImg: string;

  @Column({nullable: true})
  platforms: string;

  @Column({nullable: true})
  status: boolean;

  @ManyToMany(() => SubCategory)
  @JoinTable()
  subCategory: SubCategory[];

  @ManyToMany(() => Platform, ({game}) => game)
  @JoinTable()
  platform: Platform[];
}
