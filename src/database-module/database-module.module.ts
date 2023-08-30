import {Module} from '@nestjs/common';
import {DatabaseModuleService} from './database-module.service';
import {DatabaseModuleController} from './database-module.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Member, Users} from "./entities/database-module.entity";
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '7758521',
            database: 'testdata',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],//匹配数据表实体文件
            synchronize: true,// 生产环境关闭
        }),

        TypeOrmModule.forFeature([Users, Member])
    ],
    controllers: [DatabaseModuleController],
    providers: [DatabaseModuleService, {
        provide: 'USER_MODULE_CONFIG', // 配置的令牌
        useValue: {
            getCustomMsg: 111, // 不再使用动态的配置
        },
    },],
})
export class DatabaseModuleModule {
}
