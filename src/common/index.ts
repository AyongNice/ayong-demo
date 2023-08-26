/**
 * 统一响应拦截
 */
import {Injectable, NestInterceptor} from "@nestjs/common";
import {ExecutionContext} from "@nestjs/common/interfaces/features/execution-context.interface";
import {map, Observable} from "rxjs";
import {CallHandler} from "@nestjs/common/interfaces/features/nest-interceptor.interface";


interface Res<T>{
    data:T;
    status:number;
    msg:string;
    success:number;
}

interface T {
}

@Injectable()
export class CommonRes implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Res<T>> {
        const request = context.switchToHttp().getRequest();
        // const config = INJECTOR.get('USER_MODULE_CONFIG'); // 获取模块配置
        // 从参数中获取自定义消息
        // const customMsg = request.args[0] || '阿勇统一响应处理成功';
        return next.handle().pipe(map(data => ({
                data,
                status: 0,
                msg:'config.customMsg',
                success: 0
            })
        ))
    }
}
