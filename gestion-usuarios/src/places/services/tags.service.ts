import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Tags } from '../entities/tags.entity';
import { CreateTag } from '../dto/create-tag';

@Injectable()
export class TagsService {
    constructor(
        // Injecting the repository for the Tags entity
        @InjectRepository(Tags) private tagsRepository: Repository<Tags>
    ) {}

    /**
     * Creates a new tag in the database
     * @param createTagDto DTO containing tag details
     * @returns The newly created tag
     */
    async createTag(createTagDto: CreateTag): Promise<Tags> { 
        // Create a partial entity with the provided data
        const newModel: DeepPartial<Tags> = { 
            tag_name: createTagDto.tag_name // Assign tag name from DTO
        };
    
        // Create and save the new tag
        const createdTag = this.tagsRepository.create(newModel);
        return await this.tagsRepository.save(createdTag);
    }

    /**
     * Retrieves all tags from the database
     * @returns An array of tags
     */
    async getTags(): Promise<Tags[]> {
        return await this.tagsRepository.find();
    }
}
