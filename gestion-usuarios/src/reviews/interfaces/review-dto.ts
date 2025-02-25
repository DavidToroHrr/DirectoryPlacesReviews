/**
 * Data Transfer Object (DTO) for creating a review.
 */
export class CreateReviewDto {
    /**
     * ID of the user who wrote the review.
     */
    userId: string;

    /**
     * ID of the place being reviewed.
     */
    placeId: string;

    /**
     * User's comment about the place.
     */
    comment: string;

    /**
     * Base64-encoded image attached to the review.
     */
    image?: string;

    /**
     * Rating given to the place (e.g., from 1 to 5).
     */
    rating: number;
}
