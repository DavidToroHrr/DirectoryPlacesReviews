import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';

import { PlaceTags } from '../entities/place-tags.entity';
import { CreatePlaceTags } from '../dto/create-place-tags';

@Injectable()
export class PlaceTagsService {
    constructor(
        // Injecting the repository for the PlaceTags entity
        @InjectRepository(PlaceTags) private placeTagsRepository: Repository<PlaceTags>
    ) {}

    /**
     * Creates a new relationship between a place and a tag
     * @param createPlaceTagsDto DTO containing place and tag IDs
     * @returns The newly created relationship saved in the database
     */
    async createPlaceTags(createPlaceTagsDto: CreatePlaceTags): Promise<PlaceTags> {
        // Validate that both place ID and tag ID are provided
        if (!createPlaceTagsDto.plc_id || !createPlaceTagsDto.tag_id) {
            throw new BadRequestException('Place and Tag are required');
        }

        // Create a new PlaceTags instance with the provided data
        const newPlaceTags: DeepPartial<PlaceTags> = {
            plc_id: createPlaceTagsDto.plc_id, // Assign place ID
            tag_id: createPlaceTagsDto.tag_id, // Assign tag ID
        };

        // Save the new relationship in the database
        const createdPlaceTags = this.placeTagsRepository.create(newPlaceTags);
        return await this.placeTagsRepository.save(createdPlaceTags);
    }
}
