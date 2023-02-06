import { CocinaPaginationDto } from "./pagination-cocina.dto";
import { IsNotEmpty } from 'class-validator';
import {
  IsDate,
  IsIn,
  IsInt,
  isPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator/types/decorator/decorators';
import { CocineroEntity } from '../../entities/cocinero.entity';
import {
  isNotEmptyValidationOpntions,
  IsStringValidationOpntions,
  IsPositiveValidationOpntions,
  isNumberValidationOptions,
} from '@shared/validation';

export class CocinaFilter extends CocinaPaginationDto {
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

function isNotEmptyValidationOpntions(): any {
  throw new Error('Function not implemented.');
}
