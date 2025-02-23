import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ModificationHistoryService } from '../services/modificationHistory.service';
import { ModificationHistoryDto } from '../interfaces/modificationHistory-dto';

@Controller('modification-history')
export class ModificationHistoryController {
  constructor(private readonly modificationHistoryService: ModificationHistoryService) {}

  @Post()
  async createModification(@Body() modification: ModificationHistoryDto) {
    return this.modificationHistoryService.createModification(modification);
  }

  @Get()
  async getAllModifications() {
    return this.modificationHistoryService.findAllModifications();
  }

  @Get(':id')
  async getModificationWhitId(@Param('id') id: number) {
    return this.modificationHistoryService.findModificationWhitId(id);
  }

  @Delete(':id')
  async removeModification(@Param('id') id: number) {
    return this.modificationHistoryService.removeModifications(id);
  }
}
