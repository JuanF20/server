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

export class BaseProductDto {
    
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
    @IsArray(IsArrayValidationOptions())
    readonly images: string[];

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsInt(IsIntValidationOptions())
    @IsString(isNumberValidationOptions())
    readonly categpryId: number;
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