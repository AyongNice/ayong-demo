import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {RestDaysService} from './rest-days.service';
import {RestDaysController} from './rest-days.controller';
import {LogmdieMiddleware}from '../logmdie/logmdie.middleware'
@Module({
  controllers: [RestDaysController],
  providers: [RestDaysService],
  exports:[RestDaysService]
})
export class RestDaysModule implements NestModule{
  configure(consumer: MiddlewareConsumer){
    consumer.apply(LogmdieMiddleware).forRoutes({path:'rest-days',method:RequestMethod.POST})
  }
}
