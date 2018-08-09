import { Connection } from 'typeorm';
import { Room } from './room.entity';

export const roomProviders = [
  {
    provide: 'RoomRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Room),
    inject: ['DbConnectionToken'],
  },
];