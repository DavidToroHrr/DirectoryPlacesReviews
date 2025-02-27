import { IsString, IsOptional, IsNumber } from 'class-validator';

/**
 * Data Transfer Object (DTO) for creating media records.
 */
export class CreateMedia {

    /**
     * Optional unique identifier for the media.
     */
    @IsOptional()
    md_id?: number;

    /**
     * Media image encoded as a Base64 string.
     */
    @IsString() // 🔹 Now it will be stored as a Base64 string.
    md_image: string;

    /**
     * Optional description of the media.
     */
    @IsOptional()
    md_description?: string;

    /**
     * Identifier of the place associated with this media.
     */
    @IsNumber()
    plc_id: number;
}
