// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroesVillanos } from './heroes-villanos/heroes-villanos.entity';
import { HeroesVillanosController } from './heroes-villanos/heroes-villanos.controller';
import { HeroesVillanosService } from './heroes-villanos/heroes-villanos.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '00000',
      database: 'heroes_villanos',
      entities: [HeroesVillanos],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([HeroesVillanos]),
  ],
  controllers: [HeroesVillanosController],
  providers: [HeroesVillanosService],
})
export class AppModule {}
