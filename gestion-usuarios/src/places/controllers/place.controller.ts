import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PlacesService } from 'src/places/services/places.service';
import { CreatePlace } from '../dto/create-place';

/**
 * Controller responsible for handling place-related HTTP requests.
 */
@Controller('place')
export class PlaceController {

    /**
     * Constructor that injects the places service.
     * @param placesService - The service handling business logic for places.
     */
    constructor(private placesService: PlacesService) {}

    /**
     * Endpoint to create a new place.
     * @param newPlace - The data transfer object (DTO) containing place details.
     * @returns The newly created place.
     */
    @Post()
    createPlace(@Body() newPlace: CreatePlace) {
        return this.placesService.createPlace(newPlace);
    }

    /**
     * Endpoint to retrieve all places.
     * @returns A list of all existing places.
     */
    @Get()
    getPlaces() {
        return this.placesService.getPlaces();
    }

    /**
     * Endpoint to retrieve a place by its ID.
     * @param id - The ID of the place to retrieve.
     * @returns The place that matches the given ID.
     */
    @Get(':id')
    getPlaceById(@Param('id') id: string) {  
        return this.placesService.getPlaceById(Number(id)); // Convert string to number before passing it to the service
    }
}
