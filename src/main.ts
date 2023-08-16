import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {VersioningType} from "@nestjs/common";
//yarn add @types/express-session 代码提示
//yarn add express-session
import * as cors from 'cors';

import * as session from "express-session";
import {isLogLevelEnabled} from "@nestjs/common/services/utils";
import {Request, Response, NextFunction} from 'express'

function IkunAll(req: Request, res: Response, next: NextFunction) {
    next();
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    /**
     * type:后端接口版本
     */
    app.enableVersioning({
        type: VersioningType.URI
    });

    /**
     * 微信公众号  阿勇学前端
     * secret    生成服务端session 签名
     * name      生成客户端cookie 的名字 默认 connect.sid
     * cookie    设置返回到前端 key 的属性，长度: cookie:{maxAge:99999}。
     * rolling   在每次请求时强行设置 cookie，这将重置 cookie 过期时间(默认:false)
     */

    app.use(session({secret: "ayong", name: "ayong.sid", cookie: {maxAge: 99999}, rolling: true}));
    app.use(IkunAll)
    app.use(cors())
    await app.listen(3000);

    setTimeout(() => {
        //关闭应用
        // app.close()
    }, 1000)
}

//开始运行
bootstrap();

