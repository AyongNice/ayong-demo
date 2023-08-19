import { Test, TestingModule } from '@nestjs/testing';
import { RestDaysService } from './rest-days.service';

describe('RestDaysService', () => {
  let service: RestDaysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestDaysService],
    }).compile();

    service = module.get<RestDaysService>(RestDaysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
