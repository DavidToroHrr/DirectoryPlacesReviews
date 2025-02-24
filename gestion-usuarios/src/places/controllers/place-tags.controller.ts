import { PlaceTagsService } from '../services/place-tags.service';
import { Controller, Post, Body, Get, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { CreatePlaceTags } from '../dto/create-place-tags';
@Controller('place-tags')
export class PlaceTagsController {
    constructor(private placeTagsService: PlaceTagsService) {}
    @Post()
    async createPlaceTags( @Body() createPlaceTagsDto: CreatePlaceTags ) {
        return this.placeTagsService.createPlaceTags(createPlaceTagsDto);
    }
    
}
