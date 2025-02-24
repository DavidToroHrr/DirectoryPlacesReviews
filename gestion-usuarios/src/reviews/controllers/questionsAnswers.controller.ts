import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { QuestionsAnswersService } from '../services/questionAnswers.service';
import { QuestionsAnswersDto } from '../interfaces/questionAnswers-dto';

@Controller('questions-answers') // Defines the controller for managing question-answer entries
export class QuestionsAnswersController {
  
  constructor(
    // Injecting the service to handle business logic for questions and answers
    private questionsAnswersService: QuestionsAnswersService
  ) {}

  /**
   * Creates a new question-answer entry
   * @param questionAnswer DTO containing question-answer details
   * @returns The newly created question-answer entry
   */
  @Post()
  async createQuestionsAnswers(@Body() questionAnswer: QuestionsAnswersDto) {
    console.log(questionAnswer); // Logs the request body for debugging
    return this.questionsAnswersService.saveQuestionsAnswers(questionAnswer);
  }

  /**
   * Retrieves all question-answer entries from the database
   * @returns An array of all question-answer entries
   */
  @Get()
  async getAllQuestionsAnswers() {
    return this.questionsAnswersService.findAllQuestionsAnswers();
  }

  /**
   * Retrieves a specific question-answer entry by its ID
   * @param id The ID of the question-answer entry
   * @returns The requested question-answer entry
   */
  @Get(':id')
  async getQuestionsAnswersById(@Param('id') id: number) {
    return this.questionsAnswersService.findQuestionsAnswersById(id);
  }

  /**
   * Updates an existing question-answer entry by its ID
   * @param id The ID of the question-answer entry to update
   * @param questionAnswer DTO containing updated question-answer details
   * @returns The updated question-answer entry
   */
  @Put(':id')
  async updateQuestionsAnswers(@Param('id') id: number, @Body() questionAnswer: QuestionsAnswersDto) {
    return this.questionsAnswersService.updateQuestionsAnswers(id, questionAnswer);
  }

  /**
   * Deletes a question-answer entry by its ID
   * @param id The ID of the question-answer entry to delete
   * @returns A confirmation message or response
   */
  @Delete(':id')
  async deleteQuestionsAnswers(@Param('id') id: number) {
    return this.questionsAnswersService.deleteQuestionsAnswers(id);
  }
}
