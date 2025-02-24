import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { Places } from "./places.entity";
import { Categories } from "./categories.entity";

/**
 * Entity representing the relationship between places and categories.
 */
@Entity({ name: "place_categories" }) 
export class PlaceCategories {

    /**
     * Primary key (part 1) - Identifier of the place.
     */
    @PrimaryColumn({ type: "int" }) 
    plc_id: number;

    /**
     * Primary key (part 2) - Identifier of the category.
     */
    @PrimaryColumn({ type: "int" }) 
    ctg_id: number;

    /**
     * Many-to-One relationship with Places.
     * Ensures that when a place is deleted, related entries are also removed.
     */
    @ManyToOne(() => Places, (place) => place.placeCategories, { onDelete: "CASCADE" })
    @JoinColumn({ name: "plc_id" }) 
    places: Places;

    /**
     * Many-to-One relationship with Categories.
     * Ensures that when a category is deleted, related entries are also removed.
     */
    @ManyToOne(() => Categories, (category) => category.placeCategories, { onDelete: "CASCADE" })
    @JoinColumn({ name: "ctg_id" }) 
    categories: Categories;
}
