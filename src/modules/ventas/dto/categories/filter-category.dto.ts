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

import { PaginationDto } from '../pagination/pagination.dto';
export class CategoryFilter extends PaginationDto {
  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsString(IsStringValidationOpntions())
  readonly name: string;

  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsString(IsStringValidationOpntions())
  readonly description: string;

  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsInt(IsStringValidationOpntions())
  @IsString(isNumberValidationOptions())
  readonly productId: number;
}


function isNotEmptyValidationOpntions(): any {
  throw new Error('Function not implemented.');
}
