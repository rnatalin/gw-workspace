import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}
  @Get('')
  async findAllPhotos(): Promise<Photo[]> {
    return this.photoService.findAllPhotos();
  }

  @Get(':id')
  async findById(@Param('id') id:number): Promise<Photo> {
    return this.photoService.findById(id);
  }

  @Post('')
  async createPhoto(@Req() request: Request): Promise<Photo> {
    return this.photoService.createPhoto(request.body);
  }

  @Patch(':id')
  async updatePhoto(
    @Req() request: Request,
    @Param('id') id: number,
  ): Promise<Photo> {
    return this.photoService.updatePhoto(id, request.body);
  }
}
