import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  // TODO: transfer to db
  // what is readonly for here do? -> 왜 에러가 뜨지 않을까?
  private readonly movies: Movie[] = [];

  create(createMovieDto: CreateMovieDto): number {
    // TODO: id auto inc
    this.movies.push({
      id: this.movies.length + 1,
      ...createMovieDto,
    });
    return this.movies.length;
  }

  findAll() {
    return this.movies;
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
