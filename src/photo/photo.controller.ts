import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photos')
export class PhotoController {

  constructor(private photoService: PhotoService,
              private logger: Logger) {
  }

  @Get('/')
  getAllPhotos() {
    this.photoService.findAll()
      .then(photos => {
        return photos;
      })
      .catch(err => {
        return err;
      });
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
