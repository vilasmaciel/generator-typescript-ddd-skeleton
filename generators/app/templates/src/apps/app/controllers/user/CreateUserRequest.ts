import { Request } from 'express';

export interface CreateUserRequest extends Request {
  body: {
    id: string;
  };
}
