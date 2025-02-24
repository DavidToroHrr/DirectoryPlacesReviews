import { Injectable } from '@nestjs/common';
import { QuestionsAnswersDto } from '../interfaces/questionAnswers-dto';
import { InjectModel } from '@nestjs/mongoose';
import {QuestionAnswer, QuestionAnswerDocument } from '../schemas/questionAnswers.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuestionsAnswersService {
  constructor(@InjectModel(QuestionAnswer.name) private questionAnswerModel: Model<QuestionAnswerDocument>) {}

  async saveQuestionsAnswers(questionAnswer: QuestionsAnswersDto): Promise<QuestionAnswerDocument> {
    const newQuestionAnswer = await this.questionAnswerModel.create(questionAnswer);
    return newQuestionAnswer;
  }

  async findAllQuestionsAnswers(): Promise<QuestionAnswerDocument[]> {
    const questionAnswers = await this.questionAnswerModel.find().exec();
    return questionAnswers;
  }

  async findQuestionsAnswersById(id: number): Promise<QuestionAnswerDocument | null> {
    const questionAnswer = await this.questionAnswerModel.findById(id).exec();
    return questionAnswer;
  }

  async updateQuestionsAnswers(id: number, questionAnswer: QuestionsAnswersDto): Promise<QuestionAnswerDocument | null> {
    const updatedQuestionAnswer = await this.questionAnswerModel.findByIdAndUpdate(id, questionAnswer, {
      new: true,
    });
    return updatedQuestionAnswer;
  }

  async deleteQuestionsAnswers(id: number): Promise<QuestionAnswerDocument | null> {
    const deletedQuestionAnswer = await this.questionAnswerModel.findByIdAndDelete(id);
    return deletedQuestionAnswer;
  }
}