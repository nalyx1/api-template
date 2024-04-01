import { Module } from '@nestjs/common';
import { FilessService } from './files.service';
import { FilessController } from './files.controller';

@Module({
  controllers: [FilessController],
  providers: [FilessService],
})
export class FilessModule {}
