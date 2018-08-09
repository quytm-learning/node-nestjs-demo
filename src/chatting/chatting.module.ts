import { Module } from '@nestjs/common';
import { RoomsModule } from './rooms/rooms.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [RoomsModule, MessagesModule],
})
export class ChattingModule {}
