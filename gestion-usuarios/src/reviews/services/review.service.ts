import { Injectable } from '@nestjs/common';
import { ReviewDto } from '../interfaces/review-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Review, ReviewDocument } from '../schemas/review.schema';
import { Model } from 'mongoose';

@Injectable()
export class ReviewsService {
  constructor(@InjectModel('Review') private reviewModel: Model<ReviewDocument>) {}

  async createReview(review: ReviewDto): Promise<ReviewDocument> {
    const newReview = await this.reviewModel.create(review);
    return newReview;
  }

  async findReviewWhitId(id: number): Promise<ReviewDocument | null> {
    const review = await this.reviewModel.findById(id).exec();
    return review;
  }

  async findAllReviews(): Promise<ReviewDocument[]> {
    const reviews = await this.reviewModel.find().exec();
    return reviews;
  }

  async updateReview(id: number, review: ReviewDto): Promise<ReviewDocument | null> {
    const updatedReview = await this.reviewModel.findByIdAndUpdate(id, review, {
      new: true,
    });
    return updatedReview;
  }

  async removeReview(id: number): Promise<ReviewDocument | null> {
    const deletedReview = await this.reviewModel.findByIdAndDelete(id);
    return deletedReview;
  }
}