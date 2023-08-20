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
        return next.handle().pipe(map(data => ({
                data,
                status: 0,
                msg: 'ayong的统一响应拦截OK了',
                success: 0
            })
        ))
    }
}
