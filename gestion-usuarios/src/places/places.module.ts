import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Importar entidades de TypeORM (SQL)
import { Categories } from './entities/categories.entity';
import { Places } from './entities/places.entity';
import { Tags } from './entities/tags.entity';
import { Media } from './entities/media.entity';
import { PlaceCategories } from './entities/place-categories.entity';
import { PlaceTags } from './entities/place-tags.entity';

// Importar controladores
import { CategoryController } from './controllers/category.controller';
import { PlaceController } from './controllers/place.controller';
import { TagController } from './controllers/tag.controller';
import { MediaController } from './controllers/media.controller';
import { PlaceCategoriesController } from './controllers/place-categories.controller';
import { PlaceTagsController } from './controllers/place-tags.controller';

// Importar servicios de SQL
import { CategoriesService } from './services/categories.service';
import { PlacesService } from './services/places.service';
import { TagsService } from './services/tags.service';
import { MediaService } from './services/media.service';
import { PlaceCategoriesService } from './services/place-categories.service';
import { PlaceTagsService } from './services/place-tags.service';

// Importar ModificationHistoryModule para MongoDB
import { ModificationHistoryModule } from '../modificationHistory/modificationsHistory.module';
import { ModificationHistoryService } from '../modificationHistory/services/modificationHistory.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Categories, Places, Tags, Media, PlaceCategories, PlaceTags]),
        ModificationHistoryModule, // Importamos el módulo de historial de MongoDB
    ],
    controllers: [
        CategoryController,
        PlaceController,
        TagController,
        MediaController,
        PlaceCategoriesController,
        PlaceTagsController
    ],
    providers: [
        CategoriesService,
        PlacesService,
        TagsService,
        MediaService,
        PlaceCategoriesService,
        PlaceTagsService,
        ModificationHistoryService, // Asegúrate de agregar el servicio aquí
    ],
})
export class PlacesModule {}
