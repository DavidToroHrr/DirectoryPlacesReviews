import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { PlaceCategories } from "./place-categories.entity";

@Entity({ name: "categories" }) // Defines the "categories" entity, ensuring it matches the MySQL table name
export class Categories {
  @PrimaryGeneratedColumn({ type: "int" }) // Primary key with auto-increment
  ctg_id: number; // Category ID

  @Column({ type: "varchar", length: 100 }) // Category name column with a max length of 100 characters
  ctg_name: string;

  @OneToMany(() => PlaceCategories, (placeCategory) => placeCategory.categories) // One-to-many relationship with PlaceCategories
  placeCategories: PlaceCategories[];
}
