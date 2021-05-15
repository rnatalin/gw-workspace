import { Injectable, Inject, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find({relations:[]});
  }

  async createUser(data: any): Promise<User> {
    const create = this.userRepository.create({
      "name": data.name,
      "email": data.email,
      "password": data.password,
      "access": data.access,
      "status": data.status,
      "profilePic": data.profile_pic

    });
    return this.userRepository.save(create);
  }

}