import { User } from './User';
import { UserId } from './UserId';

export interface UserRepository {
  find(userId: UserId): Promise<User>;
  insert(user: User): Promise<void>;
}
