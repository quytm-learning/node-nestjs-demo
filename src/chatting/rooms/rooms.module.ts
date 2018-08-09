import { Logger, Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { roomProviders } from './room.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...roomProviders,
    RoomsService,
    Logger,
  ],
  controllers: [RoomsController],
})
export class RoomsModule {
}
