import { Injectable, ConflictException,NotFoundException} from '@nestjs/common';
import { CreateReservasDto } from './dto/create-reservas.dto.js';

@Injectable()
export class ReservasService {
    private reservas: any[] = [];
    private nextId: number = 1;


    create(dto: CreateReservasDto) {
        const existe = this.reservas.find(
            (r) => r.cliente === dto.cliente && r.fecha === dto.fecha,
        );

        if(existe) throw new ConflictException( 'Ya existe una reserva para este cliente y fecha');

        const reserva = { id: this.nextId++, ...dto };
        this.reservas.push(reserva);
        return reserva;
}

    findAll() {
        return this.reservas;
    }

    findOne(id: number) {
        const reserva= this.reservas.find( (r) => r.id === id );
        if(!reserva) throw new NotFoundException(`No se encontro la reserva con id ${id}`);
        return reserva;
};

    finAll(){
        return this.reservas;
    }


    remove(id: number){
        const reserva = this.findOne(id);
        this.reservas = this.reservas.filter((r)=> r.id !== id);
        return reserva;
        
    }

}
