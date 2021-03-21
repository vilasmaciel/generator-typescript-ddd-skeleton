import { UserId } from './UserId';

export class UserNotFoundError extends Error {
  constructor(id: UserId) {
    super(`User ${id.value} not found`);
  }
}
