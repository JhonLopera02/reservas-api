import {
  Controller, Get, Post, Delete, Body, Param,
  ParseIntPipe, UseGuards, UseInterceptors,
} from '@nestjs/common';
import { ReservasService } from './reservas.service.js';
import { CreateReservasDto } from './dto/create-reservas.dto.js';
import { FechaFuturaPipe } from '../common/pipes/fecha-futura.pipe.js';
import { Roles } from '../common/decorators/roles.decorators.js';
import { RolesGuard } from '../common/guards/roles.guard.js';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor.js';
import {ApiKeyGuard} from '../common/guards/api-key.guard.js';
import {TimingInterceptor} from '../common/interceptors/timing.interceptor.js';



@Controller('reservas')
@UseGuards(ApiKeyGuard, RolesGuard)
@UseInterceptors(TransformInterceptor, TimingInterceptor)
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}
    @Post()

    create(@Body(FechaFuturaPipe) dto: CreateReservasDto) {
    return this.reservasService.create(dto);
  }


  @Get()

  findAll(){
    return this.reservasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number){
    return this.reservasService.findOne(id);
  }

  @Delete(':id')
  @Roles('admin')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reservasService.remove(id);

}
}