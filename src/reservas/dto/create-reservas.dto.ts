import { IsDate, IsDateString, IsInt, IsString, Max, Min, MinLength } from "class-validator";

 
export class CreateReservasDto {
    @IsString()
    @MinLength(3)
    cliente: string;

    @IsDateString()
    fecha: string;


    @IsInt()
    @Min(1)
    @Max(10)
    personas: number;

}