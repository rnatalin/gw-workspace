import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Photo } from '../Photos/photo.entity';
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

  @Column({ nullable: true })
  status: boolean;

  @ManyToMany(() => SubCategory)
  @JoinTable()
  subCategory: SubCategory[];

  @ManyToMany(() => Platform, ({ game }) => game)
  @JoinTable()
  platform: Platform[];

  @OneToMany(() => Photo, ({ gamesPhotos }) => gamesPhotos)
  photos: Photo[];
}
