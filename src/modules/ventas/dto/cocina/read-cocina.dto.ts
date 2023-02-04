import { Expose } from "class-transformer";
import { BaseCocinaDto } from "./base-cocina.dto";


export class CocinaRead extends BaseCocinaDto {
  @Expose()
  readonly title;

  @Expose()
  readonly NombreCocinaArea;

  @Expose()
  readonly FechaInicionFuncionCocina;

  @Expose()
  readonly PisoUbicacionCocina;

  @Expose()
  readonly NombreJefeDeCocina;

  @Expose()
  readonly cocineroId;

}
