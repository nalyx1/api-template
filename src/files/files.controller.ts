import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilessService } from './files.service';
import { CreateFilessDto } from './dto/create-files.dto';
import { UpdateFilessDto } from './dto/update-files.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('files')
@Controller('files')
export class FilessController {
  constructor(private readonly filessService: FilessService) {}

  @Post()
  create(@Body() createFilessDto: CreateFilessDto) {
    return this.filessService.create(createFilessDto);
  }

  @Get()
  findAll() {
    return this.filessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilessDto: UpdateFilessDto) {
    return this.filessService.update(+id, updateFilessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filessService.remove(+id);
  }
}
