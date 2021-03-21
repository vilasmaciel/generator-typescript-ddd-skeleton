import { Response } from 'express';
import httpStatus from 'http-status';
import { UserCreator } from '../../../../Contexts/User/application/create/UserCreator';
import { UserId } from '../../../../Contexts/User/domain/UserId';
import { Controller } from '../Controller';
import { CreateUserRequest } from './CreateUserRequest';

export class UserPostController implements Controller  {
  constructor(private userCreator: UserCreator) {}

  async run(req: CreateUserRequest, res: Response): Promise<void> {
    const userId = new UserId(req.body.id);
    await this.userCreator.run(userId);
    res.status(httpStatus.CREATED).json();
  }
}
