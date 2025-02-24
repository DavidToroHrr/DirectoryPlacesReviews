import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tags } from '../entities/tags.entity';
@Injectable()
export class TagsService {
    constructor(@InjectRepository(Tags) private tagsRepository: Repository<Tags>) {}

    async createTag(tag: Tags): Promise<Tags> {
        const newModel: Tags = {
            tag_name: tag.tag_name,
        };
        const createdTag = this.tagsRepository.create(newModel);
        return await this.tagsRepository.save(createdTag);
    }

    async getTags(): Promise<Tags[]> {
        return await this.tagsRepository.find();
    }
}
