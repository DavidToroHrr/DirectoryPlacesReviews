
import { Controller, Post, Body, Get, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { PlaceCategoriesService } from '../services/place-categories.service';
import { CreatePlaceCategories } from '../dto/create-place-categories';
@Controller('place-categories')
export class PlaceCategoriesController {

    constructor(private placeCategoriesService: PlaceCategoriesService) {}
    @Post()
    async createPlaceCategories(
        @Body() createPlaceCategoriesDto: CreatePlaceCategories
    ) {
        return this.placeCategoriesService.createPlaceCategories(createPlaceCategoriesDto);
    }
}
