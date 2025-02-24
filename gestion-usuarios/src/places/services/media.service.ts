import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';

import { Media } from '../entities/media.entity';
import { CreateMedia } from '../dto/create-media';
import { Places } from '../entities/places.entity';

/**
 * Service for handling media-related operations.
 */
@Injectable()
export class MediaService {
    
    /**
     * Constructor - Injects the repositories for Media and Places.
     */
    constructor(
        @InjectRepository(Media) private mediaRepository: Repository<Media>,
        @InjectRepository(Places) private placesRepository: Repository<Places>
    ) {}

    /**
     * Creates a new media entry associated with a place.
     * @param createMediaDto - Data Transfer Object (DTO) for creating media.
     * @returns The newly created media record.
     * @throws BadRequestException if the image is missing.
     * @throws NotFoundException if the associated place does not exist.
     */
    async createMedia(createMediaDto: CreateMedia): Promise<Media> {
        if (!createMediaDto.md_image) {
            throw new BadRequestException('La imagen es requerida');
        }

        // Buscar si el lugar asociado existe
        const place = await this.placesRepository.findOneBy({ plc_id: createMediaDto.plc_id });
        if (!place) {
            throw new NotFoundException('Place not found');
        }

        // Crear nuevo objeto Media
        const newMedia: DeepPartial<Media> = {
            plc_id: createMediaDto.plc_id,
            places: place,
            md_image: createMediaDto.md_image, // 🔹 Ya es Base64, solo lo guardamos
            md_description: createMediaDto.md_description, // 🔹 Convierte "" en NULL
        };

        const createdMedia = this.mediaRepository.create(newMedia);
        return await this.mediaRepository.save(createdMedia);
    }

    /**
     * Retrieves a media entry by its ID.
     * @param id - The ID of the media record.
     * @returns The requested media record.
     * @throws NotFoundException if no media is found with the given ID.
     */
    async getMediaById(id: number): Promise<Media> {
        const media = await this.mediaRepository.findOne({ where: { md_id: id }, relations: ['places'] });
    
        if (!media) {
            throw new NotFoundException(`No se encontró la imagen con ID ${id}`);
        }
    
        return media;
    }
}
