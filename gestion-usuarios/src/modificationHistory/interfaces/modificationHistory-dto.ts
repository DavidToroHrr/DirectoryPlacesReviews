/**
 * Data Transfer Object (DTO) for modification history.
 * Represents the structure of modification history data.
 */
export class ModificationHistoryDto {
  
  /**
   * The unique identifier of the place associated with the modification.
   */
  placeId: number;
  
  /**
   * An array of modifications made to a place.
   * Each modification contains details about the field changed, previous value, new value, and modification timestamp.
   */
  modifications: {
    /**
     * The name of the field that was modified.
     */
    field: string;

    /**
     * The original value of the modified field.
     */
    oldValue: string;

    /**
     * The updated value of the modified field.
     */
    newValue: string;

    /**
     * The date and time when the modification was made.
     */
    modifiedAt: Date;
  }[];
}
