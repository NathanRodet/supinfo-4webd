import { IsNotEmpty, IsString, Length } from 'class-validator';
export class CreateEventDto {

  @IsNotEmpty()
  @IsString()
  @Length(3, 250)
  titre: string;

  @IsString()
  @Length(3, 1550)
  description: string;

  @IsNotEmpty()
  DateDebut: Date;

  @IsNotEmpty()
  DateFin: Date;

  @IsNotEmpty()
  ticketsDisponible: number;

}