import { Logger, Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { DatabaseModule } from '../database/database.module';
import { photoProviders } from './photo.providers';
import { PhotoController } from './photo.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...photoProviders,
    PhotoService,
    Logger,
  ],
  controllers: [PhotoController],
})
export class PhotoModule {
}
