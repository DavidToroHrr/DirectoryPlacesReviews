export class ReviewDto {
    userId: string;
    placeId: string;
    comment: string;
    media: {type: string; url: string}[];
    rating: number;
    createAt: Date;
}