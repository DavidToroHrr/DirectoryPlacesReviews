import { Injectable } from '@nestjs/common';
import { ModificationHistoryDto } from '../interfaces/modificationHistory-dto';
import { InjectModel } from '@nestjs/mongoose';
import { ModificationHistory, ModificationHistoryDocument } from '../schemas/modificationHistory.schema';
import { Model } from 'mongoose';

/**
 * Service responsible for handling modification history operations.
 */
@Injectable()
export class ModificationHistoryService {
  
  /**
   * Constructor that injects the Mongoose model for modification history.
   * @param ModificationModel - The Mongoose model for handling database operations related to modification history.
   */
  constructor(@InjectModel(ModificationHistory.name) private ModificationModel: Model<ModificationHistoryDocument>) {}

  /**
   * Creates a new modification record in the database.
   * @param Modification - The modification data transfer object (DTO) containing modification details.
   * @returns The newly created modification document.
   */
  async createModification(Modification: ModificationHistoryDto): Promise<ModificationHistoryDocument> {
    const newModification = await this.ModificationModel.create(Modification);
    return newModification;
  }

  /**
   * Finds a specific modification record by its ID.
   * @param id - The ID of the modification record to retrieve.
   * @returns The modification record if found, otherwise null.
   */
  async findModificationWhitId(id: number): Promise<ModificationHistoryDocument | null> {
    const modification = await this.ModificationModel.findById(id).exec();
    return modification;
  }

  /**
   * Retrieves all modification records from the database.
   * @returns An array of all stored modification records.
   */
  async findAllModifications(): Promise<ModificationHistoryDocument[]> {
    const modifications = await this.ModificationModel.find().exec();
    return modifications;
  }

  /**
   * Deletes a modification record by its ID.
   * @param id - The ID of the modification record to be deleted.
   * @returns The deleted modification record if found, otherwise null.
   */
  async removeModifications(id: number): Promise<ModificationHistoryDocument | null> {
    const removeModifications = await this.ModificationModel.findByIdAndDelete(id);
    return removeModifications;
  }
}
