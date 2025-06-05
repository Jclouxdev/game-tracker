export interface IUser {
  id: number;
  passwordHash: string | null;
  email: string;
  displayName: string;
  createdAt: Date;
  discordId: string | null;
  avatarUrl: string | null;
}
