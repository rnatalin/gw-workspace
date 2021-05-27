import { Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Platform } from './platforms.entity';
import { PlatformService } from './platforms.service'

@Controller('platform')
export class PlatformController{
  constructor(private readonly platformService: PlatformService){}
  @Get('')
  async findAll(): Promise<Platform[]>{
    return this.platformService.findAll();
  }

  @Post('')
  async createPlatform(@Req() request: Request): Promise<Platform>{
    return this.platformService.createPlatform(request.body)
  }

}