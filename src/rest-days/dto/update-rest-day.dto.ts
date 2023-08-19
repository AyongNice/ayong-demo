import { PartialType } from '@nestjs/mapped-types';
import { CreateRestDayDto } from './create-rest-day.dto';

export class UpdateRestDayDto extends PartialType(CreateRestDayDto) {}
