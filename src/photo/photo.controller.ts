import { Body, Controller, Get, Header, Logger, Post, Res } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photos')
export class PhotoController {

  private logger = new Logger(PhotoController.name, false);

  constructor(private photoService: PhotoService) {
  }

  @Get('/')
  getAllPhotos() {
    return this.photoService.findAll();
  }

  @Post('/')
  uploadNewPhotos(@Body() photo: Photo) {
    this.photoService.insertPhoto(photo)
      .then(newPhoto => {
        this.logger.log(`Save photo successfully: photo = ${JSON.stringify(newPhoto)}`);
        return newPhoto;
      })
      .catch(err => {
        this.logger.error(`Error when save photo: err = ${JSON.stringify(err)}`);
        return err;
      });
  }

}
