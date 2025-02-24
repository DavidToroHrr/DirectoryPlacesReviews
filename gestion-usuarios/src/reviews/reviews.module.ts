import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    controllers: [],
    providers: [],
    imports: [
        MongooseModule.forFeature([
            { name: 'Review', schema: import('./schemas/review.schema')},
        ]),
    ],
})
export class ReviewsModule {}