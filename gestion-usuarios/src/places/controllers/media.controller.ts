import { Express } from 'express';
import { Controller, Post, Body, Get, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { MediaService } from 'src/places/services/media.service';
import { CreateMedia } from '../dto/create-media';
import { FileInterceptor } from '@nestjs/platform-express';

/**
 * Controller responsible for handling media-related HTTP requests.
 */
@Controller('media')
export class MediaController {
    
    /**
     * Constructor that injects the media service.
     * @param mediaService - The service handling business logic for media operations.
     */
    constructor(private mediaService: MediaService) {}

    /**
     * Endpoint to upload and create a new media entry.
     * Uses an interceptor to handle file uploads.
     * @param file - The uploaded image file.
     * @param newMedia - The data transfer object (DTO) containing media details.
     * @returns The newly created media entry.
     */
    @Post()
    @UseInterceptors(FileInterceptor('md_image'))
    async createMedia(
        @UploadedFile() file,
        @Body() newMedia: CreateMedia
    ) {
        if (!file) {
            return { message: 'No image was uploaded' };
        }

        // 🔹 Convert the image to Base64 without compression
        const base64Image = file.buffer.toString('base64');

        return this.mediaService.createMedia({
            ...newMedia,
            md_image: base64Image, // 🔹 Store the image in Base64 format without compression
        });
    }

    /**
     * Endpoint to retrieve an image by its ID.
     * @param id - The ID of the media record.
     * @returns The media record containing the image and metadata.
     */
    @Get(':id')
    async getImage(@Param('id') id: number) {
        const media = await this.mediaService.getMediaById(id);
        if (!media) {
            return { message: 'Image not found' };
        }

        return {
            id: media.md_id,
            description: media.md_description,
            image: `data:image/jpeg;base64,${media.md_image}`,
            reference: media.places // 🔹 Prefix for frontend usage
        };
    }
}
