import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { PlaceTags } from "./place-tags.entity";

/**
 * Entity representing a tag.
 */
@Entity({ name: "tags" }) 
export class Tags {

    /**
     * Primary key - Auto-incremented identifier for the tag.
     */
    @PrimaryGeneratedColumn({ type: "int" }) 
    tag_id?: number;

    /**
     * Name of the tag. Must be unique.
     */
    @Column({ type: "varchar", length: 100, nullable: false, unique: true })
    tag_name: string;

    /**
     * One-to-Many relationship with PlaceTags.
     * A tag can be associated with multiple places.
     */
    @OneToMany(() => PlaceTags, (placeTag) => placeTag.tags)
    placeTags: PlaceTags[];
}
