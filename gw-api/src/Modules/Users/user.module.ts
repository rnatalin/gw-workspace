import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { UserController } from './user.controller';
import { UserProviders } from './user.provider';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  imports: [DatabaseModule],
  providers: [...UserProviders, UserService],
})
export class UserModule {}
