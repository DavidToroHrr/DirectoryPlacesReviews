import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@ Entity({ name: "tags" }) // Asegurar que coincida con el nombre en MySQL
export class Tags{
    @PrimaryGeneratedColumn({ type: "int" }) // Mantiene el autoincremental de SQL
    tag_id?: number; // Asegurar que el nombre de la columna coincide con SQL

    @Column({ type: "varchar", length: 100, nullable: false, unique:true })
    tag_name: string;

}
