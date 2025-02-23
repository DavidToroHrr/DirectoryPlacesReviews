import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ModificationHistoryDocument = HydratedDocument<ModificationHistory>;

@Schema()
export class ModificationHistory {
  
  @Prop()
  placeId: number;

  @Prop({
    type: [
      {
        field: { type: String, required: true },
        oldValue: { type: String, required: true },
        newValue: { type: String, required: true },
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

export const ModificationHistorySchema = SchemaFactory.createForClass(ModificationHistory);