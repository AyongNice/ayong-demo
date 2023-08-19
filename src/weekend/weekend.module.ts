import {Module} from '@nestjs/common';
import {WeekendService} from './weekend.service';
import {WeekendController} from './weekend.controller';
import {diskStorage} from 'multer'
import {MulterModule} from '@nestjs/platform-express'

import {Request} from 'express'
import {join, extname} from "path";

// 上传图片
/**
 * yarn add multer
 * yarn add @types/multer 代码提示插件库
 */
@Module({
    imports: [
        MulterModule.register(({
            storage: diskStorage({
                destination: join(__dirname, '../images'),
                filename(req: Request, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void) {
                    const filName: string = `${+new Date() + extname(file.originalname)}`
                    return callback(null, filName as string)
                }
            })
        }))
    ],
    controllers: [WeekendController],
    providers: [WeekendService],
    exports: [WeekendService]
})
export class WeekendModule {
}
