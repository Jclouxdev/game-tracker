import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../interface/controllers/dto/user/create-user.dto';
import { UpdateUserDto } from '../../interface/controllers/dto/user/update-user.dto';
import { IUserRepository } from '../../domain/user/user.repository';

@Injectable()
export class UsersService {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
  ) {}

  create(createUserDto: CreateUserDto) {
    return (
      'This action adds a new user, with data: ' + JSON.stringify(createUserDto)
    );
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user, with data: ${JSON.stringify(updateUserDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
