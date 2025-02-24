import { IsString, IsOptional, IsEnum } from 'class-validator';
import { PlaceType } from '../entities/places.entity';

/**
 * Data Transfer Object (DTO) for creating a new place.
 */
export class CreatePlace { 

    /**
     * Unique identifier for the place.
     * Optional because MySQL generates it automatically.
     */
    @IsOptional()
    plc_id?: number;

    /**
     * Name of the place.
     * Must be a string.
     */
    @IsString()
    plc_name: string;

    /**
     * Address of the place.
     * Must be a string.
     */
    @IsString()
    plc_address: string;

    /**
     * Type of place.
     * Must be one of the predefined values: RESTAURANT, PARK, MUSEUM, or CAFE.
     */
    @IsEnum(['RESTAURANT', 'PARK', 'MUSEUM', 'CAFE'])
    plc_type: PlaceType; 

    /**
     * Operating hours of the place.
     * Optional, as MySQL can generate it automatically.
     */
    @IsOptional()
    plc_operating_hours: string; 

    /**
     * Description of the place.
     * Optional, as MySQL can generate it automatically.
     */
    @IsOptional()
    plc_description: string; 
}
