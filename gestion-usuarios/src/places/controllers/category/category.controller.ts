import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateCategory } from 'src/places/dto/create-category/create-category';
import { CategoriesService } from 'src/places/services/categories/categories.service';

@Controller('category')
export class CategoryController {
    constructor(private categoriesService: CategoriesService) {}

    @Post()
    createCategory(@Body()newCategory: CreateCategory) {
        return this.categoriesService.createCategory(newCategory);
    }

    @Get()
    getCategories() {
        return this.categoriesService.getCategories();
    }

}
