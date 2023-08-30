/**
 * 统一响应拦截
 */
import {Inject, Injectable, NestInterceptor} from "@nestjs/common";
import {ExecutionContext} from "@nestjs/common/interfaces/features/execution-context.interface";
import {map, Observable} from "rxjs";
import {CallHandler} from "@nestjs/common/interfaces/features/nest-interceptor.interface";


interface Res<T> {
    data: T;
    status: number;
    msg: string;
    success: number;
}

interface T {
}

@Injectable()
export class CommonRes implements NestInterceptor {
    constructor() {
    }

    intercept(context: ExecutionContext, next: CallHandler): Observable<Res<T>> {
        // 从参数中获取自定义消息
        // const customMsg = request.args[0] || '阿勇统一响应处理成功';
        return next.handle().pipe(map(res => ({
                data: res?.data || res,
                status: 0,
                msg: res?.msg || '阿勇统一响应处理成功',
                success: 0
            })
        ))
    }
}
