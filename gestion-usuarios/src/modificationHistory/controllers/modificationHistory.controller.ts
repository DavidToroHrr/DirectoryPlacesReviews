import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ModificationHistoryService } from '../services/modificationHistory.service';
import { ModificationHistoryDto } from '../interfaces/modificationHistory-dto';

/**
 * Controller for handling modification history-related requests.
 */
@Controller('modification-history')
export class ModificationHistoryController {
  
  /**
   * Constructor that injects the ModificationHistoryService.
   * @param modificationHistoryService - The service responsible for handling modification history operations.
   */
  constructor(private readonly modificationHistoryService: ModificationHistoryService) {}

  /**
   * Creates a new modification record.
   * @param modification - The modification data transfer object (DTO) containing modification details.
   * @returns The newly created modification record.
   */
  @Post()
  async createModification(@Body() modification: ModificationHistoryDto) {
    return this.modificationHistoryService.createModification(modification);
  }

  /**
   * Retrieves all modification records.
   * @returns A list of all stored modification records.
   */
  @Get()
  async getAllModifications() {
    return this.modificationHistoryService.findAllModifications();
  }

  /**
   * Retrieves a specific modification record by its ID.
   * @param id - The ID of the modification record to be retrieved.
   * @returns The modification record corresponding to the given ID.
   */
  @Get(':id')
  async getModificationById(@Param('id') id: string) {
    return this.modificationHistoryService.findModificationById(id);
  }

  /**
   * Deletes a modification record by its ID.
   * @param id - The ID of the modification record to be deleted.
   * @returns A response indicating the result of the deletion.
   */
  @Delete(':id')
  async removeModification(@Param('id') id: string) {
    return this.modificationHistoryService.removeModification(id);
  }
}
