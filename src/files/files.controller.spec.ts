import { Test, TestingModule } from '@nestjs/testing';
import { FilessController } from './files.controller';
import { FilessService } from './files.service';

describe('FilessController', () => {
  let controller: FilessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilessController],
      providers: [FilessService],
    }).compile();

    controller = module.get<FilessController>(FilessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
