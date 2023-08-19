import { Test, TestingModule } from '@nestjs/testing';
import { RestDaysController } from './rest-days.controller';
import { RestDaysService } from './rest-days.service';

describe('RestDaysController', () => {
  let controller: RestDaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestDaysController],
      providers: [RestDaysService],
    }).compile();

    controller = module.get<RestDaysController>(RestDaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
