import {Get, Inject, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import Token from './common/token'

const token = Token.getInstance()

@Injectable()
export class AppService {
    constructor() {
        // console.log('模块AppService---初始化----生命周期执行')

    }

    onModuleInit() {
        // console.log('模块AppService---初始化----onModuleInit--生命周期执行')

    }

    onModuleDestroy() {
        // console.log('模块AppService---初卸载----onModuleDestroy--生命周期执行')

    }

    generateToken(parmas: { userId: string }) {
        // 假设验证通过后
        return token.generateToken(parmas.userId);

    }

    @Get()
    getWeek() {

    }

    getHello(): string {
        return "nestJs-关注微信公众号 阿勇学前端 ";
    }

    getHello2(): string {
        return "我叫阿勇 我是B站小萌新";
    }
}
