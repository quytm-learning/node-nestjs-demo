import { Connection } from 'typeorm';
import { Message } from './message.entity';

export const messageProviders = [
  {
    provide: 'MessageRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Message),
    inject: ['DbConnectionToken'],
  },
];