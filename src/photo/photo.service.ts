import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {

  constructor(
    @Inject('PhotoRepositoryToken')
    private readonly photoRepository: Repository<Photo>,
  ) {
  }

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async insertPhoto(photo: Photo): Promise<Photo> {
    return await this.photoRepository.save(photo);
  }
}
