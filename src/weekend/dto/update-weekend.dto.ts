import { PartialType } from '@nestjs/mapped-types';
import { CreateWeekendDto } from './create-weekend.dto';

export class UpdateWeekendDto extends PartialType(CreateWeekendDto) {}
