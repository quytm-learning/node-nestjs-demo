import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  name: string;

  @Column({ length: 40 })
  email: string;

  @Column()
  avatar: string;

  @Column()
  sex: string;

  @Column('text')
  bio: string;

}
