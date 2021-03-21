import { Express } from 'express';
import container from '../dependency-injection';

import { UserGetController } from '../controllers/user/UserGetController';
import { UserPostController } from '../controllers/user/UserPostController';

export const register = (app: Express) => {

  const createUserController = container.get<UserPostController>('App.controllers.UserPostController');
  app.post('/user', createUserController.run.bind(createUserController));

  const userGetController = container.get<UserGetController>('App.controllers.UserGetController');
  app.get('/user/:id', userGetController.run.bind(userGetController));
};
