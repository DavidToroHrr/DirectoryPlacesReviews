import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Places } from 'src/places/entities/places.entity';
import { Repository, DeepPartial } from 'typeorm';
import { CreatePlace } from '../dto/create-place';

@Injectable()
export class PlacesService {
    constructor(
        // Injecting the repository for the Places entity
        @InjectRepository(Places) private placesRepository: Repository<Places>
    ) {}

    /**
     * Creates a new place entry in the database
     * @param place DTO containing place details
     * @returns The newly created place
     */
    async createPlace(place: CreatePlace): Promise<Places> {
        // Create a partial entity with the provided data
        const newModel: DeepPartial<Places> = {
            plc_name: place.plc_name, // Place name
            plc_address: place.plc_address, // Address
            plc_type: place.plc_type, // Type of place
            plc_operating_hours: place.plc_operating_hours, // Operating hours
            plc_description: place.plc_description, // Description
        };

        // Create and save the new place
        const createdPlace = this.placesRepository.create(newModel);
        return await this.placesRepository.save(createdPlace);
    }

    /**
     * Retrieves all places from the database
     * @returns An array of places
     */
    async getPlaces(): Promise<Places[]> {
        return await this.placesRepository.find();
    }

    /**
     * Retrieves a place by its ID
     * @param id The ID of the place
     * @returns The place entity if found
     * @throws NotFoundException if the place does not exist
     */
    async getPlaceById(id: number): Promise<Places> {
        const place = await this.placesRepository.findOneBy({ plc_id: id });

        if (!place) {
            throw new NotFoundException(`Place with ID ${id} not found`);
        }

        return place;
    }
}
