import { Test, TestingModule } from '@nestjs/testing';
import { AyongService } from './ayong.service';

describe('AyongService', () => {
  let service: AyongService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AyongService],
    }).compile();

    service = module.get<AyongService>(AyongService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
