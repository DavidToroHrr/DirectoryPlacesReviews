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

import { PlaceCategories } from './entities/place-categories.entity';
import { PlaceCategoriesService } from './services/place-categories.service';
import { PlaceCategoriesController } from './controllers/place-categories.controller';
@Module({
    imports: [TypeOrmModule.forFeature([Categories,Places,Tags,Media,PlaceCategories])],
    controllers: [CategoryController,PlaceController,TagController,MediaController,PlaceCategoriesController],
    providers: [CategoriesService,PlacesService,TagsService,MediaService,PlaceCategoriesService],
})
export class PlacesModule {}
