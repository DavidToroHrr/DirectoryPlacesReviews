import { Injectable } from '@nestjs/common';
import { ReviewDto } from '../interfaces/review-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Review, ReviewDocument } from '../schemas/review.schema';
import { Model } from 'mongoose';

/**
 * Service responsible for handling Review-related operations.
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
   * Creates and saves a new review in the database.
   * @param review DTO containing review details.
   * @returns The newly created Review document.
   */
  async createReview(review: ReviewDto): Promise<ReviewDocument> {
    const newReview = await this.reviewModel.create(review);
    return newReview;
  }

  /**
   * Finds a specific review by its ID.
   * @param id The ID of the review.
   * @returns The corresponding Review document or `null` if not found.
   */
  async findReviewWhitId(id: number): Promise<ReviewDocument | null> {
    const review = await this.reviewModel.findById(id).exec();
    return review;
  }

  /**
   * Retrieves all reviews from the database.
   * @returns An array of all stored Review documents.
   */
  async findAllReviews(): Promise<ReviewDocument[]> {
    const reviews = await this.reviewModel.find().exec();
    return reviews;
  }

  /**
   * Updates an existing review with new data.
   * @param id The ID of the review to update.
   * @param review DTO containing the updated data.
   * @returns The updated Review document or `null` if not found.
   */
  async updateReview(id: number, review: ReviewDto): Promise<ReviewDocument | null> {
    const updatedReview = await this.reviewModel.findByIdAndUpdate(id, review, {
      new: true, // Returns the updated document instead of the old one
    });
    return updatedReview;
  }

  /**
   * Deletes a review by its ID.
   * @param id The ID of the review to delete.
   * @returns The deleted Review document or `null` if not found.
   */
  async removeReview(id: number): Promise<ReviewDocument | null> {
    const deletedReview = await this.reviewModel.findByIdAndDelete(id);
    return deletedReview;
  }
}
