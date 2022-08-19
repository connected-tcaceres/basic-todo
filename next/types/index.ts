export interface ITodo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  ownerId: number;
}

export interface IUser {
  id: number;
  email: string;
  username: string;
  isAdmin: boolean;
}
