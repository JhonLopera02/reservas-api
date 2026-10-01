import { BadRequestException, Body, Controller, Get, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ReservationsService } from './reservations.service.js';
import { CreateReservationDto } from './dto/create-reservation.dto.js';
import { ApiKeyGuard } from '../common/guards/api-key.guard.js';
import { ResponseInterceptor } from '../common/interceptors/response.interceptor.js';

@Controller('reservations')
@UseInterceptors(ResponseInterceptor)
export class ReservationController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  @UseGuards(ApiKeyGuard)
  create(@Body() dto: CreateReservationDto) {
    return this.reservationsService.create(dto);
  }

  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }

  
  @Get('error')
  provocarError() {
    throw new BadRequestException('Reservation data is invalid');
  }
}