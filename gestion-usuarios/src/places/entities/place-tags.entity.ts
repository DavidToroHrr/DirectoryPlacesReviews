import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { Places } from "./places.entity";
import { Tags } from "./tags.entity";
@Entity({ name: "place_tags" }) // Asegurar que coincide con la tabla en MySQL
export class PlaceTags{
    @PrimaryColumn({ type: "int" }) // Clave primaria compuesta (parte 1)
    plc_id: number;
    @PrimaryColumn({ type: "int" }) // Clave primaria compuesta (parte 2)
    tag_id: number;
    // Relación con Places

    @ManyToOne(() => Places, (place) => place.placeTags, { onDelete: "CASCADE" })
    @JoinColumn({ name: "plc_id" }) // Especifica la clave foránea en la BD
    places: Places;
    
    // Relación con Tags
    @ManyToOne(() => Tags, (tag) => tag.placeTags, { onDelete: "CASCADE" })
    @JoinColumn({ name: "tag_id" }) // Especifica la clave foránea en la BD
    tags: Tags;
}