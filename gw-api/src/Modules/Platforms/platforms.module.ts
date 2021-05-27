import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { PlatformController } from './platforms.controllers';
import { PlatformProviders } from './platforms.providers';
import { PlatformService } from './platforms.service';


@Module({
  controllers: [PlatformController],
  imports: [DatabaseModule],
  providers: [...PlatformProviders, PlatformService],
  exports: [PlatformService, PlatformModule, ...PlatformProviders],
})
export class PlatformModule {}