import { Test, TestingModule } from '@nestjs/testing';
import { HeroesVillanosController } from './heroes-villanos.controller';

describe('HeroesVillanosController', () => {
  let controller: HeroesVillanosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeroesVillanosController],
    }).compile();

    controller = module.get<HeroesVillanosController>(HeroesVillanosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
