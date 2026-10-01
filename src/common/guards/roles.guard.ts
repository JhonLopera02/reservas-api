import { CanActivate,Injectable, ExecutionContext, ForbiddenException} from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()

export class RolesGuard implements CanActivate {
    constructor (private reflector: Reflector){}

    canActivate(context: ExecutionContext): boolean {
        const rolesRequeridos = this.reflector.get<string[]>('roles', context.getHandler());
        if(!rolesRequeridos) return true;

        const req =context.switchToHttp().getRequest();
        const rol = req.headers['x-role'];
        console.log(`[GUARD] rol recibido: ${rol}, requerido: ${rolesRequeridos}`);

        if(!rolesRequeridos.includes(rol)){
            throw new ForbiddenException('No tienes permisos para esta accion');

        }

        return true;

        

    }


}