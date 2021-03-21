import { User } from '../../domain/User';
import { UserId } from '../../domain/UserId';
import { UserRepository } from '../../domain/UserRepository';

export class UserCreator {
  constructor(private repository: UserRepository) {}

  async run(userId: UserId): Promise<void> {
    const user = new User(userId);
    await this.repository.insert(user);
  }
}
