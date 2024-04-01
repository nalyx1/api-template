import { Injectable } from '@nestjs/common';
import { CreateFilesDto } from './dto/create-files.dto';
import { UpdateFilesDto } from './dto/update-files.dto';

@Injectable()
export class FilesService {
  create(createFilesDto: CreateFilesDto) {
    return 'This action adds a new files';
  }

  findAll() {
    return `This action returns all files`;
  }

  findOne(id: number) {
    return `This action returns a #${id} files`;
  }

  update(id: number, updateFilesDto: UpdateFilesDto) {
    return `This action updates a #${id} files`;
  }

  remove(id: number) {
    return `This action removes a #${id} files`;
  }
}
