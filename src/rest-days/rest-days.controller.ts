import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestDaysService } from './rest-days.service';
import { CreateRestDayDto } from './dto/create-rest-day.dto';
import { UpdateRestDayDto } from './dto/update-rest-day.dto';

@Controller('rest-days')
export class RestDaysController {
  constructor(private readonly restDaysService: RestDaysService) {}

  @Post()
  create(@Body() createRestDayDto: CreateRestDayDto) {
    return this.restDaysService.create(createRestDayDto);
  }

  @Get()
  findAll() {
    return this.restDaysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restDaysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestDayDto: UpdateRestDayDto) {
    return this.restDaysService.update(+id, updateRestDayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restDaysService.remove(+id);
  }
}
