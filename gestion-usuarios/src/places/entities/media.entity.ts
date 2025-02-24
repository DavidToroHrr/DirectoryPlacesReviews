import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Places } from "./places.entity";
import { IsOptional } from "class-validator";

/**
 * Entity representing media associated with places.
 */
@Entity({ name: "media" }) 
export class Media {

    /**
     * Unique identifier for the media entry.
     */
    @PrimaryGeneratedColumn()
    md_id: number;

    /**
     * Base64-encoded image stored as LONGTEXT.
     */
    @Column({ type: "longtext", nullable: false }) 
    md_image: string;

    /**
     * Optional description of the media.
     */
    @Column({ type: "varchar", length: 60, nullable: true })
    md_description?: string | null;

    /**
     * Identifier of the associated place.
     */
    @Column({ type: "int", nullable: false })
    plc_id: number;

    /**
     * Many-to-One relationship with Places.
     * Each media entry is linked to a specific place.
     */
    @ManyToOne(() => Places, (places) => places.media)
    @JoinColumn({ name: 'plc_id' }) 
    places: Places;
}
