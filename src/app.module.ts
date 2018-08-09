import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { PhotoModule } from './photo/photo.module';
import { SocketModule } from './socket/socket.module';
import { ChattingModule } from './chatting/chatting.module';

@Module({
  imports: [
    HelloModule,
    UsersModule,
    DatabaseModule,
    PhotoModule,
    SocketModule,
    ChattingModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {
}
