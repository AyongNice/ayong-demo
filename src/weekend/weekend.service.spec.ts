import { Test, TestingModule } from '@nestjs/testing';
import { WeekendService } from './weekend.service';

describe('WeekendService', () => {
  let service: WeekendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeekendService],
    }).compile();

    service = module.get<WeekendService>(WeekendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
