import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AyongModule } from "./ayong/ayong.module";
import { ConfigModule } from "@nestjs/config";
import * as process from "process";

@Module({
  imports: [AyongModule, ConfigModule.forRoot({
    isGlobal: true // 让配置在整个应用中可用
  })],
  controllers: [AppController],
  providers: [{ provide: "阿勇服务", useClass: AppService }, {
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
    console.log('AppModule--初始化---onModuleInit------');
  }
  onModuleDestroy() {
    console.log('onModuleDestroy--卸载--');
  }
}
process.on('exit', () => {
  console.log('Application 程序关闭了');
  // 执行其他清理操作
});
