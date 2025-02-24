import { IsString, IsOptional, IsNumber } from 'class-validator';

/**
 * Data Transfer Object (DTO) for associating a place with a category.
 */
export class CreatePlaceCategories {

    /**
     * Identifier of the place.
     */
    @IsNumber()
    plc_id: number;

    /**
     * Identifier of the category.
     */
    @IsNumber()
    ctg_id: number;
}
