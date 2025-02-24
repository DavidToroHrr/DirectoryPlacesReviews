import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';

import { PlaceCategories } from '../entities/place-categories.entity';
import { CreatePlaceCategories } from '../dto/create-place-categories';

import { Places } from '../entities/places.entity';
import { Categories } from '../entities/categories.entity';

@Injectable()
export class PlaceCategoriesService {
    constructor(
        // Injecting the repository for the Places entity
        @InjectRepository(Places) private placesRepository: Repository<Places>,
        // Injecting the repository for the Categories entity
        @InjectRepository(Categories) private categoriesRepository: Repository<Categories>,
        // Injecting the repository for the PlaceCategories entity
        @InjectRepository(PlaceCategories) private placeCategoriesRepository: Repository<PlaceCategories>
    ) {}

    /**
     * Creates a new relationship between a place and a category
     * @param createPlaceCategoriesDto DTO containing place and category IDs
     * @returns The newly created relationship saved in the database
     */
    async createPlaceCategories(createPlaceCategoriesDto: CreatePlaceCategories): Promise<PlaceCategories> {
        // Validate that both IDs are provided
        if (!createPlaceCategoriesDto.plc_id || !createPlaceCategoriesDto.ctg_id) {
            throw new BadRequestException('Place and Category are required');
        }

        // Find the place in the database
        const place = await this.placesRepository.findOne({ where: { plc_id: createPlaceCategoriesDto.plc_id } });
        if (!place) {
            throw new NotFoundException('Place not found');
        }

        // Find the category in the database
        const category = await this.categoriesRepository.findOne({ where: { ctg_id: createPlaceCategoriesDto.ctg_id } });
        if (!category) {
            throw new NotFoundException('Category not found');
        }

        // Create a new PlaceCategories instance with the provided data
        const newPlaceCategories: DeepPartial<PlaceCategories> = {
            plc_id: createPlaceCategoriesDto.plc_id, // Assign place ID
            ctg_id: createPlaceCategoriesDto.ctg_id, // Assign category ID
            places: place, // Link to the Place entity
            categories: category, // Link to the Category entity
        };

        // Save the new relationship in the database
        const createdPlaceCategories = this.placeCategoriesRepository.create(newPlaceCategories);
        return await this.placeCategoriesRepository.save(createdPlaceCategories);
    }

    /**
     * Retrieves all place-category relationships
     * @returns List of all PlaceCategories records
     */
    async getPlaceCategories(): Promise<PlaceCategories[]> {
        return await this.placeCategoriesRepository.find();
    }
}
