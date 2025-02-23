import { Injectable } from '@nestjs/common';
import { QuestionsAndAnswersDto } from '../interfaces/questionsAndAnswers-dto';
import { InjectModel } from '@nestjs/mongoose';
import { QuestionAndAnswer, QuestionAnswerDocument } from '../schemas/questionsAndAnswers.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuestionsAndAnswersService {
  constructor(@InjectModel('QuestionAnswer') private questionAnswerModel: Model<QuestionAnswerDocument>) {}

  async createQuestionsAndAnswers(questionAnswer: QuestionsAndAnswersDto): Promise<QuestionAnswerDocument> {
    const newQuestionAndAnswer = await this.questionAnswerModel.create(questionAnswer);
    return newQuestionAndAnswer;
  }

  async findQuestionsAndAnswersWhitId(id: number): Promise<QuestionAnswerDocument | null> {
    const questionAndAnswer = await this.questionAnswerModel.findById(id).exec();
    return questionAndAnswer;
  }

  async findAllQuestionsAndAnswers(): Promise<QuestionAnswerDocument[]> {
    const questionAndAnswers = await this.questionAnswerModel.find().exec();
    return questionAndAnswers;
  }

  async updateQuestionsAndAnswers(id: number, questionAnswer: QuestionsAndAnswersDto): Promise<QuestionAnswerDocument | null> {
    const updatedQuestionAndAnswer = await this.questionAnswerModel.findByIdAndUpdate(id, questionAnswer, {
      new: true,
    });
    return updatedQuestionAndAnswer;
  }

  async removeQuestionsAndAnswers(id: number): Promise<QuestionAnswerDocument | null> {
    const deletedQuestionAndAnswer = await this.questionAnswerModel.findByIdAndDelete(id);
    return deletedQuestionAndAnswer;
  }
}