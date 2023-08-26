import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModuleService } from './database-module.service';

describe('DatabaseModuleService', () => {
  let service: DatabaseModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseModuleService],
    }).compile();

    service = module.get<DatabaseModuleService>(DatabaseModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
