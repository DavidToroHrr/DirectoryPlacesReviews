import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from 'src/places/entities/categories.entity';
import { Repository, DeepPartial } from 'typeorm';
import { CreateCategory } from '../dto/create-category';

/**
 * Service for handling category-related operations.
 */
@Injectable()
export class CategoriesService {
  
  /**
   * Constructor - Injects the repository for Categories.
   */
  constructor(@InjectRepository(Categories) private categoriesRepository: Repository<Categories>) {}

  /**
   * Creates a new category and saves it to the database.
   * @param category - Data Transfer Object (DTO) for creating a category.
   * @returns The newly created category.
   */
  async createCategory(category: CreateCategory): Promise<Categories> {
    const newModel: DeepPartial<Categories> = {
      ctg_name: category.ctg_name, // Ensures it matches the entity
    };

    const createdCategory = this.categoriesRepository.create(newModel);
    return await this.categoriesRepository.save(createdCategory);
  }

  /**
   * Retrieves all categories from the database.
   * @returns A list of categories.
   */
  async getCategories(): Promise<Categories[]> {
    return await this.categoriesRepository.find();
  }
}
