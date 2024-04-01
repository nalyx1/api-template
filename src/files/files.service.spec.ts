import { Test, TestingModule } from '@nestjs/testing';
import { FilessService } from './files.service';

describe('FilessService', () => {
  let service: FilessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilessService],
    }).compile();

    service = module.get<FilessService>(FilessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
