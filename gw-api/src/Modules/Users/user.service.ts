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
    return this.userRepository.find({ relations: [] });
  }

  async createUser(data: any): Promise<User> {
    const create = this.userRepository.create({
      name: data.name,
      email: data.email,
      password: data.password,
      access: data.access,
      status: data.status,
      profilePic: data.profilePic,
    });
    return this.userRepository.save(create);
  }
  async findById(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }
  async updateUser(id: number, data: any): Promise<User> {
    const user = await this.findById(id);
    if (!user) throw new Error('Ta na disney patrao?');
    user.name = data.name;
    user.email = data.email;
    user.password = data.password;
    user.access = data.access;
    user.status = data.status;
    user.profilePic = data.profilePic;

    return this.userRepository.save(user);
  }
}
