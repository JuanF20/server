import { BaseCategoryDto } from "./base-category.dto";
import { Exclude, Expose } from 'class-transformer';

export class ReadCategoryDto extends BaseCategoryDto {
  @Exclude()
  @Expose()
  readonly name;

  @Expose()
  readonly description;

  @Expose()
  readonly productId;
}