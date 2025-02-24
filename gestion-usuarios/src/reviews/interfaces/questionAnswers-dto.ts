/**
 * Data Transfer Object (DTO) for Questions and Answers related to a place
 */
export class QuestionsAnswersDto {
    
  /** 
   * ID of the place the question or answer is related to 
   */
  place_id: number;

  /**
   * Details of the question asked about the place
   */
  question: {
      /** ID of the user who asked the question */
      user_id: number;

      /** The content of the question */
      text: string;

      /** Timestamp indicating when the question was created */
      createdAt: Date;
  };

  /**
   * Details of the answer given to the question
   */
  answer: {
      /** ID of the user who provided the answer */
      user_id: number;

      /** The content of the answer */
      text: string;

      /** Timestamp indicating when the answer was created */
      createdAt: Date;
  };
}
