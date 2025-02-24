import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Places } from "./places.entity";

@Entity({ name: "media" }) 
export class Media {
    @PrimaryGeneratedColumn()
    md_id?: number;

    @Column({ type: "longtext", nullable: false }) // 🔹 Base64 se almacena como LONGTEXT
    md_image: string; // Ahora es un string con Base64

    @Column({ type: "varchar", length: 60 })
    md_description?: string;

    @Column({ type: "int", nullable: false })
    plc_id: number;

    @ManyToOne(() => Places, (places) => places.media)
    @JoinColumn({ name: 'plc_id' }) 
    places: Places;
}
