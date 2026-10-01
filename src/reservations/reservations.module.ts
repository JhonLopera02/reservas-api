
import { Module } from '@nestjs/common';
import {  ReservationsService } from './reservations.service.js';
import { ReservationController } from './reservations.controller.js';

@Module({
  controllers: [ReservationController],
  providers: [ReservationsService],
})
export class ReservationModule {}
