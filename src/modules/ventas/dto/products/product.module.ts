import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  // imports: [DatabaseModule],
  controllers: [],
  providers: [
    //...productProviders
  ],
})
export class ProductModule {}
