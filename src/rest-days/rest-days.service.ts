import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestDayDto } from './dto/create-rest-day.dto';
import { UpdateRestDayDto } from './dto/update-rest-day.dto';


@Injectable()
export class RestDaysService {
  constructor() {
  }
  create(createRestDayDto: CreateRestDayDto) {
    return 'This action adds a new restDay';
  }

  findAll() {
    return {name:'两年半前端'};
  }

  findOne(id: number) {
    return `This action returns a #${id} restDay`;
  }

  update(id: number, updateRestDayDto: UpdateRestDayDto) {
    return `This action updates a #${id} restDay`;
  }

  remove(id: number) {
    return `This action removes a #${id} restDay`;
  }
}
