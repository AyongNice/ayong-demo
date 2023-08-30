import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {VersioningType} from "@nestjs/common";
import * as cors from 'cors';
import * as session from "express-session";
import {Request, Response, NextFunction} from 'express'
import {NestExpressApplication} from "@nestjs/platform-express";
import {join} from "path";
import {CommonRes} from "./common";
import {HttpFlter} from "./common/http-flter";
import Token from "./common/token";

const token = Token.getInstance()
function IkunAll(req: Request, res: Response, next: NextFunction) {
    next();
    // res.send('关注微信公众号 阿勇学前端')
}

/**
 * @author {微信公众号/B站  阿勇学前端}
 *
 * nestjs连接数据库 + 创建表 以及新增表字段+ 多表关联
 * yarn add mysql2 typeorm @nestjs/typeorm
 */
async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);


    /**
     * type:后端接口版本
     */
    app.enableVersioning({
        type: VersioningType.URI
    });


    /**
     * 微信公众号/B站  阿勇学前端
     * secret    生成服务端session 签名
     * name      生成客户端cookie 的名字 默认 connect.sid
     * cookie    设置返回到前端 key 的属性，长度: cookie:{maxAge:99999}。
     * rolling   在每次请求时强行设置 cookie，这将重置 cookie 过期时间(默认:false)
     */

    app.use(session({secret: "ayong", name: "ayong.sid", cookie: {maxAge: 99999}, rolling: true}));
    /** 全集中间件 **/
    app.use(IkunAll)
    /** 第三方中间件解决跨域 **/
    app.use(cors())

    /** 使用统一响应拦截器 **/
    app.useGlobalInterceptors(new CommonRes())

    /** 使用统一异常拦截器 **/
    app.useGlobalFilters(new HttpFlter())


    /** 开放服务器静态资源文件目录 供前端访问**/
    app.useStaticAssets(join(__dirname, 'images'), {
        prefix: '/ayong'
    })


    /** 开启服务器端口 **/
    await app.listen(3000);

    /** 关闭应用 **/
    setTimeout(() => {
        // app.close()
    }, 1000)
}

//开始运行
bootstrap();

