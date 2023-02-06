
import { Global, Module } from '@nestjs/common';
import { categoryProviders } from './ventas/providers';



   
@Global()
@Module(
    {
        // imports: [DatabaseModule],
        controllers:[],
        providers:[
            //...categoryProviders
        ],
    })

    export class CategoryModule{

    }