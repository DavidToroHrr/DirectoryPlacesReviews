import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Media } from "./media.entity";
import { PlaceCategories } from "./place-categories.entity";
import { PlaceTags } from "./place-tags.entity";

/**
 * Enum representing the possible types of places.
 */
export enum PlaceType {
    RESTAURANT = "restaurant",
    PARK = "park",
    MUSEUM = "museum",
    CAFE = "cafe"
}

/**
 * Entity representing a place.
 */
@Entity({ name: "places" }) 
export class Places {

    /**
     * Primary key - Auto-incremented identifier for the place.
     */
    @PrimaryGeneratedColumn({ type: "int" }) 
    plc_id: number;

    /**
     * Name of the place. Must be unique.
     */
    @Column({ type: "varchar", length: 30, nullable: false, unique: true })
    plc_name: string;

    /**
     * Address of the place.
     */
    @Column({ type: "varchar", length: 60, nullable: false })
    plc_address: string;

    /**
     * Type of place, based on the defined enum.
     */
    @Column({ type: 'enum', enum: PlaceType, nullable: false })
    plc_type: PlaceType; 

    /**
     * Operating hours of the place.
     */
    @Column({ type: "varchar", length: 100, nullable: false })
    plc_operating_hours?: string;

    /**
     * Description of the place.
     */
    @Column({ type: "text", nullable: false })
    plc_description?: string;

    /**
     * One-to-Many relationship with Media.
     * A place can have multiple associated media entries.
     */
    @OneToMany(() => Media, (media) => media.places)
    media: Media[];

    /**
     * One-to-Many relationship with PlaceCategories.
     * A place can belong to multiple categories.
     */
    @OneToMany(() => PlaceCategories, (placeCategory) => placeCategory.places)
    placeCategories: PlaceCategories[];

    /**
     * One-to-Many relationship with PlaceTags.
     * A place can have multiple associated tags.
     */
    @OneToMany(() => PlaceTags, (placeTag) => placeTag.places)
    placeTags: PlaceTags[];
}
