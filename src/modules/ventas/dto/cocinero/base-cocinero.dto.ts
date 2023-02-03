import { IsNotEmpty } from 'class-validator';
import {
  IsDate,
  IsIn,
  IsOptional,
  isPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator/types/decorator/decorators';
import {
  isNotEmptyValidationOpntions,
  IsStringValidationOpntions,
  IsPositiveValidationOpntions,
} from '@shared/validation';
import { CocinaEntity } from '../../entities/cocina.entity';

export class BaseCocineroDto {
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
  readonly GenerodelCocinero: string;

  @IsString()
  @MinLength(3)
  @MaxLength(60)
  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsString(IsStringValidationOpntions())
  readonly ViviendaCocinero: string;

  @IsNotEmpty()
  @IsString()
  @IsIn([])
  @IsNotEmpty(isNotEmptyValidationOpntions())
  readonly Cocinero: CocinaEntity[];
}
