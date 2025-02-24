import { Controller, Post, Body, Get } from '@nestjs/common';
import { TagsService } from 'src/places/services/tags.service';
import { CreateTag } from '../dto/create-tag';

/**
 * Controller responsible for handling tag-related HTTP requests.
 */
@Controller('tag')
export class TagController {

    /**
     * Constructor that injects the tags service.
     * @param tagsService - The service handling business logic for tags.
     */
    constructor(private tagsService: TagsService) {}

    /**
     * Endpoint to create a new tag.
     * @param newTag - The data transfer object (DTO) containing tag details.
     * @returns The newly created tag.
     */
    @Post()
    async createTag(@Body() newTag: CreateTag) {
        return this.tagsService.createTag(newTag);
    }

    /**
     * Endpoint to retrieve all tags.
     * @returns A list of all existing tags.
     */
    @Get()
    getTags() {
        return this.tagsService.getTags();
    }
}
