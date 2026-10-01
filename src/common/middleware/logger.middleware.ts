import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const inicio = Date.now();
    const hora = new Date().toLocaleTimeString('es-CO', { hour12: false });
    console.log(`[REQUEST] ${req.method} ${req.originalUrl} - ${hora}`);

    res.on('finish', () => {
      console.log(`${req.method} ${req.originalUrl} - ${Date.now() - inicio}ms`);
    });

    next();
  }
}