import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ReservationModule } from './reservations/reservations.module.js';
import { NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware.js';

@Module({
  imports: [ReservationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer : MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes('reservations');

  }

}
