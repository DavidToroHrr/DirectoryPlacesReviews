import { Express } from 'express';
import { Controller, Post, Body, Get, UseInterceptors, UploadedFile, Param, Delete } from '@nestjs/common';
import { ReviewsService } from '../services/review.service';
import { CreateReviewDto } from '../interfaces/review-dto';
import { FileInterceptor } from '@nestjs/platform-express';

/**
 * Controller responsible for handling review-related HTTP requests.
 */
@Controller('reviews')
export class ReviewsController {
    
    /**
     * Constructor that injects the reviews service.
     * @param reviewsService - The service handling business logic for review operations.
     */
    constructor(private reviewsService: ReviewsService) {}

    /**
     * Endpoint to create a new review with an image.
     * Uses an interceptor to handle file uploads.
     * @param file - The uploaded image file.
     * @param newReview - The data transfer object (DTO) containing review details.
     * @returns The newly created review entry.
     */


    // @Post()
    // async createReview(){
    //   return "holamundo"
    // }
    // @Post()
    // @UseInterceptors(FileInterceptor('image')) // Interceptor para recibir la imagen
    // async createReview(
    //     @UploadedFile() file: Express.Multer.File,
    //     @Body() newReview: CreateReviewDto
    // ) {
    //     if (!file) {
    //         return { message: 'No image was uploaded' };
    //     }

    //     // 🔹 Convertir la imagen a Base64 sin compresión
    //     const base64Image = file.buffer.toString('base64');

    //     return this.reviewsService.createReview({
    //         ...newReview,
    //         image: base64Image, // 🔹 Almacenar la imagen en Base64
    //     });
    // }}

    @Post()
    @UseInterceptors(FileInterceptor('image')) // Interceptor para recibir la imagen
    async createReview(
        @UploadedFile() file,
        @Body() newReview: CreateReviewDto
    ) {
        if (!file) {
            return { message: 'No image was uploaded' };
        }

        // 🔹 Convertir la imagen a Base64 sin compresión
        const base64Image = file.buffer.toString('base64');

        return this.reviewsService.createReview({
            ...newReview,
            image: base64Image, // 🔹 Almacenar la imagen en Base64
        });
    }



    /**
     * Endpoint to retrieve a review by its ID.
     * @param id - The ID of the review record.
     * @returns The review record containing the image and metadata.
     */

    @Get()
    async getAllReviews() {
        const reviews = await this.reviewsService.findAllReviews();
        return reviews.map(review => ({
            id: review.id,
            userId: review.userId,
            placeId: review.placeId,
            comment: review.comment,
            rating: review.rating,
            createdAt: review.createdAt,
            // image: `data:image/jpeg;base64,${review.image}`, // 🔹 Formato Base64 para frontend
        }));
    }
    @Get(':id')
    async getReview(@Param('id') id: string) {
        const review = await this.reviewsService.getReviewById(id);
        if (!review) {
            return { message: 'Review not found' };
        }

        return {
            id: review.id,
            userId: review.userId,
            placeId: review.placeId,
            comment: review.comment,
            rating: review.rating,
            createdAt: review.createdAt,
            image: `data:image/jpeg;base64,${review.image}`, // 🔹 Formato Base64 para frontend
        };
    }

    /**
     * Deletes a review by its ID.
     * @param id - The ID of the review to delete.
     * @returns A confirmation message or response.
     */
    @Delete(':id')
    async removeReview(@Param('id') id: string) {
        return this.reviewsService.removeReview(id);
    }
}
