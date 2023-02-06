import { IsNotEmpty } from 'class-validator';
import {
  IsDate,
  IsIn,
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
} from '@shared/validation';


export class BaseCocinaDto {
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
  
    
    
  @IsNotEmpty()
  @IsString()
  @IsIn([])
  @IsNotEmpty(isNotEmptyValidationOpntions())
  readonly Cocinero: CocineroEntity[];
}



function isNotEmptyValidationOpntions(): import('class-validator').ValidationOptions {
  throw new Error('Function not implemented.');
}

function IsStringValidationOpntions(): import('class-validator').ValidationOptions {
  throw new Error('Function not implemented.');
}

function IsPositiveValidationOpntions(): unknown {
  throw new Error('Function not implemented.');
}
