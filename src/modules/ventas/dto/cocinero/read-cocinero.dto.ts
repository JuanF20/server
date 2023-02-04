import { BaseCocineroDto } from "./base-cocinero.dto";
import { Exclude, Expose } from 'class-transformer';


export class CocineroRead extends BaseCocineroDto {
  @Expose()
  readonly title;

  @Expose()
  readonly NombreCocinero;

  @Expose()
  readonly IncioOperacionCocienro;

  @Expose()
  readonly cocinaId;

  @Expose()
  readonly GenerodelCocinero;

  @Expose()
  readonly ViviendaCocinero;
}
