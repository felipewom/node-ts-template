export interface ExternalUser {
  id: string;
  username: string;
  email: string;
  age: number;
}

export interface UserExternalService {
  fetchUserById(id: string): Promise<ExternalUser | null>;
  storeUser(user: ExternalUser): Promise<void>;
}

export class UserExternalServiceImpl implements UserExternalService {
  private users: ExternalUser[] = [
    { id: '1', username: 'external_user_1', email: 'external1@example.com', age: 25 },
    { id: '2', username: 'external_user_2', email: 'external2@example.com', age: 30 },
  ];

  async fetchUserById(id: string): Promise<ExternalUser | null> {
    // Simulate fetching user data from an in-memory database
    return this.users.find((user) => user.id === id) || null;
  }

  async storeUser(user: ExternalUser): Promise<void> {
    // Simulate storing user data in an in-memory database
    this.users.push(user);
  }
}
