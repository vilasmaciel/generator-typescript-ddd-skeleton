import { User } from '../domain/User';
import { UserId } from '../domain/UserId';
import { UserRepository } from '../domain/UserRepository';

export class InMemoryUserRepository implements UserRepository {
  async find(userId: UserId): Promise<User> {
    return new User(new UserId(''));
  }

  async insert(user: User): Promise<void> {
    return;
  }
}
