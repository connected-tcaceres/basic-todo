import { Todo } from '@prisma/client';

export class TodoEntity implements Todo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  ownerId: number;
  createdAt: Date;
  updatedAt: Date;
}
