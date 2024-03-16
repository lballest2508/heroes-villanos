// heroesvillanos.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HeroesVillanos } from './heroes-villanos.entity';

@Injectable()
export class HeroesVillanosService {
  constructor(
    @InjectRepository(HeroesVillanos)
    private heroesVillanosRepository: Repository<HeroesVillanos>,
  ) {}

  findAll(): Promise<HeroesVillanos[]> {
    return this.heroesVillanosRepository.find();
  }

  findOne(id: number): Promise<HeroesVillanos> {
    return this.heroesVillanosRepository.findOne({where: {id}});
  }

  async create(heroVillano: HeroesVillanos): Promise<HeroesVillanos> {
    return await this.heroesVillanosRepository.save(heroVillano);
  }

  async update(id: number, heroVillano: HeroesVillanos): Promise<HeroesVillanos> {
    await this.heroesVillanosRepository.update(id, heroVillano);
    return this.heroesVillanosRepository.findOne({where: {id}});
  }

  async delete(id: string): Promise<void> {
    await this.heroesVillanosRepository.delete(id);
  }
}
