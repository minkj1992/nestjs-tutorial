import { Body, Param } from '@nestjs/common';
import { Controller, Get, Post, Req } from '@nestjs/common';
import { CreateCateDto } from './dto/create-cat.dto';
import { Request } from 'express'; // https://docs.nestjs.com/controllers#request-object

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `create ${id} cat`;
    // return this.moviesService.getOne(movieId);
  }

  @Post()
  async create(@Body() createCatDto: CreateCateDto) {
    return 'create a new cat';
  }
}
