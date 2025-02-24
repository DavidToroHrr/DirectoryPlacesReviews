import { Injectable } from '@nestjs/common';
import { QuestionsAnswersDto } from '../interfaces/questionAnswers-dto';
import { InjectModel } from '@nestjs/mongoose';
import { QuestionAnswer, QuestionAnswerDocument } from '../schemas/questionAnswers.schema';
import { Model } from 'mongoose';

/**
 * Service handling operations related to Questions and Answers
 */
@Injectable()
export class QuestionsAnswersService {
  constructor(
    /**
     * Injects the Mongoose model for the `QuestionAnswer` schema.
     */
    @InjectModel(QuestionAnswer.name) 
    private questionAnswerModel: Model<QuestionAnswerDocument>
  ) {}

  /**
   * Creates and saves a new question-answer entry in the database.
   * @param questionAnswer Data Transfer Object containing question and answer details.
   * @returns The newly created QuestionAnswer document.
   */
  async saveQuestionsAnswers(questionAnswer: QuestionsAnswersDto): Promise<QuestionAnswerDocument> {
    const newQuestionAnswer = await this.questionAnswerModel.create(questionAnswer);
    return newQuestionAnswer;
  }

  /**
   * Retrieves all question-answer entries from the database.
   * @returns An array of all stored QuestionAnswer documents.
   */
  async findAllQuestionsAnswers(): Promise<QuestionAnswerDocument[]> {
    const questionAnswers = await this.questionAnswerModel.find().exec();
    return questionAnswers;
  }

  /**
   * Finds a specific question-answer entry by its ID.
   * @param id The ID of the question-answer entry.
   * @returns The corresponding QuestionAnswer document or `null` if not found.
   */
  async findQuestionsAnswersById(id: number): Promise<QuestionAnswerDocument | null> {
    const questionAnswer = await this.questionAnswerModel.findById(id).exec();
    return questionAnswer;
  }

  /**
   * Updates an existing question-answer entry with new data.
   * @param id The ID of the entry to update.
   * @param questionAnswer DTO containing the updated data.
   * @returns The updated QuestionAnswer document or `null` if not found.
   */
  async updateQuestionsAnswers(id: number, questionAnswer: QuestionsAnswersDto): Promise<QuestionAnswerDocument | null> {
    const updatedQuestionAnswer = await this.questionAnswerModel.findByIdAndUpdate(id, questionAnswer, {
      new: true, // Returns the updated document instead of the old one
    });
    return updatedQuestionAnswer;
  }

  /**
   * Deletes a question-answer entry by its ID.
   * @param id The ID of the entry to delete.
   * @returns The deleted QuestionAnswer document or `null` if not found.
   */
  async deleteQuestionsAnswers(id: number): Promise<QuestionAnswerDocument | null> {
    const deletedQuestionAnswer = await this.questionAnswerModel.findByIdAndDelete(id);
    return deletedQuestionAnswer;
  }
}
