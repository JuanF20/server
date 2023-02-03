

import { Global, Module } from '@nestjs/common';
@Global()
@Module({
    imports: [DatabaseModule],
    controllers: [
        
        CategoryController
    ],
    providers: [
        ...ventaProviders,
        
        CategoryService,
        
    ],
    exports:[],
})
export class VentaModule {}
