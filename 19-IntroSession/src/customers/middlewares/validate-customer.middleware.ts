import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware customer');
    const { authorization } = req.headers;
    if (!authorization)
      return res.status(400).send({ error: 'No authentication Provided' });
    if (authorization === '123') next();
    else {
      return res.status(403).send({ error: 'Invalid Authorization' });
    }
  }
}
