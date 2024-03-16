// heroesvillanos.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { HeroesVillanosService } from './heroes-villanos.service';
import { HeroesVillanos } from './heroes-villanos.entity';

@Controller('heroesvillanos')
export class HeroesVillanosController {
  constructor(private heroesVillanosService: HeroesVillanosService) {}

  @Get()
  findAll(): Promise<HeroesVillanos[]> {
    return this.heroesVillanosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<HeroesVillanos> {
    return this.heroesVillanosService.findOne(id);
  }

  @Post()
  create(@Body() heroVillano: HeroesVillanos): Promise<HeroesVillanos> {
    return this.heroesVillanosService.create(heroVillano);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() heroVillano: HeroesVillanos): Promise<HeroesVillanos> {
    return this.heroesVillanosService.update(id, heroVillano);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.heroesVillanosService.delete(id);
  }
}
