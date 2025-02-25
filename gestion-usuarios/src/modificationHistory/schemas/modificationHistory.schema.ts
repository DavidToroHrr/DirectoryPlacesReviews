import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

/**
 * Type representing a hydrated document of the ModificationHistory schema.
 */
export type ModificationHistoryDocument = HydratedDocument<ModificationHistory>;

/**
 * Mongoose schema representing the modification history of a place.
 */
@Schema()
export class ModificationHistory {
  
  /**
   * The type of operation performed on the place.
   * Example: "add", "update", "delete".
   */
  @Prop({ required: true })
  operationType: string;

  /**
   * The unique identifier of the place associated with the modification.
   */
  @Prop({ required: true })
  plc_id: number;

  /**
   * The date and time when the modification occurred.
   * Defaults to the current timestamp.
   */
  @Prop({ type: Date, default: Date.now })
  modifiedAt: Date;
}

/**
 * Mongoose schema factory for the ModificationHistory class.
 */
export const ModificationHistorySchema = SchemaFactory.createForClass(ModificationHistory);
