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

 
    }