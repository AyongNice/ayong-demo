

import {Request,Response} from "express";
import {Catch, ExceptionFilter, HttpException} from "@nestjs/common";
import {ArgumentsHost, HttpArgumentsHost} from "@nestjs/common/interfaces/features/arguments-host.interface";


@Catch(HttpException)
export class HttpFlter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost){
        const  ctx:HttpArgumentsHost =host.switchToHttp()
        const  requset =ctx.getRequest<Request>();
        const  response = ctx.getResponse<Response>();

        const status:number = exception.getStatus();

        response.status(status).json({
            success:false,
            time: +new Date(),
            data:exception.message,
            status,
            path:requset.url
        })
    }
}
