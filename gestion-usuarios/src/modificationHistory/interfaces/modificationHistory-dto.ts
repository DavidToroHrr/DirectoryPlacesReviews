export class ModificationHistoryDto {
    placeId: number;
    
    modifications: {
      field: string;
      oldValue: string;
      newValue: string;
      modifiedAt: Date;
    }[];
  }