import { IsString, IsOptional, IsNumber } from 'class-validator';

/**
 * Data Transfer Object (DTO) for associating a place with a tag.
 */
export class CreatePlaceTags {
  
    /**
     * Identifier of the place.
     */
    @IsNumber()
    plc_id: number;
    
    /**
     * Identifier of the tag.
     */
    @IsNumber()
    tag_id: number;
}
