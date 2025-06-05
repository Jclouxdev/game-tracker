import { IUserRepository } from '../../domain/user/user.repository';
import { PrismaService } from '../../database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, users } from '@prisma/client';
import { User } from '../../domain/user/user.entity';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  private toDomain(prismaUser: users): User {
    return new User(
      prismaUser.id,
      prismaUser.email,
      prismaUser.display_name,
      prismaUser.created_at ?? new Date(),
      prismaUser.discord_id,
      prismaUser.avatar_url,
      prismaUser.password_hash,
    );
  }

  private toPersistence(user: User): Prisma.usersCreateInput {
    return {
      email: user.email,
      password_hash: user.passwordHash ?? '',
      display_name: user.displayName,
      avatar_url: user.avatarUrl,
      discord_id: user.discordId,
    };
  }

  async findAll(): Promise<User[]> {
    const results = await this.prisma.users.findMany();
    return results.map((user) => this.toDomain(user));
  }

  async findById(id: number): Promise<User | null> {
    const results = await this.prisma.users.findUnique({ where: { id } });
    return results ? this.toDomain(results) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const results = await this.prisma.users.findUnique({ where: { email } });
    return results ? this.toDomain(results) : null;
  }

  async findByDisplayName(displayName: string): Promise<User | null> {
    const results = await this.prisma.users.findUnique({
      where: { display_name: displayName },
    });
    return results ? this.toDomain(results) : null;
  }

  async create(user: User): Promise<User> {
    const data = this.toPersistence(user);
    const created = await this.prisma.users.create({ data });
    return this.toDomain(created);
  }

  async update(id: number, data: User): Promise<User> {
    const results = await this.prisma.users.update({ where: { id }, data });
    return this.toDomain(results);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.users.delete({ where: { id } });
  }
}
