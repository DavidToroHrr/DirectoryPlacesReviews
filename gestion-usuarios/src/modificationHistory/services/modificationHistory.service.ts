import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModificationHistory, ModificationHistoryDocument } from '../schemas/modificationHistory.schema';
import { Model } from 'mongoose';
import { ModificationHistoryDto } from '../interfaces/modificationHistory-dto';

/**
 * Service responsible for handling modification history operations.
 */
@Injectable()
export class ModificationHistoryService {
  
  /**
   * Constructor that injects the Mongoose model for modification history.
   * @param modificationModel - The Mongoose model for handling database operations related to modification history.
   */
  constructor(@InjectModel(ModificationHistory.name) private modificationModel: Model<ModificationHistoryDocument>) {}

  /**
   * Creates a new modification record in the database.
   * @param modification - The modification data transfer object (DTO) containing modification details.
   * @returns The newly created modification document.
   */
  async createModification(modification: ModificationHistoryDto): Promise<ModificationHistoryDocument> {
    const newModification = await this.modificationModel.create(modification);
    return newModification;
  }

  /**
   * Finds a specific modification record by its ID.
   * @param id - The ID of the modification record to retrieve.
   * @returns The modification record if found, otherwise null.
   */
  async findModificationById(id: string): Promise<ModificationHistoryDocument | null> {
    return this.modificationModel.findById(id).exec();
  }

  /**
   * Retrieves all modification records from the database.
   * @returns An array of all stored modification records.
   */
  async findAllModifications(): Promise<ModificationHistoryDocument[]> {
    return this.modificationModel.find().exec();
  }

  /**
   * Deletes a modification record by its ID.
   * @param id - The ID of the modification record to be deleted.
   * @returns The deleted modification record if found, otherwise null.
   */
  async removeModification(id: string): Promise<ModificationHistoryDocument | null> {
    return this.modificationModel.findByIdAndDelete(id);
  }
}
