import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    if (req.headers['x-api-key'] !== 'restaurant-secret') {
      throw new ForbiddenException('API key inválida o ausente');
    }
    return true;
  }
}