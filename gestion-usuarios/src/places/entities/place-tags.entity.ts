import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { Places } from "./places.entity";
import { Tags } from "./tags.entity";

/**
 * Entity representing the relationship between places and tags.
 */
@Entity({ name: "place_tags" }) 
export class PlaceTags {

    /**
     * Primary key (part 1) - Identifier of the place.
     */
    @PrimaryColumn({ type: "int" }) 
    plc_id: number;

    /**
     * Primary key (part 2) - Identifier of the tag.
     */
    @PrimaryColumn({ type: "int" }) 
    tag_id: number;

    /**
     * Many-to-One relationship with Places.
     * Ensures that when a place is deleted, related entries are also removed.
     */
    @ManyToOne(() => Places, (place) => place.placeTags, { onDelete: "CASCADE" })
    @JoinColumn({ name: "plc_id" }) 
    places: Places;

    /**
     * Many-to-One relationship with Tags.
     * Ensures that when a tag is deleted, related entries are also removed.
     */
    @ManyToOne(() => Tags, (tag) => tag.placeTags, { onDelete: "CASCADE" })
    @JoinColumn({ name: "tag_id" }) 
    tags: Tags;
}
