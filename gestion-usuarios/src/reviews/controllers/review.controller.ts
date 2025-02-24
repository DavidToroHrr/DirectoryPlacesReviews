import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ReviewsService } from '../services/review.service';
import { ReviewDto } from '../interfaces/review-dto';

@Controller('reviews') // Defines the controller for managing reviews
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}
    // Injecting the service to handle review-related business logic

  /**
   * Creates a new review entry
   * @param review DTO containing review details
   * @returns The newly created review
   */
  @Post()
  async createReview(@Body() review: ReviewDto) {
    return this.reviewsService.createReview(review);
  }

  /**
   * Retrieves a specific review by its ID
   * @param id The ID of the review
   * @returns The requested review
   */
  @Get(':id')
  async getReviewWhitId(@Param('id') id: number) {
    return this.reviewsService.findReviewWhitId(id);
  }


  /**
   * Retrieves all reviews from the database
   * @returns An array of all reviews
   */
  @Get()
  async getAllReviews() {
    return this.reviewsService.findAllReviews();
  }

    /**
   * Updates an existing review by its ID
   * @param id The ID of the review to update
   * @param review DTO containing updated review details
   * @returns The updated review
   */
  @Put(':id')
  async updateReview(@Param('id') id: number, @Body() review: ReviewDto) {
    return this.reviewsService.updateReview(id, review);
  }

    /**
   * Deletes a review by its ID
   * @param id The ID of the review to delete
   * @returns A confirmation message or response
   */
  @Delete(':id')
  async removeReview(@Param('id') id: number) {
    return this.reviewsService.removeReview(id);
  }
}