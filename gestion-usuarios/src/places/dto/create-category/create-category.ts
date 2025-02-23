import { IsString, IsOptional } from 'class-validator';

export class CreateCategory {
  @IsOptional() // No es necesario enviarlo, MySQL lo genera automáticamente
  ctg_id?: number;

  @IsString()
  ctg_name: string;
}
