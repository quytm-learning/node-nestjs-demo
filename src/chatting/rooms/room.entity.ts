import {
  Column,
  Entity, JoinColumn, ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/user.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  leftUser: string;

  @Column()
  rightUser: string;

  @Column({
    type: 'datetime',
    default: () => 'NOW()',
  })
  createAt: Date;

  // @ManyToOne(type => User)
  // @JoinColumn(
  //   {
  //     name: 'leftUser',
  //     referencedColumnName: 'id',
  //   },
  // )
  // left: User;

  @ManyToOne(type => User, user => user.id)
  left: User;

}
