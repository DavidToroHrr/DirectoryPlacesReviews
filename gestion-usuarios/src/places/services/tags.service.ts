import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Tags } from '../entities/tags.entity';
import { CreateTag } from '../dto/create-tag';
@Injectable()
export class TagsService {
    constructor(@InjectRepository(Tags) private tagsRepository: Repository<Tags>) {}

    async createTag(createTagDto: CreateTag): Promise<Tags> { 
        const newModel: DeepPartial<Tags> = { 
            tag_name: createTagDto.tag_name  // 🔹 Ahora pasamos `CreateTag`
        };
    
        const createdTag = this.tagsRepository.create(newModel);
        return await this.tagsRepository.save(createdTag);
    }

    async getTags(): Promise<Tags[]> {
        return await this.tagsRepository.find();
    }
}
