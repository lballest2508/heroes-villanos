import { Test, TestingModule } from '@nestjs/testing';
import { HeroesVillanosService } from './heroes-villanos.service';

describe('HeroesVillanosService', () => {
  let service: HeroesVillanosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroesVillanosService],
    }).compile();

    service = module.get<HeroesVillanosService>(HeroesVillanosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
