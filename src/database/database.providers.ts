import { createConnection } from 'typeorm';
let ormConfig = require('../../ormconfig.json');

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection(ormConfig),
  },
  // ... and other DB config
];
