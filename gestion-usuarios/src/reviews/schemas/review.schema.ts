import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

/** 
 * Mongoose document type for the Review schema 
 */
export type ReviewDocument = HydratedDocument<Review>;

/**
 * Schema representing user reviews for a place
 */
@Schema()
export class Review {

  /** 
   * ID of the user who created the review 
   */
  @Prop()
  userId: string;

  /** 
   * ID of the place being reviewed 
   */
  @Prop()
  placeId: string;

  /** 
   * Text content of the review 
   */
  @Prop()
  comment: string;

  /**
   * Media attachments included in the review
   * - `type`: Defines the media type (`image` or `video`)
   * - `url`: URL pointing to the media resource
   */
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

  /** 
   * Rating given by the user (e.g., from 1 to 5 stars) 
   */
  @Prop()
  rating: number;

  /** 
   * Timestamp indicating when the review was created 
   */
  @Prop()
  createdAt: Date;
}

/**
 * Mongoose schema factory for the Review class
 */
export const ReviewSchema = SchemaFactory.createForClass(Review);
