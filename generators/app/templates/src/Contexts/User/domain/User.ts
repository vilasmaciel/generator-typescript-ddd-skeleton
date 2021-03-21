import { UserId } from './UserId';

export class User {
  readonly id: UserId;
  constructor(id: UserId) {
    this.id = id;
  }
}
