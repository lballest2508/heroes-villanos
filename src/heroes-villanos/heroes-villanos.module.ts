import { Module } from '@nestjs/common';
import { HeroesVillanosController } from './heroes-villanos.controller';
import { HeroesVillanosService } from './heroes-villanos.service';

@Module({
  controllers: [HeroesVillanosController],
  providers: [HeroesVillanosService]
})
export class HeroesVillanosModule {}
