import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateMedia {
    @IsOptional()
    md_id?: number;

    @IsString() // 🔹 Ahora será un string en Base64
    md_image: string;

    @IsOptional()
    md_description?: string;

    @IsNumber()
    plc_id: number;
}
