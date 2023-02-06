import { BaseProductDto } from "./base-product.dto";
import { PartialType } from '@nestjs/swagger';
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
    IsIntValidationOptions,
  } from '@shared/validation';

   //validar los campos de la clase


export class UpdateProductDto extends PartialType(BaseProductDto) {
  @IsString()
  @IsNotEmpty(isNotEmptyValidationOptions())
  @IsString(isStringValidationOptions())
  readonly title: string;
  @IsNotEmpty(isNotEmptyValidationOptions())
  @IsNumber(isNumberValidationOptions())
  @IsPositive(isPositiveValidationOptions)
  readonly price: number;

  @IsString()
  @IsNotEmpty(isNotEmptyValidationOptions())
  @IsString(isStringValidationOptions())
  readonly description: string;

  @ArrayNotEmpty(isNotEmptyValidationOptions())
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