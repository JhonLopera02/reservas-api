import { Injectable,BadRequestException} from "@nestjs/common";
import { CreateReservasDto } from "../../reservas/dto/create-reservas.dto.js";
import { PipeTransform } from "@nestjs/common";

@Injectable()

export class FechaFuturaPipe implements PipeTransform{
    transform( value: CreateReservasDto){
        console.log('[PIPE] Validando fecha futura');

        if(new Date(value.fecha) < new Date()){
            throw new BadRequestException('La fecha debe ser futura');
        }
        return value;

        

    }
}