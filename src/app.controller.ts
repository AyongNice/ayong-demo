import {Controller, Get, Inject, Post} from "@nestjs/common";
import {AppService} from "./app.service";

interface Config {
    [key: string]: string;
}

@Controller()
export class AppController {
    constructor(@Inject("阿勇服务") private readonly appService: AppService,
                @Inject("数据库配置") private readonly config: Config, @Inject("动态全局值") private readonly host: string) {
        console.log('控制层构造函数---初始化-----生命周期执行')
    }
    onModuleInit() {
        console.log('模块控制层---初始化----onModuleInit--生命周期执行')

    }

    onModuleDestroy() {
        console.log('模块控制层---初卸载----onModuleDestroy--生命周期执行')

    }

    @Get("ayong")
    getHello(): string {
        console.log(this.host);
        return this.appService.getHello();
    }

    @Get("ayong/fongt")
    getHello2(): string {
        return this.appService.getHello2();
    }


}
