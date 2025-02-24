import { Controller, Post, Body, Get } from '@nestjs/common';
import { PlaceCategoriesService } from '../services/place-categories.service';
import { CreatePlaceCategories } from '../dto/create-place-categories';

/**
 * Controller responsible for handling place category-related HTTP requests.
 */
@Controller('place-categories')
export class PlaceCategoriesController {

    /**
     * Constructor that injects the place categories service.
     * @param placeCategoriesService - The service handling business logic for place categories.
     */
    constructor(private placeCategoriesService: PlaceCategoriesService) {}

    /**
     * Endpoint to create a new place category.
     * @param createPlaceCategoriesDto - The data transfer object (DTO) containing place category details.
     * @returns The newly created place category.
     */
    @Post()
    async createPlaceCategories(
        @Body() createPlaceCategoriesDto: CreatePlaceCategories
    ) {
        return this.placeCategoriesService.createPlaceCategories(createPlaceCategoriesDto);
    }

    /**
     * Endpoint to retrieve all place categories.
     * @returns A list of all existing place categories.
     */
    @Get()
    async getPlaceCategories() {
        return this.placeCategoriesService.getPlaceCategories();
    }
}
