import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  onModuleInit() {
    console.log('serve-----onModuleInit------');
  }
  getHello(): string {
    return "nestJs-关注微信公众号 阿勇学前端 ";
  }

  getHello2(): string {
    return "我叫阿勇 我是B站小萌新";
  }
}
