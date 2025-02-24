import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreatePlaceTags {
    @IsNumber()
    plc_id: number;
    
    @IsNumber()
    tag_id: number;
}