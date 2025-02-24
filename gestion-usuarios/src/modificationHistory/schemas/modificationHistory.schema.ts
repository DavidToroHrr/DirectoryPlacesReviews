import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

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
   * The unique identifier of the place associated with the modification.
   */
  @Prop()
  placeId: number;

  /**
   * An array of modifications applied to a place.
   * Each modification includes details about the changed field, previous value, new value, and modification timestamp.
   */
  @Prop({
    type: [
      {
        /**
         * The name of the field that was modified.
         */
        field: { type: String, required: true },

        /**
         * The original value of the modified field.
         */
        oldValue: { type: String, required: true },

        /**
         * The updated value of the modified field.
         */
        newValue: { type: String, required: true },

        /**
         * The date and time when the modification occurred.
         * Defaults to the current timestamp.
         */
        modifiedAt: { type: Date, default: Date.now },
      }
    ],
    default: [],
  })
  modifications: {
    field: string;
    oldValue: string;
    newValue: string;
    modifiedAt: Date;
  }[];
}

/**
 * Mongoose schema factory for the ModificationHistory class.
 */
export const ModificationHistorySchema = SchemaFactory.createForClass(ModificationHistory);
