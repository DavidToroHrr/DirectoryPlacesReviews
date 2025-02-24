import { IsString, IsOptional, IsEnum} from 'class-validator';
import { PlaceType } from '../entities/places.entity';
export class CreatePlace { 
    @IsOptional() // No es necesario enviarlo, MySQL lo genera automáticamente
    plc_id?: number;

    @IsString() // Solo se permiten valores de tipo string
    plc_name: string;

    @IsString() // Solo se permiten valores de tipo string
    plc_address: string;

    @IsEnum(['RESTAURANT', 'PARK', 'MUSEUM', 'CAFE']) // Solo se permiten estos valores
    plc_type: PlaceType; 

    @IsOptional() // No es necesario enviarlo, MySQL lo genera automáticamente
    plc_operating_hours: string; 

    @IsOptional() // No es necesario enviarlo, MySQL lo genera automáticamente
    plc_description: string; 

}