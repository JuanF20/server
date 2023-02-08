import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  // imports: [DatabaseModule],
  controllers: [],
  providers: [
    ///...cocinaProviders
  ],
})
export class CocinaModule {}
