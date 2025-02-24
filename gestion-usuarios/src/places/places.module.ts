import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Importing entities
import { Categories } from './entities/categories.entity';
import { Places } from './entities/places.entity';
import { Tags } from './entities/tags.entity';
import { Media } from './entities/media.entity';
import { PlaceCategories } from './entities/place-categories.entity';
import { PlaceTags } from './entities/place-tags.entity';

// Importing controllers
import { CategoryController } from './controllers/category.controller';
import { PlaceController } from './controllers/place.controller';
import { TagController } from './controllers/tag.controller';
import { MediaController } from './controllers/media.controller';
import { PlaceCategoriesController } from './controllers/place-categories.controller';
import { PlaceTagsController } from './controllers/place-tags.controller';

// Importing services
import { CategoriesService } from './services/categories.service';
import { PlacesService } from './services/places.service';
import { TagsService } from './services/tags.service';
import { MediaService } from './services/media.service';
import { PlaceCategoriesService } from './services/place-categories.service';
import { PlaceTagsService } from './services/place-tags.service';

@Module({
    // Registering entities for TypeORM
    imports: [TypeOrmModule.forFeature([Categories, Places, Tags, Media, PlaceCategories, PlaceTags])],
    
    // Registering controllers for handling API requests
    controllers: [
        CategoryController,
        PlaceController,
        TagController,
        MediaController,
        PlaceCategoriesController,
        PlaceTagsController
    ],
    
    // Registering services for business logic and database interactions
    providers: [
        CategoriesService,
        PlacesService,
        TagsService,
        MediaService,
        PlaceCategoriesService,
        PlaceTagsService
    ],
})
export class PlacesModule {}
