import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SubCategory } from '../SubCategory/subCategories.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500, nullable: true })
  name: string;

  @Column('text',{nullable: true })
  description: string;

  @Column({nullable: true })
  popularity: number;

  @OneToMany(() => SubCategory, ({ category }) => category)
  subCategories: SubCategory[];
}
