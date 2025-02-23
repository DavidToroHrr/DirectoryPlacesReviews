export class QuestionsAndAnswersDto{
    place_id: number;
    question: {
      user_id: number;
      text: string;
      createdAt: Date;
    };
    answer: {
      user_id: number;
      text: string;
      createdAt: Date;
    };
  }