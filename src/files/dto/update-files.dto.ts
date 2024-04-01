import { PartialType } from '@nestjs/mapped-types';
import { CreateFilessDto } from './create-files.dto';

export class UpdateFilessDto extends PartialType(CreateFilessDto) {}
