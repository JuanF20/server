import { IsNotEmpty } from 'class-validator';

import {
  isNotEmptyValidationOpntions,
  IsStringValidationOpntions,
  IsPositiveValidationOpntions,
} from '@shared/validation';
import { BaseCocineroDto } from './base-cocinero.dto';
import {
  IsDate,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CocineroUpdate extends BaseCocineroDto {
  @IsString()
  @MinLength(3)
  @MaxLength(40)
  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsString(IsStringValidationOpntions())
  readonly NombreCocinero: string;

  @IsDate()
  @IsNotEmpty(isNotEmptyValidationOpntions())
  readonly IncioOperacionCocienro: Date;

  @IsString()
  @MinLength(3)
  @MaxLength(60)
  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsString(IsStringValidationOpntions())
  GenerodelCocinero: string;
  
  @IsString()
  @MinLength(3)
  @MaxLength(60)
  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsString(IsStringValidationOpntions())
  readonly ViviendaCocinero: string;
}
