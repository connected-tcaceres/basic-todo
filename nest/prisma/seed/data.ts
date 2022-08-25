import { CreateUserDto } from '../../src/user/dto/create-user.dto';
import { CreateTodoDto } from '../../src/todo/dto/create-todo.dto';

const users: CreateUserDto[] = [
  { email: 'user1@email.com', username: 'user1', isAdmin: true },
  { email: 'user2@email.com', username: 'user2' },
  { email: 'user3@email.com', username: 'user3' },
  { email: 'user4@email.com', username: 'user4' },
];

const todos: CreateTodoDto[] = [
  {
    description: 'desc1',
    title: 'title1',
    isCompleted: true,
  },
  {
    description: 'desc2',
    title: 'title2',
  },
  {
    description: 'desc3',
    title: 'title3',
  },
  {
    description: 'desc4',
    title: 'title4',
  },
  {
    description: 'desc5',
    title: 'title5',
  },
  {
    description: 'desc6',
    title: 'title6',
  },
  {
    description: 'desc7',
    title: 'title7',
  },
  {
    description: 'desc8',
    title: 'title8',
  },
];

export const info = [
  { user: users[0], todos: [todos[0], todos[1]] },
  { user: users[1], todos: [todos[2], todos[3]] },
  { user: users[2], todos: [todos[4], todos[5]] },
  { user: users[3], todos: [todos[6], todos[7]] },
];
