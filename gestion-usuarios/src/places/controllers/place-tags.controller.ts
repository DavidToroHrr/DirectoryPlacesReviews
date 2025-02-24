import { PlaceTagsService } from '../services/place-tags.service';
import { Controller, Post, Body } from '@nestjs/common';
import { CreatePlaceTags } from '../dto/create-place-tags';

/**
 * Controller responsible for handling place tag-related HTTP requests.
 */
@Controller('place-tags')
export class PlaceTagsController {

    /**
     * Constructor that injects the place tags service.
     * @param placeTagsService - The service handling business logic for place tags.
     */
    constructor(private placeTagsService: PlaceTagsService) {}

    /**
     * Endpoint to create a new place tag.
     * @param createPlaceTagsDto - The data transfer object (DTO) containing place tag details.
     * @returns The newly created place tag.
     */
    @Post()
    async createPlaceTags(@Body() createPlaceTagsDto: CreatePlaceTags) {
        return this.placeTagsService.createPlaceTags(createPlaceTagsDto);
    }
}
