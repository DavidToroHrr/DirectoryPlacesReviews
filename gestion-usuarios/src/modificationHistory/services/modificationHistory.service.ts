import { Injectable } from '@nestjs/common';
import { ModificationHistoryDto } from '../interfaces/modificationHistory-dto';
import { InjectModel } from '@nestjs/mongoose';
import { ModificationHistory, ModificationHistoryDocument } from '../schemas/modificationHistory.schema';
import { Model } from 'mongoose';

@Injectable()
export class ModificationHistoryService {
  constructor(@InjectModel('Modification History') private ModificationModel: Model<ModificationHistoryDocument>) {}

  async createModification(Modification: ModificationHistoryDto): Promise<ModificationHistoryDocument> {
    const newModification = await this.ModificationModel.create(Modification);
    return newModification;
  }

  async findModificationWhitId(id: number): Promise<ModificationHistoryDocument | null> {
    const modification = await this.ModificationModel.findById(id).exec();
    return modification;
  }

  async findAllModifications(): Promise<ModificationHistoryDocument[]> {
    const modifications = await this.ModificationModel.find().exec();
    return modifications;
  }

  async removeModifications(id: number): Promise<ModificationHistoryDocument | null> {
    const removeModifications = await this.ModificationModel.findByIdAndDelete(id);
    return removeModifications;
  }
}