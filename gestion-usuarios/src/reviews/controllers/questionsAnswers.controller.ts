import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { QuestionsAnswersService } from '../services/questionAnswers.service';
import { QuestionsAnswersDto } from '../interfaces/questionAnswers-dto';

@Controller('questions-answers')
export class QuestionsAnswersController {
  constructor(private questionsAnswersService: QuestionsAnswersService) {}

  @Post()
  async createQuestionsAnswers(@Body() questionAnswer: QuestionsAnswersDto) {
    console.log(questionAnswer);
    return this.questionsAnswersService.saveQuestionsAnswers(questionAnswer);
  }

  @Get()
  async getAllQuestionsAnswers() {
    return this.questionsAnswersService.findAllQuestionsAnswers();
  }

  @Get(':id')
  async getQuestionsAnswersById(@Param('id') id: number) {
    return this.questionsAnswersService.findQuestionsAnswersById(id);
  }

  @Put(':id')
  async updateQuestionsAnswers(@Param('id') id: number, @Body() questionAnswer: QuestionsAnswersDto) {
    return this.questionsAnswersService.updateQuestionsAnswers(id, questionAnswer);
  }
  @Delete(':id')
  async deleteQuestionsAnswers(@Param('id') id: number) {
    return this.questionsAnswersService.deleteQuestionsAnswers(id);
  }
}