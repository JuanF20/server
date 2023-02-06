import { IsNotEmpty } from 'class-validator';
import {
  ArrayNotEmpty,
  IsArray,
  IsDate,
  IsIn,
  IsNumber,
  IsPositive,
  isPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator/types/decorator/decorators';
import {
  isNotEmptyValidationOpntions,
  IsStringValidationOpntions,
  IsPositiveValidationOpntions,
  isNumberValidationOptions,
} from '@shared/validation';
import { PaginationDto } from '../pagination/pagination.dto';

//visualizar mediante paginas el nombre,cedula
export class FilterProductDto extends PaginationDto{
@IsString()
  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsString(IsStringValidationOpntions())
  readonly title: string;
  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsNumber(isNumberValidationOptions())
  readonly price: number;

  @IsString()
  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsString(IsStringValidationOpntions())
  readonly description: string;

  @ArrayNotEmpty(isNotEmptyValidationOpntions())
  @IsArray(isNumberValidationOptions())
  readonly images: string[];
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


