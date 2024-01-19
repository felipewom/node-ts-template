import { User } from '@/domain/user/user'

export interface UserUseCase {
  getUserById(id: string): Promise<User | null>;
}

export class DefaultUserUseCase implements UserUseCase {
  private users: User[] = [
    { id: '1', username: 'john_doe', email: 'john@example.com', age: 25 },
    { id: '2', username: 'jane_doe', email: 'jane@example.com', age: 30 },
  ];

  async getUserById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null;
  }
}
