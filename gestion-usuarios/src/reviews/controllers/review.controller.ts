import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ReviewsService } from '../services/review.service';
import { ReviewDto } from '../interfaces/review-dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}

  @Post()
  async createReview(@Body() review: ReviewDto) {
    return this.reviewsService.createReview(review);
  }

  @Get(':id')
  async getReviewWhitId(@Param('id') id: number) {
    return this.reviewsService.findReviewWhitId(id);
  }

  @Get()
  async getAllReviews() {
    return this.reviewsService.findAllReviews();
  }

  @Put(':id')
  async updateReview(@Param('id') id: number, @Body() review: ReviewDto) {
    return this.reviewsService.updateReview(id, review);
  }
  @Delete(':id')
  async removeReview(@Param('id') id: number) {
    return this.reviewsService.removeReview(id);
  }
}