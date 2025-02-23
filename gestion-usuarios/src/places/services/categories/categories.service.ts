import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from 'src/places/entities/categories.entity';
import { Repository } from 'typeorm';
import { CreateCategory } from '../../dto/create-category/create-category';
import { DeepPartial } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Categories) private categoriesRepository: Repository<Categories>) {}

  async createCategory(category: CreateCategory): Promise<Categories> {
    const newModel: DeepPartial<Categories> = {
      ctg_name: category.ctg_name, // Asegura que coincide con la entidad
    };

    const createdCategory = this.categoriesRepository.create(newModel);
    return await this.categoriesRepository.save(createdCategory);
  }

    async getCategories(): Promise<Categories[]> {
        return await this.categoriesRepository.find();
    }
}
