import { Injectable, NestMiddleware, } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()

export class LoggerMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        const inicio = Date.now();
        console.log(`[MIDDLEWARE]  ${req.method} ${req.originalUrl}`);

        res.on('finish',()=> {
            console.log(`[MIDDLEWARE] ${res.statusCode} (${Date.now() - inicio}ms)`);
        });

        next(); 

}
}