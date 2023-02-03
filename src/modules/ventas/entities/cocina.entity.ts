import { CocineroEntity } from "./cocinero.entity";
import  {  BeforeInsert ,  BeforeUpdate ,  Column ,  CreateDateColumn ,  DeleteDateColumn ,  ManyToOne ,  OneToMany,  PrimaryGeneratedColumn ,  UpdateDateColumn  }  from  "typeorm" ;

export class CocinaEntity {
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

  @Column('varchar', {
    name: 'NombreCocinaArea',
    length: '70',
    unique: true,
    comment: 'Nombre del area de la cocina',
  })
  NombreCocinaArea: string;

  @Column('date', {
    name: 'FechaInicionFuncionCocina',
    unique: true,
    comment: 'Fecha de nacimiento',
  })
  FechaInicioFuncionCocina: Date;

  @Column('varchar', {
    name: 'PisoUbicacionCocina',
    length: '40',
    unique: true,
    comment: 'Piso Ubicacion de Cocina en Letras',
  })
  PisoUbicacionCocina: string;

  @Column('varchar', {
    name: 'NombreJefeDeCocina',
    length: '20',
    unique: true,
    comment: 'Jefe de Cocina',
  })
  NombreJefeDeCocina: string;

  // Relaciones
  @ManyToOne(() => CocineroEntity, (cocinero) => cocinero.cocina)
  cocinas: CocineroEntity[];
  // Relaciones

  @BeforeInsert()
  @BeforeUpdate()
  async setName() {
    if (!this.NombreCocinaArea) {
      return;
    }
    this.NombreCocinaArea = this.NombreCocinaArea.toUpperCase();
  }
}