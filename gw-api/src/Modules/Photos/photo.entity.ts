import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Game } from '../Game/game.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @ManyToOne(() => Game, ({ photos }) => photos)
  gamesPhotos: Game;
  
}
