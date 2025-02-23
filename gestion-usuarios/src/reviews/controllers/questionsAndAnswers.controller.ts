import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { QuestionsAndAnswersService } from '../services/questionsAndAnswers.service';
import { QuestionsAndAnswersDto } from '../interfaces/questionsAndAnswers-dto';

@Controller('questions-answers')
export class QuestionsAndAnswersController {
  constructor(private questionsAndAnswersService: QuestionsAndAnswersService) {}

  @Post()
  async createQuestionsAndAnswers(@Body() questionAnswer: QuestionsAndAnswersDto) {
    return this.questionsAndAnswersService.createQuestionsAndAnswers(questionAnswer);
  }

  @Get()
  async getAllQuestionsAndAnswers() {
    return this.questionsAndAnswersService.findAllQuestionsAndAnswers();
  }

  @Get(':id')
  async getQuestionsAndAnswersWhitId(@Param('id') id: number) {
    return this.questionsAndAnswersService.findQuestionsAndAnswersWhitId(id);
  }

  @Put(':id')
  async updateQuestionsAndAnswers(@Param('id') id: number, @Body() questionAnswer: QuestionsAndAnswersDto) {
    return this.questionsAndAnswersService.updateQuestionsAndAnswers(id, questionAnswer);
  }
  @Delete(':id')
  async removeQuestionsAndAnswers(@Param('id') id: number) {
    return this.questionsAndAnswersService.removeQuestionsAndAnswers(id);
  }
}