import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {Categories} from './entities/categories.entity';
import {CategoryController} from './controllers/category.controller';
import {CategoriesService} from './services/categories.service';

import { PlaceController } from './controllers/place.controller';
import { PlacesService } from './services/places.service';
import { Places } from './entities/places.entity';

import { TagController } from './controllers/tag.controller';
import { TagsService } from './services/tags.service';
import { Tags } from './entities/tags.entity';

import { MediaController } from './controllers/media.controller';
import { MediaService } from './services/media.service';
import { Media } from './entities/media.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Categories,Places,Tags,Media])],
    controllers: [CategoryController,PlaceController,TagController,MediaController],
    providers: [CategoriesService,PlacesService,TagsService,MediaService],
})
export class PlacesModule {}
