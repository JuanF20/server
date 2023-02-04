

import { Global, Module } from '@nestjs/common';
import { ventaProviders } from './ventas/providers';

@Global()
@Module({
   // imports: [DatabaseModule],
    controllers: [
        
        
    ],
    
    providers: [
       // ...ventaProviders,
        
       ,
        
    ],
    exports:[],
})
export class VentaModule {}
