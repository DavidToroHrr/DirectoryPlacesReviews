import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

/**
 * Type representing a hydrated document of the Review schema.
 */
export type ReviewDocument = HydratedDocument<Review>;

/**
 * Mongoose schema representing user reviews for a place.
 */
@Schema()
export class Review {

  /**
   * ID of the user who created the review.
   */
  @Prop({ required: true })
  userId: string;

  /**
   * ID of the place being reviewed.
   */
  @Prop({ required: true })
  placeId: string;

  /**
   * Text content of the review.
   */
  @Prop()
  comment: string;

  /**
   * Image attached to the review, stored in Base64 format.
   */
  @Prop()
  image?: string;

  /**
   * Rating given by the user (e.g., from 1 to 5 stars).
   */
  @Prop()
  rating: number;

  /**
   * Timestamp indicating when the review was created.
   */
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

/**
 * Mongoose schema factory for the Review class.
 */
export const ReviewSchema = SchemaFactory.createForClass(Review);
