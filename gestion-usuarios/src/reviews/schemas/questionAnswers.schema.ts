import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

/** 
 * Mongoose document type for the QuestionAnswer schema 
 */
export type QuestionAnswerDocument = HydratedDocument<QuestionAnswer>;

/**
 * Schema representing questions and answers related to a place
 */
@Schema()
export class QuestionAnswer {

  /** 
   * ID of the place associated with the question and answer 
   */
  @Prop()
  place_id: number;

  /**
   * Question asked about the place
   * - `user_id`: ID of the user who asked the question
   * - `text`: Content of the question
   * - `createdAt`: Timestamp when the question was created
   */
  @Prop({
    type: [
      {
        user_id: { type: Number },
        text: { type: String },
        createdAt: { type: Date },
      },
    ],
    default: [],
  })
  question: {
    user_id: number;
    text: string;
    createdAt: Date;
  };

  /**
   * Answer provided for the question
   * - `user_id`: ID of the user who provided the answer
   * - `text`: Content of the answer
   * - `createdAt`: Timestamp when the answer was created
   */
  @Prop({
    type: [
      {
        user_id: { type: Number },
        text: { type: String },
        createdAt: { type: Date },
      },
    ],
    default: [],
  })
  answer: {
    user_id: number;
    text: string;
    createdAt: Date;
  };
}

/**
 * Mongoose schema factory for the QuestionAnswer class
 */
export const QuestionAnswerSchema = SchemaFactory.createForClass(QuestionAnswer);
