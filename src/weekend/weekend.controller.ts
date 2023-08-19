import {
    Controller,
    Get,
    Post,
    Param,
    Delete,
    UseInterceptors,
    UploadedFile,
    Res
} from '@nestjs/common';
import {WeekendService} from './weekend.service';
import {FileInterceptor, FilesInterceptor} from "@nestjs/platform-express";
import {join} from "path";
/**
 * 文件流库
 */
import {zip} from 'compressing'

import {Response} from 'express'

/**
 * 上传图片接口 OK、、
 * files 上出多张图片
 * file 上传单张图片
 */
@Controller('weekend')
export class WeekendController {
    constructor(
        private readonly weekendService: WeekendService,
    ) {

    }

    @Post('upload-img')
    @UseInterceptors(FileInterceptor('file'))
    create(@UploadedFile() file) {
        console.log(file)
        return this.weekendService.create();
    }

    /**
     * 普通文件下载接口
     * benign大文件  不能切块
     * @param res
     */
    @Get('down-load')
    downLoad(@Res() res: Response): void {
        res.download(join(__dirname, '../images/1692329252270.jpeg'))
    }

    /**
     * 流 : 二进制 01 0101
     * 文件流下载接口 优点大文件  可以分块下载
     *  res.setHeader("Content-Type", 'application/octet-stream')
     *  res.setHeader("Content-Disposition","attachment;filename=ayong")
     * @param res
     */
    @Get('steam-down')
    async steamDown(@Res() res: Response): Promise<void>  {
        console.log(res)
        const url: string = join(__dirname, '../images/1692329252270.jpeg');
        const Stream = new zip.Stream();
        await Stream.addEntry(url);
        res.setHeader("Content-Type", 'application/octet-stream')
        res.setHeader("Content-Disposition", "attachment;filename=ayong");

        Stream.pipe(res)

    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.weekendService.remove(+id);
    }
}
