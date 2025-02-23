import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ReviewsController } from "./controllers/review.controller";
import { QuestionsAndAnswersController } from "./controllers/questionsAndAnswers.controller";
import { ReviewsService } from "./services/review.service";
import { QuestionsAndAnswersService } from "./services/questionsAndAnswers.service";

@Module({
    controllers: [ReviewsController, QuestionsAndAnswersController],
    providers: [ReviewsService, QuestionsAndAnswersService],
    imports: [
        MongooseModule.forFeature([
            { name: 'Review', schema: import('./schemas/review.schema')},
            { name: 'Questions and answers', schema: import('./schemas/questionsAndAnswers.schema')}
        ]),
    ],
})
export class ReviewsModule {}