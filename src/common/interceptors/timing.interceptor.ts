import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class TimingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const inicio = Date.now();
    console.log('[INTERCEPTOR] Antes del handler');

    return next.handle().pipe(
      tap(() => console.log(`[INTERCEPTOR] Después del handler (${Date.now() - inicio}ms)`)),
    );
  }
}