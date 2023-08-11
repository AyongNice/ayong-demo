import { Test, TestingModule } from '@nestjs/testing';
import { AyongController } from './ayong.controller';
import { AyongService } from './ayong.service';

describe('AyongController', () => {
  let controller: AyongController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AyongController],
      providers: [AyongService],
    }).compile();

    controller = module.get<AyongController>(AyongController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
