import { Express } from 'express';
import { Controller, Post, Body, Get, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { MediaService } from 'src/places/services/media.service';
import { CreateMedia } from '../dto/create-media';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('media')
export class MediaController {
    constructor(private mediaService: MediaService) {}

    @Post()
    @UseInterceptors(FileInterceptor('md_image'))
    async createMedia(
        @UploadedFile() file: Express.Multer.File,
        @Body() newMedia: CreateMedia
    ) {
        if (!file) {
            return { message: 'No se subió ninguna imagen' };
        }

        // 🔹 Convertir la imagen a Base64 sin comprimir
        const base64Image = file.buffer.toString('base64');

        return this.mediaService.createMedia({
            ...newMedia,
            md_image: base64Image, // 🔹 Guardamos la imagen en Base64 sin comprimir
        });
    }

    @Get(':id')
    async getImage(@Param('id') id: number) {
        const media = await this.mediaService.getMediaById(id);
        if (!media) {
            return { message: 'Imagen no encontrada' };
        }

        return {
            id: media.md_id,
            description: media.md_description,
            image: `data:image/jpeg;base64,${media.md_image}`, // 🔹 Prefijo para frontend
        };
    }
}