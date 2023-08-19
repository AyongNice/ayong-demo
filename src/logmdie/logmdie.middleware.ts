import { Injectable, NestMiddleware } from '@nestjs/common';
import {Request,Response,NextFunction} from 'express'
@Injectable()
export class LogmdieMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next:NextFunction) {
    console.log("我学了两年半前端 我会唱跳rap 篮球")
    // res.send('关注微信公众号 阿勇学前端')
    next()
  }
}
