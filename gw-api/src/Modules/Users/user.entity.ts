import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  access: boolean;

  @Column()
  status: boolean;

  @Column()
  profilePic: string;
}
