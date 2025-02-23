import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review {

  @Prop()
  userId: string;

  @Prop()
  placeId: string;

  @Prop()
  comment: string;

  @Prop({
    type: [
        {
          type: { type: String, enum: ['image', 'video'], required: true },
          url: { type: String, required: true }
        }
      ],
      default: [],  
  })
  media: { type: string; url: string }[];

  @Prop()
  rating: number;

  @Prop()
  createdAt: Date;
}
export const ReviewSchema = SchemaFactory.createForClass(Review);