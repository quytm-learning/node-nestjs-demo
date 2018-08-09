import { Logger, Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { messageProviders } from './message.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...messageProviders,
    MessagesService,
    Logger,
  ],
  controllers: [MessagesController],
})
export class MessagesModule {
}
