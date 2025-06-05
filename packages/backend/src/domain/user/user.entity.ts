import { IUser } from '@game-tracker/shared';

export class User implements IUser {
  constructor(
    public readonly id: number,
    public email: string,
    public displayName: string,
    public createdAt: Date,
    public discordId: string | null,
    public avatarUrl: string | null,
    public passwordHash: string | null = null,
  ) {}
}
