/**
 * Data Transfer Object (DTO) for Reviews related to a place
 */
export class ReviewDto {
    
    /** 
     * ID of the user who wrote the review 
     */
    userId: string;

    /** 
     * ID of the place being reviewed 
     */
    placeId: string;

    /** 
     * User's comment about the place 
     */
    comment: string;

    /** 
     * Array of media files (images, videos) attached to the review 
     */
    media: {
        /** Type of media (e.g., image, video) */
        type: string;

        /** URL of the media file */
        url: string;
    }[];

    /** 
     * Rating given to the place (e.g., from 1 to 5) 
     */
    rating: number;

    /** 
     * Timestamp indicating when the review was created 
     */
    createAt: Date;
}
