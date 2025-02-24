import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Media } from '../entities/media.entity';
import { CreateMedia } from '../dto/create-media';
import { Places } from '../entities/places.entity';

@Injectable()
export class MediaService {
    constructor(
        @InjectRepository(Media) private mediaRepository: Repository<Media>,
        @InjectRepository(Places) private placesRepository: Repository<Places>
    ) {}

    async createMedia(createMediaDto: CreateMedia): Promise<Media> {
        if (!createMediaDto.md_image) {
            throw new BadRequestException('La imagen es requerida');
        }

        const place = await this.placesRepository.findOneBy({ plc_id: createMediaDto.plc_id });
        if (!place) {
            throw new NotFoundException('Place not found');
        }

        const newMedia: DeepPartial<Media> = {
            plc_id: createMediaDto.plc_id,
            places: place,
            md_image: createMediaDto.md_image, // 🔹 Ya es Base64, solo lo guardamos
            md_description: createMediaDto.md_description,
        };

        const createdMedia = this.mediaRepository.create(newMedia);
        return await this.mediaRepository.save(createdMedia);
    }

    async getMediaById(id: number): Promise<Media> {
        const media = await this.mediaRepository.findOne({ where: { md_id: id } });
    
        if (!media) {
            throw new NotFoundException(`No se encontró la imagen con ID ${id}`);
        }
    
        return media;
    }
    
}
