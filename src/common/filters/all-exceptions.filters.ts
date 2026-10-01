import { Catch,ExceptionFilter,ArgumentsHost,HttpException,HttpStatus } from "@nestjs/common";


@Catch()

export class AllExceptionsFilter implements ExceptionFilter{
    catch(exception: unknown, host: ArgumentsHost){
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        const req = ctx.getRequest();

        const status = 

        exception instanceof HttpException
        ? exception.getStatus()
        : 'Error interno del servidor';

        console.log(`[FILTER]  Error${status} en ${req.method} ${req.url}`);

        req.status(status).json({
            success: false,
            statusCode: status,
            path: req.url,
            timeStamp: new Date().toISOString(),
            error: 'message',
        });
    }


}