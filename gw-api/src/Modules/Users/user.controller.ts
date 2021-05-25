import { Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Post('')
  async createUser(@Req() request: Request): Promise<User> {
    return this.userService.createUser(request.body);
  }
  @Patch(':id')
  async updateUser(
    @Req() request: Request,
    @Param('id') id: number,
  ): Promise<User> {
    return this.userService.updateUser(id, request.body);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<User> {
    return this.userService.findById(id);
  }
}
