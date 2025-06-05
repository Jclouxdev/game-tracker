import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/users.controller';
import { PrismaUserRepository } from '../../infrastructure/persistence/prisma-user.repository';
import { UsersService } from '../../application/user/users.service';

@Module({
  controllers: [UsersController],
  providers: [
    PrismaUserRepository,
    UsersService,
    {
      provide: 'IUserRepository',
      useExisting: PrismaUserRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
