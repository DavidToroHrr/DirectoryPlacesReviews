import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "categories" }) // Asegurar que coincida con el nombre en MySQL
export class Categories {
  @PrimaryGeneratedColumn({ type: "int" }) // Mantiene el autoincremental de SQL
  ctg_id: number; // Asegurar que el nombre de la columna coincide con SQL

  @Column({ type: "varchar", length: 100 })
  ctg_name: string;
}
