import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModuleController } from './database-module.controller';
import { DatabaseModuleService } from './database-module.service';

describe('DatabaseModuleController', () => {
  let controller: DatabaseModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatabaseModuleController],
      providers: [DatabaseModuleService],
    }).compile();

    controller = module.get<DatabaseModuleController>(DatabaseModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
