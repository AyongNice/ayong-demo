import { Test, TestingModule } from '@nestjs/testing';
import { WeekendController } from './weekend.controller';
import { WeekendService } from './weekend.service';

describe('WeekendController', () => {
  let controller: WeekendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeekendController],
      providers: [WeekendService],
    }).compile();

    controller = module.get<WeekendController>(WeekendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
