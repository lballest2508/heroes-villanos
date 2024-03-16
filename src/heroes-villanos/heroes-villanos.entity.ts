import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('HeroesVillanos')
export class HeroesVillanos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  tipo_personaje: string;

  @Column()
  imagen: string;

  @Column('text', { array: true })
  poderes: string[];
}
