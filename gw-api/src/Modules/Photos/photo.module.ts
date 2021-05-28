import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controllers';
import { PhotoProviders } from './photo.providers'
import { GameModule } from '../Game/game.module';

@Module({
  controllers:[PhotoController],
  imports: [DatabaseModule, GameModule],
  providers: [...PhotoProviders, PhotoService],
  exports: [PhotoService, PhotoModule],

})
export class PhotoModule {}