import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type QuestionAnswerDocument = HydratedDocument<QuestionAnswer>;

@Schema()
export class QuestionAnswer {
  @Prop()
  place_id: number;
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
    user_id: number,
    text: string,
    createdAt: Date,
  };
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
    user_id: number,
    text: string,
    createdAt: Date,
  };
}
export const QuestionAnswerSchema =
  SchemaFactory.createForClass(QuestionAnswer);