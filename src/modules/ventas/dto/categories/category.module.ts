import { Global, Module } from '@nestjs/common';
import { categoryProviders } from '../../providers';

@Global()
@Module({
  // imports: [DatabaseModule],
  controllers: [],
  providers: [
    //...categoryProviders
  ],
})
export class CategoryModule {}
