import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateCategory } from 'src/places/dto/create-category';
import { CategoriesService } from 'src/places/services/categories.service';

/**
 * Controller responsible for handling category-related HTTP requests.
 */
@Controller('category')
export class CategoryController {
    
    /**
     * Constructor that injects the category service.
     * @param categoriesService - The service handling business logic for categories.
     */
    constructor(private categoriesService: CategoriesService) {}

    /**
     * Endpoint to create a new category.
     * @param newCategory - The data transfer object (DTO) containing the category details.
     * @returns The newly created category.
     */
    @Post()
    createCategory(@Body() newCategory: CreateCategory) {
        return this.categoriesService.createCategory(newCategory);
    }

    /**
     * Endpoint to retrieve all categories.
     * @returns A list of all existing categories.
     */
    @Get()
    getCategories() {
        return this.categoriesService.getCategories();
    }
}
