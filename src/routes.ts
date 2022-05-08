import { Express, Request, Response } from 'express';
import { createUserHandler } from './controllers/user.controller';
import { getAllCustomersHandler } from './controllers/customer.controller';
import validate from './middleware/validateResource';
import { createUserSchema } from './schema/user.schema';

function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  //Create User Route
  app.post('/api/users', validate(createUserSchema), createUserHandler);
  app.get('/api/customers', getAllCustomersHandler);
}

export default routes;
