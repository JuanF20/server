import {
  IsString,
  Allow,
  IsBoolean,
  IsNumber,
  IsNotEmpty,
  ArrayNotEmpty,
  IsArray,
  IsPositive,
  IsInt,
} from 'class-validator';

  import {
    isBooleanValidationOptions,
    isNotEmptyValidationOptions,
    isNumberValidationOptions,
    isStringValidationOptions,
    IsArrayValidationOptions,
    isPositiveValidationOptions,
    IsIntValidationOptions
} from '@shared/validation';
  
import { ProductEntity } from '../../entities';

   //validar los campos de la clase


    export class BaseCategoryDto {
      @IsNotEmpty(isNotEmptyValidationOptions())
      @IsString(isStringValidationOptions())
      readonly name: string;

      @IsNotEmpty(isNotEmptyValidationOptions())
      @IsString(isStringValidationOptions())
      readonly description: string;

      @IsNotEmpty(isNotEmptyValidationOptions())
      @IsInt(IsIntValidationOptions())
      @IsString(isNumberValidationOptions())
      readonly productId: number;

      @IsNotEmpty(isNotEmptyValidationOpntions())
      @IsString(IsStringValidationOpntions())
      readonly product: ProductEntity[];
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
