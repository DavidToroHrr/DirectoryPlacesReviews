import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Media } from "./media.entity";
import { PlaceCategories } from "./place-categories.entity";
import { PlaceTags } from "./place-tags.entity";
export enum PlaceType {
    RESTAURANT = "restaurant",
    PARK = "park",
    MUSEUM = "museum",
    CAFE = "cafe"
}

@Entity({ name: "places" }) // Asegurar que coincida con el nombre en MySQL
export class Places {
    @PrimaryGeneratedColumn({type: "int"}) // Mantiene el autoincremental de SQL
    plc_id: number; // Asegurar que el nombre de la columna coincide con SQL

    @Column({type: "varchar", length: 30, nullable: false, unique: true})
    plc_name: string; // Asegurar que el nombre de la columna coincide con SQL 

    @Column({type: "varchar", length: 60, nullable: false})
    plc_address: string; // Asegurar que el nombre de la columna coincide con SQL 

    @Column({ type: 'enum', enum: PlaceType, nullable: false })
    plc_type: PlaceType; 

    @Column({type: "varchar",length:100 ,nullable: false})
    plc_operating_hours?: string; // Asegurar que el nombre de la columna coincide con SQL

    @Column({type: "text", nullable: false})
    plc_description?: string; // Asegurar que el nombre de la columna coincide con SQL

    @OneToMany(() => Media, (media) => media.places)
    media: Media[]; // Define la relación inversa

    // 🔹 Relación con PlaceCategories
    @OneToMany(() => PlaceCategories, (placeCategory) => placeCategory.places)
    placeCategories: PlaceCategories[];

    // 🔹 Relación con PlaceTags
    @OneToMany(() => PlaceTags, (placeTag) => placeTag.places)
    placeTags: PlaceTags[];
    }
