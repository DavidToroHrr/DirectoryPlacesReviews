import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Review, ReviewDocument } from '../schemas/review.schema';
import { Model } from 'mongoose';
import { CreateReviewDto } from '../interfaces/review-dto';

/**
 * Service responsible for handling review-related operations.
 */
@Injectable()
export class ReviewsService {
  constructor(
    /**
     * Injects the Mongoose model for the `Review` schema.
     */
    @InjectModel(Review.name) 
    private reviewModel: Model<ReviewDocument>
  ) {}

  /**
   * Creates and saves a new review in the database, storing the image as Base64.
   * @param review DTO containing review details.
   * @returns The newly created Review document.
   */
  async createReview(review: CreateReviewDto): Promise<ReviewDocument> {
    const newReview = await this.reviewModel.create(review);
    return newReview;
  }

  /**
   * Retrieves a review by its ID.
   * @param id The ID of the review.
   * @returns The review document if found, otherwise null.
   */
  async getReviewById(id: string): Promise<ReviewDocument | null> {
    return this.reviewModel.findById(id).exec();
  }

  /**
   * Deletes a review by its ID.
   * @param id The ID of the review to delete.
   * @returns The deleted review document or null if not found.
   */
  async removeReview(id: string): Promise<ReviewDocument | null> {
    return this.reviewModel.findByIdAndDelete(id);
  }
}
