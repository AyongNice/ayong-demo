import {MiddlewareConsumer, Module, NestModule, RequestMethod} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {AyongModule} from "./ayong/ayong.module";
import {WeekendModule} from './weekend/weekend.module';
import {RestDaysModule} from './rest-days/rest-days.module';
import {Config} from "./config";
import { DatabaseModuleModule } from './database-module/database-module.module';
import * as process from "process";

/**
 * 服务端
 * 模块
 * 命令创建 nest g res 模块名字 综合性模块
 * 自定义独立 静态 Module模块
 * 自定义独立 动态 Module模块
 */
/**
 * 生命周期
 * 钩子
 */


@Module({
    imports: [AyongModule,
        WeekendModule,
        RestDaysModule,
        Config.forRot({name: 'ayong学前端'}),
        DatabaseModuleModule,
    ],
    controllers: [AppController],
    providers: [{provide: "阿勇服务", useClass: AppService}, {
        provide: "数据库配置", useValue: {
            主机: "192.168.566",
            密码: "80082088",
            用户名: "ayong",
            端口号: "8080"
        }
    }, {
        provide: "动态全局值",
        useFactory: () => {
            if (process.env.NODE_ENV === "production") {
                return "http://ayongnice.love/chatgpt";
            } else {
                return "http://192.168.566:8080";
            }
        }

    }
    ]
})
export class AppModule {



    onModuleInit() {
        // console.log('模块初始化----onModuleInit--生命周期执行')

    }

    onModuleDestroy() {
        // console.log('模块初卸载----onModuleInit--生命周期执行')

    }

}

process.on('exit', () => {
    // console.log('Application 程序关闭了');
    // 执行其他清理操作
});
