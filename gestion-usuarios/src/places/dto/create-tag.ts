import { IsString, IsOptional } from 'class-validator';
export class CreateTag {
    @IsOptional() // No es necesario enviarlo, MySQL lo genera automáticamente
    tag_id?: number;
    
    @IsString()
    tag_name: string;

}