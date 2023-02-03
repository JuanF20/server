import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CocinaEntity } from "./cocina.entity";

export class CocineroEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @CreateDateColumn({
    name: 'created_date',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
  @UpdateDateColumn({
    name: 'updated_date',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
  @DeleteDateColumn({
    name: 'deleted_date',
    type: 'timestamptz',
    nullable: true,
  })
  deletedAt: Date;
  ///// campos

  @Column('varchar', {
    name: 'NombreCocinero',
    length: '40',
    unique: true,
    comment: 'NombreCocinero',
  })
  NombreCocinero: string;

  @Column('date', {
    name: 'IncioOperacionCocienro',
    unique: true,
    comment: 'Fecha de Operacion Cocinero',
  })
  IncioOperacionCocienro: Date;

  @Column('varchar', {
    name: 'GenerodelCocinero',
    length: '60',
    unique: true,
    comment: 'Genero del Cocinero',
  })
  GenerodelCocinero: string;

  @Column('varchar', {
    name: 'ViviendaCocinero',
    length: '60',
    unique: true,
    comment: 'Donde vive el Cocinero',
  })
  ViviendaCocinero: string;

  //Relaciones
  @OneToMany(() => CocinaEntity, (cocina) => cocina.cocineros)
  cocinero: CocinaEntity;
  cocina: any;
  // Relaciones

  @BeforeInsert()
  @BeforeUpdate()
  async setName() {
    if (!this.NombreCocinero) {
      return;
    }
    this.NombreCocinero = this.NombreCocinero.toUpperCase();
  }
}