import { PartialType } from '@nestjs/mapped-types';
import { CreateAyongDto } from './create-ayong.dto';

export class UpdateAyongDto extends PartialType(CreateAyongDto) {}
