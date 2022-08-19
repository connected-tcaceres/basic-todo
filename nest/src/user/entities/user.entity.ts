import { User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  email: string;
  username: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
