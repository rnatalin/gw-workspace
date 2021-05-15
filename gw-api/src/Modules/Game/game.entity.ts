import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({default: 0})
  main: string;

  @Column({default: 0})
  sub: string;

  @Column({default: 0})
  cat: number;

  @Column({default: 0})
  platforms: string;

  @Column({default: false})
  stats: boolean;
}