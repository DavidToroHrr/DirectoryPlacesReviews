import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { Categories } from 'src/places/entities/categories.entity';
import { Places } from 'src/places/entities/places.entity';
import { Repository } from 'typeorm';
//import { CreateCategory } from '../dto/create-category';
import { DeepPartial } from 'typeorm';
import { CreatePlace } from '../dto/create-place';
@Injectable()
export class PlacesService {
    constructor(@InjectRepository(Places) private placesRepository: Repository<Places>) {}

    async createPlace(place: CreatePlace): Promise<Places> {
        const newModel: DeepPartial<Places> = {
            plc_name: place.plc_name,
            plc_address: place.plc_address,
            plc_type: place.plc_type,
            plc_operating_hours: place.plc_operating_hours,
            plc_description: place.plc_description,
        };
        const createdPlace = this.placesRepository.create(newModel);
        return await this.placesRepository.save(createdPlace);

    }

    async getPlaces(): Promise<Places[]> {
        return await this.placesRepository.find();
    }
    
    async getPlaceById(id: number): Promise<Places> {
        const place = await this.placesRepository.findOneBy({plc_id: id});
        if (!place) {
            throw new NotFoundException(`Place with ID ${id} not found`);
        }
        return place;
    }
}
