import { Controller, Post, Body, Get } from '@nestjs/common';
import { TagsService } from 'src/places/services/tags.service';
import { CreateTag } from '../dto/create-tag';

@Controller('tag')
export class TagController {
    constructor(private tagsService: TagsService) {}

    @Post()
    async createTag(@Body()newTag: CreateTag) {
        return this.tagsService.createTag(newTag);
    }

    @Get()
    getTags(){
        return this.tagsService.getTags();
    }

}
