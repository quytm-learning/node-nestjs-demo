import { Body, Controller, Get, Header, Logger, Post, Res } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photos')
export class PhotoController {

  constructor(private photoService: PhotoService,
              private logger: Logger) {
  }

  @Get('/')
  @Header('Content-Type', 'application/json')
  getAllPhotos(@Res() res) {
    this.photoService.findAll()
      .then(photos => {
        this.logger.log(JSON.stringify(photos));
        res.json(photos);
        // return photos;
      })
      .catch(err => {
        // return err;
      });
  }

  @Post('/')
  @Header('Content-Type', 'application/json')
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
