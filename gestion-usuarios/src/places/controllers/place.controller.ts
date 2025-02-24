import { Controller, Post, Body, Get,Param } from '@nestjs/common';
import { PlacesService } from 'src/places/services/places.service';
import { CreatePlace } from '../dto/create-place';
import { get } from 'mongoose';

@Controller('place')
export class PlaceController {
        constructor(private placesService: PlacesService) {}
    
    @Post()
    createPlace(@Body()newPlace: CreatePlace) {
        return this.placesService.createPlace(newPlace);
    }

    @Get()
    getPlaces(){
        return this.placesService.getPlaces();
    }

    @Get(':id')
    getPlaceById(@Param('id') id: string) {  // 🔹 Recibe el parámetro como string
        return this.placesService.getPlaceById(Number(id)); // 🔹 Convierte a número antes de pasarlo al servicio
    }

}
