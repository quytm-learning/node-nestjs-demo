import { Module } from '@nestjs/common';
import { RoomsGateway } from './rooms.gateway';
import { ChatsGateway } from './chats.gateway';

@Module({
  providers: [
    RoomsGateway,
    ChatsGateway,
  ],
})
export class SocketModule {
}
