import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { ChattingModule } from './chatting/chatting.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    HelloModule,
    ChattingModule,
    UsersModule,
    DatabaseModule,
    PhotoModule,
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
