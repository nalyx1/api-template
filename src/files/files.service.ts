import { Injectable } from '@nestjs/common';
import { CreateFilessDto } from './dto/create-files.dto';
import { UpdateFilessDto } from './dto/update-files.dto';

@Injectable()
export class FilessService {
  create(createFilessDto: CreateFilessDto) {
    return 'This action adds a new files';
  }

  findAll() {
    return `This action returns all files`;
  }

  findOne(id: number) {
    return `This action returns a #${id} files`;
  }

  update(id: number, updateFilessDto: UpdateFilessDto) {
    return `This action updates a #${id} files`;
  }

  remove(id: number) {
    return `This action removes a #${id} files`;
  }
}
