import { Module } from '@nestjs/common';
import {CategoryController} from './controllers/category/category.controller';
import {CategoriesService} from './services/categories/categories.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Categories} from './entities/categories.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Categories])],
    controllers: [CategoryController],
    providers: [CategoriesService],
})
export class PlacesModule {}
