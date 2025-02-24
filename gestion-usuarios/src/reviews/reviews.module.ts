import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ReviewsController } from "./controllers/review.controller";
import { QuestionsAnswersController } from "./controllers/questionsAnswers.controller";
import { ReviewsService } from "./services/review.service";
import { QuestionsAnswersService } from "./services/questionAnswers.service";
import { Review, ReviewSchema } from "./schemas/review.schema"; 
import { QuestionAnswer, QuestionAnswerSchema } from "./schemas/questionAnswers.schema"; 

/**
 * ReviewsModule is responsible for handling reviews and Q&A operations.
 * It registers controllers, services, and database schemas.
 */
@Module({
    /**
     * Registers controllers that handle incoming HTTP requests for Reviews and Questions & Answers.
     */
    controllers: [ReviewsController, QuestionsAnswersController],

    /**
     * Registers services that contain business logic for Reviews and Questions & Answers.
     */
    providers: [ReviewsService, QuestionsAnswersService],

    /**
     * Imports Mongoose schemas to enable interaction with the database.
     * - `Review` schema is used for storing user reviews.
     * - `QuestionAnswer` schema is used for managing user questions and answers.
     */
    imports: [
        MongooseModule.forFeature([
            { name: Review.name, schema: ReviewSchema },
            { name: QuestionAnswer.name, schema: QuestionAnswerSchema }
        ]),
    ],
})
export class ReviewsModule {}
