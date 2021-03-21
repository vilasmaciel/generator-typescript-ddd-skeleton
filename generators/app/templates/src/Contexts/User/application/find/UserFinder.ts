import { User } from '../../domain/User';
import { UserId } from '../../domain/UserId';
import { UserRepository } from '../../domain/UserRepository';

export class UserFinder {
  constructor(private repository: UserRepository) {}

  async run(userId: UserId): Promise<User> {
    return this.repository.find(userId);
  }
}
