import { Injectable, CanActivate,UnauthorizedException,ExecutionContext } from "@nestjs/common";

@Injectable()

export class ApiKeyGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const req = context.switchToHttp().getRequest();
        console.log(`[GUARD]  verificando API key`);
        
        if (req.headers['x-api-key'] !== 'secreto123') {
            throw new UnauthorizedException('API key invalida viejo pepe');

            }
            return true;
    }

}