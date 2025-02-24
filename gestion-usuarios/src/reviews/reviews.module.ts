import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ReviewsController } from "./controllers/review.controller";
import { QuestionsAnswersController } from "./controllers/questionsAnswers.controller";
import { ReviewsService } from "./services/review.service";
import { QuestionsAnswersService } from "./services/questionAnswers.service";
import { Review, ReviewSchema } from "./schemas/review.schema"; 
import { QuestionAnswer, QuestionAnswerSchema } from "./schemas/questionAnswers.schema"; 

@Module({
    controllers: [ReviewsController, QuestionsAnswersController],
    providers: [ReviewsService, QuestionsAnswersService],
    imports: [
        MongooseModule.forFeature([
            { 
                name: Review.name, schema: ReviewSchema
            },
            { 
                name: QuestionAnswer.name, schema: QuestionAnswerSchema
            }
        ]),
    ],
})
export class ReviewsModule {}