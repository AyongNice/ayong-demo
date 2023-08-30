import {Body, Controller, Get, Inject, Post} from "@nestjs/common";
import {AppService} from "./app.service";
import {WeekendService} from './weekend/weekend.service'
import {RestDaysService} from './rest-days/rest-days.service'
import {Config} from "./config/index";

interface Configs {
    [key: string]: string;
}

interface Res {
    data: any;

}

@Controller()
export class AppController {
    constructor(@Inject("阿勇服务") private readonly appService: AppService,
                @Inject("数据库配置") private readonly config: Configs,
                @Inject("动态全局值") private readonly host: string,
                private readonly weekend: WeekendService,
                private readonly restDays: RestDaysService,
                @Inject('api') private readonly diyConfig: Config,
    ) {
        // console.log('控制层构造函数---初始化-----生命周期执行')
    }

    onModuleInit() {
        // console.log('模块控制层---初始化----onModuleInit--生命周期执行')

    }

    onModuleDestroy() {
        // console.log('模块控制层---初卸载----onModuleDestroy--生命周期执行')

    }

    @Post('login')
    login(@Body() body: any): Res {
        // 假设验证通过后
        const data = this.appService.generateToken({userId: '123'});
        console.log(data)
        return {data}
    }

    @Get("ayong")
    getHello(): any {
        return this.diyConfig;
    }

    @Get("ayong/fongt")
    getHello2(): string {
        return this.appService.getHello2();
    }


}
