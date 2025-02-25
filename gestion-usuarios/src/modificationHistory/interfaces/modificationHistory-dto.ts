/**
 * Data Transfer Object (DTO) for modification history.
 * Represents the structure of modification history data.
 */
export class ModificationHistoryDto {

  /**
   * The type of operation performed on the place.
   */
  operationType: string;

  /**
   * The unique identifier of the place associated with the modification.
   */
  plc_id: number;

  /**
   * The date and time when the modification was made.
   */
  modifiedAt: Date;
}
