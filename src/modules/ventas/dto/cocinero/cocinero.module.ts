import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  // imports: [DatabaseModule],
  controllers: [],
  providers: [
    //...cocineroProviders
  ],
})
export class CocineroModule {}
