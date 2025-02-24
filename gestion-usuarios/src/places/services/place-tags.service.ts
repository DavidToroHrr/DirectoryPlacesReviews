import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';

import { PlaceTags } from '../entities/place-tags.entity';
import {CreatePlaceTags} from '../dto/create-place-tags';
@Injectable()
export class PlaceTagsService {
    constructor(@InjectRepository(PlaceTags) private placeTagsRepository: Repository<PlaceTags>) {}

    async createPlaceTags(createPlaceTagsDto: CreatePlaceTags): Promise<PlaceTags> {
        if (!createPlaceTagsDto.plc_id || !createPlaceTagsDto.tag_id) {
            throw new BadRequestException('Place and Tag are required');
        }

        const newPlaceTags: DeepPartial<PlaceTags> = {
            plc_id: createPlaceTagsDto.plc_id,
            tag_id: createPlaceTagsDto.tag_id,
        };

        const createdPlaceTags = this.placeTagsRepository.create(newPlaceTags);
        return await this.placeTagsRepository.save(createdPlaceTags);
    }
}
