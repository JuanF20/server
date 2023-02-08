import { CategoryEntity, CocinaEntity, CocineroEntity } from '../entities';
import { ProductEntity } from '../entities';

import { RepositoryEnum } from 'src/shared/enums/repository.enum';
import { DataSource } from 'typeorm';

export const categoryProviders = [
    {
        provide: RepositoryEnum.PRODUCT_REPOSITORY,
        userFactory: (dataSource: DataSource) =>
            dataSource.getRepository(ProductEntity),
       // inject: [DataSourceEnum.PG_DATA_SOURCE]
    },
    {
        provide: RepositoryEnum.CATEGORY_REPOSITORY,
        userFactory: (dataSource: DataSource) =>
            dataSource.getRepository(CategoryEntity),
       // inject: [DataSourceEnum.PG_DATA_SOURCE]
    },

     {
        provide: RepositoryEnum.COCINA_REPOSITORY,
        userFactory: (dataSource: DataSource) =>
            dataSource.getRepository(CocinaEntity),
       // inject: [DataSourceEnum.PG_DATA_SOURCE]
    },
     
        {
        provide: RepositoryEnum.COCINA_REPOSITORY,
        userFactory: (dataSource: DataSource) =>
            dataSource.getRepository(CocineroEntity),
       // inject: [DataSourceEnum.PG_DATA_SOURCE]
    }
]