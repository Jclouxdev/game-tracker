import { Injectable } from '@nestjs/common';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { UpdatePlatformDto } from './dto/update-platform.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class PlatformsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPlatformDto: CreatePlatformDto) {
    return (
      'This action adds a new platform with data: ' +
      JSON.stringify(createPlatformDto)
    );
  }

  findAll() {
    return this.prisma.platforms.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} platform`;
  }

  update(id: number, updatePlatformDto: UpdatePlatformDto) {
    return `This action updates a #${id} platform with data: ${JSON.stringify(updatePlatformDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} platform`;
  }
}
