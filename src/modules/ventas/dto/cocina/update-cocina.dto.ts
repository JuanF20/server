import {
  IsString,
  MinLength,
  MaxLength,
  IsDate,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

import {
  isNotEmptyValidationOpntions,
  IsStringValidationOpntions,
  IsPositiveValidationOpntions,
} from '@shared/validation';
import { BaseCocinaDto } from './base-cocina.dto';


export class CocinaUpdate extends BaseCocinaDto {
  @IsString()
  @MinLength(3)
  @MaxLength(70)
  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsString(IsStringValidationOpntions())
  readonly NombreCocinaArea: string;

  @IsDate()
  @IsNotEmpty(isNotEmptyValidationOpntions())
  readonly FechaInicionFuncionCocina: Date;

  @IsString()
  @MinLength(3)
  @MaxLength(40)
  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsString(IsStringValidationOpntions())
  PisoUbicacionCocina: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsString(IsStringValidationOpntions())
  NombreJefeDeCocina: string;
}