import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Platform } from './platforms.entity';

@Injectable()
export class PlatformService {
  constructor(
    @Inject('PLATFORM_REPOSITORY')
    private platformRepository: Repository<Platform>,
  ) {}

  async findAll(): Promise<Platform[]> {
    return this.platformRepository.find({
      relations: ['game'],
    });
  }
  async createPlatform(data: any): Promise<Platform> {
    const create = this.platformRepository.create({
      name: data.name,
      description: data.description,
    });
    return this.platformRepository.save(create);
  }
}
