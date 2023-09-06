import {Body, Controller, Get, Inject, Param, Post} from "@nestjs/common";
import {AppService} from "./app.service";
import {WeekendService} from './weekend/weekend.service'
import {RestDaysService} from './rest-days/rest-days.service'
import {Config} from "./config/index";

const crypto = require('crypto-js');

interface Configs {
    [key: string]: string;
}

interface Res {
    data: any;

}


@Controller('ayong')
export class AppController {
    constructor(@Inject("阿勇服务") private readonly appService: AppService,
                @Inject("数据库配置") private readonly config: Configs,
                @Inject("动态全局值") private readonly host: string,
                private readonly weekend: WeekendService,
                private readonly restDays: RestDaysService,
                @Inject('api') private readonly diyConfig: Config,
                @Inject('httpKey') private readonly httpKey: { key: string },
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

    @Post('encrypt')
    encrypt(@Body() body: { data: string }): Res {

        console.log("解密前------", body.data)
        // 解密密钥，必须与前端相同
        // 使用AES解密算法解密数据
        const bytes = crypto.AES.decrypt(body.data, this.httpKey.key);
        const decryptedDataString = bytes.toString(crypto.enc.Utf8);

        // 将解密后的数据转换为JavaScript对象
        const decryptedData = JSON.parse(decryptedDataString);
        // 假设验证通过后
        console.log("解密后+++++++", decryptedData)
        return {data: '加密成功'}
    }

    @Get("hello")
    getHello(): any {
        return this.diyConfig;
    }

    @Get("ayong/fongt")
    getHello2(): string {
        return this.appService.getHello2();
    }


}
