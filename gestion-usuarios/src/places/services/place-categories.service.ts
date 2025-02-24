import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';

import { PlaceCategories } from '../entities/place-categories.entity';
import { CreatePlaceCategories } from '../dto/create-place-categories';

import { Places } from '../entities/places.entity';
import { Categories } from '../entities/categories.entity';
@Injectable()
export class PlaceCategoriesService {
    constructor(@InjectRepository(Places ) private placesRepository: Repository<Places>,
                @InjectRepository(Categories) private categoriesRepository: Repository<Categories>,
                @InjectRepository(PlaceCategories) private placeCategoriesRepository: Repository<PlaceCategories>)
                {}
    async createPlaceCategories(createPlaceCategoriesDto: CreatePlaceCategories): Promise<PlaceCategories> {
        if (!createPlaceCategoriesDto.plc_id || !createPlaceCategoriesDto.ctg_id) {
            throw new BadRequestException('Place and Category are required');
        }

        const place = await this.placesRepository.findOne({ where: { plc_id: createPlaceCategoriesDto.plc_id } });
        if (!place) {
            throw new NotFoundException('Place not found');
        }

        const category = await this.categoriesRepository.findOne({ where: { ctg_id: createPlaceCategoriesDto.ctg_id } });
        if (!category) {
            throw new NotFoundException('Category not found');
        }

        const newPlaceCategories: DeepPartial<PlaceCategories> = {
            plc_id: createPlaceCategoriesDto.plc_id,
            ctg_id: createPlaceCategoriesDto.ctg_id,
            places: place,
            categories: category,
        };

        const createdPlaceCategories = this.placeCategoriesRepository.create(newPlaceCategories);
        return await this.placeCategoriesRepository.save(createdPlaceCategories);
    }

}
