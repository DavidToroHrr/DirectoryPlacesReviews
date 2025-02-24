import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { Places } from "./places.entity";
import { Categories } from "./categories.entity";

@Entity({ name: "place_categories" }) // Asegurar que coincide con la tabla en MySQL
export class PlaceCategories {

    @PrimaryColumn({ type: "int" }) // Clave primaria compuesta (parte 1)
    plc_id: number;

    @PrimaryColumn({ type: "int" }) // Clave primaria compuesta (parte 2)
    ctg_id: number;

    // Relación con Places
    @ManyToOne(() => Places, (place) => place.placeCategories, { onDelete: "CASCADE" })
    @JoinColumn({ name: "plc_id" }) // Especifica la clave foránea en la BD
    places: Places;

    // Relación con Categories
    @ManyToOne(() => Categories, (category) => category.placeCategories, { onDelete: "CASCADE" })
    @JoinColumn({ name: "ctg_id" }) // Especifica la clave foránea en la BD
    categories: Categories;
}
