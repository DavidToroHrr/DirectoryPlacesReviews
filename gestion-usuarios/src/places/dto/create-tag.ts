import { IsString, IsOptional } from 'class-validator';

/**
 * Data Transfer Object (DTO) for creating a new tag.
 */
export class CreateTag {
    
    /**
     * Unique identifier for the tag.
     * Optional because MySQL generates it automatically.
     */
    @IsOptional()
    tag_id?: number;
    
    /**
     * Name of the tag.
     * Must be a string.
     */
    @IsString()
    tag_name: string;
}
