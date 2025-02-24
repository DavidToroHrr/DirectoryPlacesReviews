import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreatePlaceCategories {


    @IsNumber()
    plc_id: number;

    @IsNumber()
    ctg_id: number;
}