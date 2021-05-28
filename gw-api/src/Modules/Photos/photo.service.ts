import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePhotoDto } from './Dto/createPhoto.dto';
import { Photo } from './photo.entity';
import { GameService } from '../Game/game.service';


@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
    private gameService: GameService,
  ) {}

  async findAllPhotos(): Promise<Photo[]> {
    return this.photoRepository.find({
      relations: ['gamesPhotos'],
    });
  }

  async createPhoto(data: CreatePhotoDto): Promise<Photo> {
    const gamesPhotos = await this.gameService.findById(data.gamesPhotos);
    const create = this.photoRepository.create({
      ...data,
      gamesPhotos,
    });
    return this.photoRepository.save(create);
  }

  async findById(id: number): Promise<Photo> {
    return this.photoRepository.findOne(id, {relations: ['gamesPhotos']});
  }

  async updatePhoto(id: number, data: any): Promise<Photo> {
    const gamesPhotos = await this.gameService.findById(data.gamesPhotos);
    const photos = await this.findById(id);
    if (!photos) throw new Error('Ta na disney patrao? Nao tem photo');
    (photos.filename = data.filename),
      (photos.gamesPhotos = data.gamesPhotos),
      gamesPhotos;

    return this.photoRepository.save(photos);
  }
}
