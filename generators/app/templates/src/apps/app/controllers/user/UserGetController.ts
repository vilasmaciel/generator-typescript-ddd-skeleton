import { Response } from 'express';
import httpStatus from 'http-status';
import { UserFinder } from '../../../../Contexts/User/application/find/UserFinder';
import { UserId } from '../../../../Contexts/User/domain/UserId';
import { Controller } from '../Controller';
import { CreateUserRequest } from './CreateUserRequest';

export class UserGetController  implements Controller {
  constructor(private findUser: UserFinder) {}

  async run(req: CreateUserRequest, res: Response): Promise<void> {
    const userId = new UserId(req.body.id);
    const user = await this.findUser.run(userId);
    res.status(httpStatus.OK).json(user);
  }
}
